import { useState } from "react";
import { Box, Heading, Input, Textarea, Button, SimpleGrid, Flex } from "@chakra-ui/react";
import axios from "axios";

export default function Enquiry() {
  // State to store form data
  const [formData, setFormData] = useState({
    GFName: "",
    GLName: "",
    GPhone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    },
    Gemail: "",
    SFName: "",
    SLName: "",
    Grade: "",
    DOB: "",
    school: "",
    description: "",
    enquirySource: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle nested address fields
    if (name.startsWith("address")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Submit form data to the API
  const handleCreateEnquiry = async () => {
    try {
      const response = await axios.post("http://localhost:8000/enquiry/create", formData);
      console.log("Enquiry submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <Flex justify="center" align="center" bg="gray.100" minHeight="100vh">
      <Box
        width="80%"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        p={8}
        mb={8}
        color="gray.800"
      >
        <Heading textAlign="center" mb={6} color="teal.600">
          Enquiry Form
        </Heading>

        <Heading size="md" mb={4}>
          Guardian/Parent Details
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={4} mb={6}>
          <Input
            type="text"
            name="GFName"
            placeholder="Enter Parent/Guardian First Name"
            value={formData.GFName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="GLName"
            placeholder="Enter Parent/Guardian Last Name"
            value={formData.GLName}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="GPhone"
            placeholder="Enter Parent/Guardian Phone Number"
            value={formData.GPhone}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="Gemail"
            placeholder="Enter Parent/Guardian Email"
            value={formData.Gemail}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="address.street"
            placeholder="Street Address"
            value={formData.address.street}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address.state"
            placeholder="State"
            value={formData.address.state}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address.zipCode"
            placeholder="ZIP Code"
            value={formData.address.zipCode}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="address.country"
            placeholder="Country"
            value={formData.address.country}
            onChange={handleChange}
          />
        </SimpleGrid>

        <Heading size="md" mb={4}>
          Student Details
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={4} mb={6}>
          <Input
            type="text"
            name="SFName"
            placeholder="Enter Student's First Name"
            value={formData.SFName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="SLName"
            placeholder="Enter Student's Last Name"
            value={formData.SLName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="Grade"
            placeholder="Grade"
            value={formData.Grade}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="DOB"
            placeholder="Date of Birth"
            value={formData.DOB}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="school"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
          />
        </SimpleGrid>

        <Heading size="md" mb={4}>
          Additional Information
        </Heading>
        <SimpleGrid columns={[1]} spacing={4} mb={6}>
          <Textarea
            name="description"
            placeholder="Enter description or additional notes"
            value={formData.description}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="enquirySource"
            placeholder="How did you hear about us?"
            value={formData.enquirySource}
            onChange={handleChange}
          />
        </SimpleGrid>

        <Button
          type="button"
          colorScheme="teal"
          width="full"
          mt={4}
          onClick={handleCreateEnquiry}
        >
          Submit Enquiry
        </Button>
      </Box>
    </Flex>
  );
}
