import React, { useState } from 'react';
import { Box, Input, Button, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        <Link to='/'/>
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Login</Text>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={2}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />
        <Button type="submit" colorScheme="blue">Login</Button>
      </form>
      <ChakraLink as={Link} to="/register" mt={2}>Don't have an account? Register here</ChakraLink>
    </Box>
  );
}

export default LoginPage;
