// import React from 'react';
// import {
//   Box,
//   Container,
//   Flex,
//   Text,
//   Link,
//   VStack,
//   HStack,
//   Spacer,
//   Icon,SimpleGrid,
// } from '@chakra-ui/react';
// import { FiHome, FiInfo, FiBook, FiMail, FiPhone, FiLock, FiHelpCircle } from 'react-icons/fi';
// import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
// const stateNames = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
//     'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
//     'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
//     'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
//     'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
//   ];

// const Footer = () => {
//   return (
//     <Box bg="gray.800" color="white" py={10}>
//       <Container maxW="8xl">
//         <Flex>
//           <Box h="60%">
//             <HStack spacing={10} align="flex-start">
//             <VStack align="flex-start" spacing={1}>
//                 <Text fontWeight="bold" textAlign="center">States</Text>
//                 <SimpleGrid columns={5} spacing={4}>
//                   {stateNames.map((stateName, index) => (
//                     <Link key={index}>{stateName}</Link>
//                   ))}
//                 </SimpleGrid>
//               </VStack>
//               <VStack align="flex-start" spacing={2}>
//                 <Text fontWeight="bold">Navigation</Text>
//                 <Link><Icon as={FiHome} mr={2} />Home</Link>
//                 <Link><Icon as={FiInfo} mr={2} />About Us</Link>
//                 <Link><Icon as={FiBook} mr={2} />Blog</Link>
//                 <Link><Icon as={FiMail} mr={2} />Newsletter</Link>
//                 <Link><Icon as={FiPhone} mr={2} />Contact Us</Link>
//               </VStack>
//               <Box >
//               <VStack align="flex-start" spacing={2}>
//                 <Text fontWeight="bold">Quick Links</Text>
//                 <Link><Icon as={FiLock} mr={2} />Privacy Policy</Link>
//                 <Link><Icon as={FiLock} mr={2} />Terms of Use</Link>
//                 <Link><Icon as={FiHelpCircle} mr={2} />FAQs</Link>
//               </VStack>
//               <VStack align="center" mt={4}>
//                  <Text fontWeight="bold">Follow Us</Text>
//                    <HStack spacing={4}>
//                       <Link><Icon as={FaInstagram} mr={2} /></Link>
//                       <Link><Icon as={ FaTwitter} mr={2} /></Link>
//                       <Link><Icon as={FaYoutube} mr={2} /></Link>
//                       <Link><Icon as={FaFacebook } mr={2} /></Link>
//                     </HStack>
//                 </VStack>
//               </Box>
//             </HStack>
//           </Box>

//           <Spacer />

//           <Box h="40%">
//             {/* Customer review cards */}
//           </Box>
//         </Flex>

//         <Box mt={8}>
//           <Text>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</Text>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  FiHome,
  FiInfo,
  FiBook,
  FiMail,
  FiPhone,
  FiLock,
  FiHelpCircle,
} from 'react-icons/fi';
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const stateNames = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Container maxW="full">
        <Flex direction="column" align="center" justify="center">
          <Box w="100%" mb={8}>
            <VStack align="center" spacing={4}>
              <Text fontWeight="bold">States</Text>
              <SimpleGrid columns={{ base: 2, md: 5 }} spacing={2}>
                {stateNames.map((stateName, index) => (
                  <Link key={index}>{stateName}</Link>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          <Box w="100%" mb={8}>
            <VStack align="center" spacing={4}>
              <Text fontWeight="bold">Navigation</Text>
              <Link>
                <Icon as={FiHome} mr={2} />
                Home
              </Link>
              <Link href="/aboutus">
                <Icon as={FiInfo} mr={2} />
                About Us
              </Link>
              <Link>
                <Icon as={FiBook} mr={2} />
                Blog
              </Link>
              <Link>
                <Icon as={FiMail} mr={2} />
                Newsletter
              </Link>
              <Link href="/contactus">
                <Icon as={FiPhone} mr={2} />
                Contact Us
              </Link>
            </VStack>
          </Box>

          <Box w="100%" mb={8}>
            <VStack align="center" spacing={4}>
              <Text fontWeight="bold">Quick Links</Text>
              <Link>
                <Icon as={FiLock} mr={2} />
                Privacy Policy
              </Link>
              <Link>
                <Icon as={FiLock} mr={2} />
                Terms of Use
              </Link>
              <Link href='/faq'>
                <Icon as={FiHelpCircle} mr={2} />
                FAQs
              </Link>
            </VStack>
          </Box>

          <Box w="100%" mb={8}>
            <VStack align="center" spacing={4}>
              <Text fontWeight="bold">Follow Us</Text>
              <HStack spacing={4}>
                <Link>
                  <Icon as={FaInstagram} />
                </Link>
                <Link>
                  <Icon as={FaTwitter} />
                </Link>
                <Link>
                  <Icon as={FaYoutube} />
                </Link>
                <Link>
                  <Icon as={FaFacebook} />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Flex>

        <Box mt={8} textAlign="center">
          <Text>
            &copy; {new Date().getFullYear()} Your Company. All rights
            reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

