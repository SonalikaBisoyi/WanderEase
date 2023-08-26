

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); 
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/${cityId}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [cityId]);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites in City ID: {cityId}
      </Heading>
      <VStack spacing={4}>
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
            <Heading as="h2" mt={2} fontSize="lg">
              {site.name}
            </Heading>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); 
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/${cityId}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [cityId]);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites in City ID: {cityId}
      </Heading>
      <VStack spacing={4}>
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
            <Heading as="h2" mt={2} fontSize="lg">
              {site.name}
            </Heading>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); 
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/${cityId}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [cityId]);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites in City ID: {cityId}
      </Heading>
      <VStack spacing={4}>
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
            <Heading as="h2" mt={2} fontSize="lg">
              {site.name}
            </Heading>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); 
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/${cityId}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [cityId]);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites in City ID: {cityId}
      </Heading>
      <VStack spacing={4}>
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
            <Heading as="h2" mt={2} fontSize="lg">
              {site.name}
            </Heading>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); 
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/sites/${cityId}`)
      .then(response => response.json())
      .then(data => setSites(data))
      .catch(error => console.error('Fetching error:', error));
  }, [cityId]);

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        Sites in City ID: {cityId}
      </Heading>
      <VStack spacing={4}>
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
            <Heading as="h2" mt={2} fontSize="lg">
              {site.name}
            </Heading>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

