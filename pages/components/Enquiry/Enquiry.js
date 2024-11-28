
import {Box,Heading,Input} from "@chakra-ui/react"


export default function Enquiry(){
    return (
     <>
     <Box bg="black">
     <Box height="100vh" width="50vw"  color="white">
        <Heading>Enquiry Form</Heading>
        <Heading>Guadian/Parent Details</Heading>
        <Input type="text" name="GFirstName" placeholder="enter Parents?Guardian First Name" required></Input>
        <Input type="text" name="GLastName" placeholder="enter Parents?Guardian Last Name" required></Input>
        <Input type="Phone" name="GPhone" placeholder="enter Parents/Guardian Phone Number" required></Input>
        <Input type="Email" name="GEmail" placeholder="enter Parents/Guardian email" required></Input>
        <Input type="url" name="GSocial" placeholder="enter Parents/Guardian Social Account"></Input>
       
       
        <Heading>Student Details</Heading>
        <Input type="text" name="SFirstName" placeholder="enter Student's First Name" required></Input>
        <Input type="text" name="SLastName" placeholder="enter Student's Last Name" required></Input>
        <Input type="Phone" name="SPhone" placeholder="enter Student's Phone Number if Not present add Guardian's/Parent's" required></Input>
        <Input type="Email" name="SEmail" placeholder="enter Student's email" required></Input>
        <Input type="url" name="SSocial" placeholder="enter Student's Social Account"></Input>
       </Box>
       </Box>
     </>

    )
}