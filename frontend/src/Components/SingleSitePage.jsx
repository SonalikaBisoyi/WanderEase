import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Image,
  Stack,
} from '@chakra-ui/react';

function SingleSitePage() {
  const { siteId } = useParams();
  const [siteDetails, setSiteDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/site/${siteId}`)
      .then((response) => response.json())
      .then((data) => setSiteDetails(data))
      .catch((error) => console.error('Fetching error:', error));
  }, [siteId]);

  if (!siteDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxW="xl" mt={10}>
      <Box>
        <Heading>{siteDetails.site_name}</Heading>
        <Text>{siteDetails.description}</Text>
        <VStack align="start" spacing={4} mt={4}>
          <Image src={siteDetails.image1} alt={siteDetails.site_name} />
          <Image src={siteDetails.image2} alt={siteDetails.site_name} />
          <Image src={siteDetails.image3} alt={siteDetails.site_name} />
        </VStack>
      </Box>

      <Box mt={8}>
        <Heading size="md">Agents:</Heading>
        <Stack spacing={4}>
          {siteDetails.Agents.map((agent) => (
            <Box key={agent.id} borderWidth="1px" p={4} rounded="md">
              <Text>Name: {agent.name}</Text>
              <Text>Contact: {agent.contact}</Text>
              <Text>Email: {agent.email}</Text>
              <Text>Experience: {agent.experience} years</Text>
              <Text>Languages: {agent.languages.join(', ')}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}

export default SingleSitePage;
