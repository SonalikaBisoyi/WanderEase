import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  VStack,
} from '@chakra-ui/react';

export default function AddSite() {
  const [siteName, setSiteName] = useState('');
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send a POST request to your server to add the new site.
    // You can use fetch or Axios for this purpose.
    const newSiteData = {
      siteName: siteName, // Match the field names to your model
      stateName: stateName,
      cityName: cityName,
      imageUrl: imageUrl,
    };
  
    console.log(newSiteData);
    // Example fetch request (replace with your actual API endpoint):
    fetch('http://localhost:3001/api/addsite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSiteData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Site added successfully:', data);
        // Reset the form or provide feedback to the user
      })
      .catch((error) => {
        console.error('Error adding site:', error);
        // Handle errors or provide feedback to the user
      });
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Add a New Site
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl id="siteName" isRequired>
            <FormLabel>Site Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter site name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
          </FormControl>

          <FormControl id="stateName" isRequired>
            <FormLabel>State Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter state name"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
            />
          </FormControl>

          <FormControl id="cityName" isRequired>
            <FormLabel>City Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
          </FormControl>

          <FormControl id="imageUrl" isRequired>
            <FormLabel>Image URL</FormLabel>
            <Input
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormControl>
           console.log()
          <Button type="submit" colorScheme="teal">
            Add Site
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
