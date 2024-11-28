import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Box, Input, Button, Text, Flex } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const [isError, setIsError] = useState(false); 
  const router = useRouter();
 
  const handleLogin = async () => {
    // console.log("clicked")
    // console.log(email,password)
        try {
      const response = await axios.post('http://localhost:8000/admin/login', {
        email,
        password,
      });
     console.log(response);
      
      setMessage(response.data.msg);
      setIsError(false); 
      localStorage.setItem('token', response.token); 
      setTimeout(() => {
        router.push('/components/Enquiry/Enquiry'); 
      }, 1000);
    } catch (error) {
      
      setMessage(
        error.response?.data?.message || 'An error occurred. Please try again.'
      );
      setIsError(true); 
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh" bg="gray.100">
      <Box p={6} boxShadow="lg" borderRadius="md" bg="white">
        <Text
          mb={4}
          color={isError ? 'red.500' : 'green.500'}
          fontWeight="bold"
          textAlign="center"
        >
          {message}
        </Text>
        <Input
          placeholder="Email"
          mb={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          mb={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" width="full" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
