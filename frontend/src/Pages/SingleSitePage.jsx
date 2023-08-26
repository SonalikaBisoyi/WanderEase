import React from 'react';
import { useParams } from 'react-router-dom';
import { ChakraProvider, Box, Container, Divider } from '@chakra-ui/react';

import SingleSitePage from '../Components/SingleSitePage';

function SingleSitePageWrapper() {
  const { siteId } = useParams();

  return (
    <ChakraProvider>
      <Box bg="gray.100" minHeight="100vh">
        
        <Container maxW="xl" pt={10}>
          <SingleSitePage siteId={siteId} />
          <Divider my={6} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default SingleSitePageWrapper;
