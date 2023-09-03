// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ChakraProvider, Box, Container, Divider } from '@chakra-ui/react';

// import SingleSitePage from '../Components/SingleSitePage';

// function SingleSitePageWrapper() {
//   const { siteId } = useParams();

//   return (
//     <ChakraProvider>
//       <Box bg="gray.100" minHeight="100vh">
        
//         <Container maxW="xl" pt={10}>
//           <SingleSitePage siteId={siteId} />
//           <Divider my={6} />
//           {/* Add any additional content or components here */}
//         </Container>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default SingleSitePageWrapper;
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';

// export default function SinglesitePage() {
//   const { siteId } = useParams(); // Extract siteId from URL parameter
//   const [siteDetails, setSiteDetails] = useState(null);

//   useEffect(() => {
//     console.log("Fetching data for siteId:", siteId);
   
//     // Fetch data from your API using the provided siteId
//     fetch(`http://localhost:3001/api/site/ssite/${siteId}`)
//     .then(response => {
//       console.log("Response status:", response.status);
//       return response.json();
//     })
//       .then(response => response.json())
//       .then(data => 
//         console.log("Fetched data:", data),
//         setSiteDetails(data))
      
//       .catch(error => console.error('Fetching error:', error));
//   }, [siteId]);

//   if (!siteDetails) {
//     return <div>Loading...</div>;
//   }
//   console.log("in single site page")
//   const { name, description, image1, Agents } = siteDetails;

//   return (
//     <Box p={8}>
//       <Heading as="h1" mb={4}>
//         {name}
//       </Heading>
//       <VStack align="start" spacing={4} mt={4}>
//           <Image src={siteDetails.image1} alt={siteDetails.site_name} />
//           <Image src={siteDetails.image2} alt={siteDetails.site_name} />
//           <Image src={siteDetails.image3} alt={siteDetails.site_name} />
//         </VStack>
//       <Text fontSize="lg" fontWeight="bold" mb={4}>
//         Description:
//       </Text>
//       <Text mb={4}>{description}</Text>

//       <Text fontSize="lg" fontWeight="bold" mb={4}>
//         Agents:
//       </Text>
//       <VStack spacing={4}>
//         {Agents.map(agent => (
//           <Box key={agent.id} p={4} borderWidth="1px" borderRadius="md">
//             <Text fontSize="xl" fontWeight="semibold">
//               Agent Name: {agent.name}
//             </Text>
//             <Text>Contact: {agent.contact}</Text>
//             <Text>Email: {agent.email}</Text>
//             <Text>Experience: {agent.experience} years</Text>
//             <Text>Languages: {agent.languages}</Text>
//           </Box>
//         ))}
//       </VStack>
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';

export default function SinglesitePage() {
  const { siteId } = useParams();
  const [siteDetails, setSiteDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/site/ssite/${siteId}`)
      .then(response => response.json())
      .then(data =>setSiteDetails(data))
      .catch(error => console.error('Fetching error:', error));
  }, [siteId]);
   console.log("Site Details",siteDetails)
  if (!siteDetails) {
    return <div>Loading...</div>;
  }

  const { siteName, siteImages, bv, desc, reqq, food, tt, agents } = siteDetails;

  return (
    <Box p={8}>
      <Heading as="h1" mb={4}>
        {siteName}
      </Heading>
      <VStack align="start" spacing={4} mt={4}>
        <Image src={siteImages.image1} alt={siteName} />
        <Image src={siteImages.image2} alt={siteName} />
        <Image src={siteImages.image3} alt={siteName} />
      </VStack>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Description:
      </Text>
      <Text mb={4}>{desc}</Text>

      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Best Visit:
      </Text>
      <Text mb={4}>{bv}</Text>

      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Requirements:
      </Text>
      <Text mb={4}>{reqq}</Text>

      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Food:
      </Text>
      <Text mb={4}>{food}</Text>

      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Tourism Type:
      </Text>
      <Text mb={4}>{tt}</Text>

      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Agents:
      </Text>
      <VStack spacing={4}>
        {agents.map(agent => (
          <Box key={agent.id} p={4} borderWidth="1px" borderRadius="md">
            <Text fontSize="xl" fontWeight="semibold">
              Agent Contact: {agent.contact}
            </Text>
            <Text>Email: {agent.email}</Text>
            <Text>Experience: {agent.experience} years</Text>
            <Text>Languages: {agent.languages}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}