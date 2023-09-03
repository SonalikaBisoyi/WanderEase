import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from '@chakra-ui/react';

export default function AddAgent() {
  const [name, setName] = useState('');
  const [siteName, setSiteName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [languages, setLanguages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can send a POST request to your server to add the new agent.
    // You can use fetch or Axios for this purpose.
    const newAgentData = {
      name,
      siteName,
      contact,
      email,
      experience,
      languages,
    };

    // Example fetch request (replace with your actual API endpoint):
    fetch('http://localhost:3001/api/addagent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAgentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Agent added successfully:', data);
        // Reset the form or provide feedback to the user
      })
      .catch((error) => {
        console.error('Error adding agent:', error);
        // Handle errors or provide feedback to the user
      });
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Add a New Agent
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl id="name" isRequired>
            <FormLabel>Agent Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter agent name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="siteName" isRequired>
            <FormLabel>Site Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter site name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </FormControl>

          <FormControl id="contact" isRequired>
            <FormLabel>Contact</FormLabel>
            <Input
              type="text"
              placeholder="Enter contact information"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="experience" isRequired>
            <FormLabel>Experience (in years)</FormLabel>
            <Input
              type="number"
              placeholder="Enter experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormControl>

          <FormControl id="languages" isRequired>
            <FormLabel>Languages</FormLabel>
            <Input
              type="text"
              placeholder="Enter languages spoken"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Add Agent
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
