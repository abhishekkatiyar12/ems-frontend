import {
    Box,
    Flex,
    Heading,
    Input,
    Button,
    VStack,
    InputGroup,
    InputRightElement,
    IconButton,
    useColorModeValue,
    FormControl,
    FormLabel,
    FormHelperText,
    Checkbox
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useState } from 'react';
  import Navbar from '../navbar/navbar';
  export default function SignUp() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  
    return (
        <>
        <Navbar/>
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Box
          maxW="lg"
          w="full"
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Heading textAlign="center" mb={6}>
            Create an Account
          </Heading>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Your Full Name"
                bg={useColorModeValue('gray.100', 'gray.600')}
                borderRadius="md"
                _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
              />
            </FormControl>
  
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                bg={useColorModeValue('gray.100', 'gray.600')}
                borderRadius="md"
                _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="phone"
                placeholder="Your Phone"
                bg={useColorModeValue('gray.100', 'gray.600')}
                borderRadius="md"
                _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
              />
              <FormHelperText>We'll never share your Phone.</FormHelperText>
            </FormControl>
  
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword1 ? 'text' : 'password'}
                  placeholder="Create a Password"
                  bg={useColorModeValue('gray.100', 'gray.600')}
                  borderRadius="md"
                  _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
                />
                <InputRightElement>
                  <IconButton
                    icon={showPassword1 ? <ViewOffIcon /> : <ViewIcon />}
                    aria-label="Toggle Password Visibility"
                    onClick={() => setShowPassword1(!showPassword1)}
                    variant="ghost"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword2? 'text' : 'password'}
                  placeholder="Confirm Password"
                  bg={useColorModeValue('gray.100', 'gray.600')}
                  borderRadius="md"
                  _placeholder={{ color: useColorModeValue('gray.500', 'gray.300') }}
                />
                <InputRightElement>
                  <IconButton
                    icon={showPassword2 ? <ViewOffIcon /> : <ViewIcon />}
                    aria-label="Toggle Password Visibility"
                    onClick={() => setShowPassword2(!showPassword2)}
                    variant="ghost"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
  
            <FormControl id="terms" isRequired>
              <Checkbox colorScheme="teal">I agree to the Terms and Conditions</Checkbox>
            </FormControl>
  
            <Button colorScheme="teal" w="full" size="lg">
              Sign Up
            </Button>
          </VStack>
  
          <Button colorScheme="teal" mt={4} alignSelf="center" w="full" as='a' href="/components/login/login">
            Already have an account? Login here
          </Button>
          
        </Box>
      </Flex>
      </>
    );
  }
  