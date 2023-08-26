import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, SimpleGrid, Image, Stack } from '@chakra-ui/react';

export default function TsitesPage() {
  const { tourismType } = useParams();
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/tourism_type/${tourismType}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [tourismType]);
  console.log('TSites',sites);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites for Tourism Type: {tourismType}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {sites.map(site => (
          <Box
            key={site.site_id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image src={site.image1} alt={site.name} />
            <Stack mt={2}>
              <Heading as="h2" fontSize="lg">
                {site.name}
              </Heading>
              <p>Tourism Type: {site.tourism_type}</p>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
