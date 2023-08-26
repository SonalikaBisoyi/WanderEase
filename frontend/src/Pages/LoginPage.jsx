import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        // Login successful, redirect to another page
        console.log('login success');
        setSuccess(true);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  if (success) {
    return <Navigate to="/" />;
  }

  return (
    <Box p={4} bgImage="https://images.pexels.com/photos/3584309/pexels-photo-3584309.jpeg?auto=compress&cs=tinysrgb&w=600" bgSize="cover">
      <Flex minH={'100vh'} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌
            </Text>
          </Stack>
          <Box rounded={'lg'} boxShadow={'lg'} p={8}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    mb={2}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb={4}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text color={'blue.400'}>Forgot password?</Text>
                  </Stack>
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{ bg: 'blue.500' }}
                    type="submit"
                  >
                    Login
                  </Button>
                  <Link to="/register" mt={2}>
                    Don't have an account? Register here
                  </Link>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default LoginPage;
