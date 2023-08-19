// import React from 'react';
// import {
//   Box,
//   Container,
//   Flex,
//   IconButton,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Spacer,
//   Link,Image,
// } from '@chakra-ui/react';
// import { FiSearch } from 'react-icons/fi';
// import { FiMail } from 'react-icons/fi';
// import { FiPenTool } from 'react-icons/fi';
// import { FiUser } from 'react-icons/fi';
// import { FiHeart } from 'react-icons/fi';
// import logo from '../images/logo.jpg';

// const Navbar = () => {
//   return (
//     <Box bg="blue.500" color="white">
//       <Container maxW="xl">
//         <Flex justify="space-between"  py={4} alignItems="center">
//           <Flex alignItems="center" marginLeft="-350px">
//             <Link to="/" display="block">
//               <Image src={logo} alt="logo" w="180px" h="100px" alignSelf="flex-start" />
//             </Link>
            
//           </Flex>
//           <Spacer />
//           <Flex alignItems="center">
//           <InputGroup w="40%">
//             <Input placeholder="State" />
//           </InputGroup>
//           <InputGroup w="40%">
//             <Input placeholder="City" />
//             <InputRightElement>
//               <IconButton
//                 aria-label="Search"
//                 icon={<FiSearch />}
//                 bg="blue.400"
//                 color="white"
//                 _hover={{ bg: 'blue.600' }}
//               />
//             </InputRightElement>
//           </InputGroup>
//           </Flex>

//           <Spacer />

//           <Flex alignItems="center" marginRight="-240px">
//           <IconButton
//             aria-label="Newsletter"
//             icon={<FiMail />}
//             variant="ghost"
//             colorScheme="whiteAlpha"
//             mr={2}
//           />

//           <IconButton
//             aria-label="Blog"
//             icon={<FiPenTool />}
//             variant="ghost"
//             colorScheme="whiteAlpha"
//             mr={2}
//           />

//           <IconButton
//             aria-label="Login"
//             icon={<FiUser />}
//             variant="ghost"
//             colorScheme="whiteAlpha"
//             mr={2}
//           />

//           <IconButton
//             aria-label="Wishlist"
//             icon={<FiHeart />}
//             variant="ghost"
//             colorScheme="whiteAlpha"
//           />
//           </Flex>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export default Navbar;
import React from 'react';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Image,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import { FiSearch } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiPenTool } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import logo from '../images/logo.png';
//import { Tooltip } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Box bg="white" color="white">
      <Container maxW="xl">
        <Flex
          direction={{ base: 'column', md: 'row' }} // Stack columns in smaller screens
          align={{ base: 'center', md: 'center' }} // Center content in both directions
          justify="space-between"
          py={4}
        >
          <Flex alignItems="center" marginBottom={{ base: '1rem', md: '0' }}>
            <Link to="/" display="block">
            <Image src={logo} alt="logo" w="180px" h="100px" alignSelf="flex-start" />
            </Link>
          </Flex>
          <Flex alignItems="center">
            <InputGroup w="100%">
              <Input placeholder="State" />
            </InputGroup>
            <InputGroup w="100%" marginTop={{ base: '1rem', md: '0' }}>
              <Input placeholder="City" />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<FiSearch />}
                  bg="blue.400"
                  color="white"
                  _hover={{ bg: 'blue.600' }}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Spacer />

          <Flex alignItems="center">
            <Tooltip label="Newsletter" aria-label="Newsletter">
            <IconButton
              aria-label="Newsletter"
              icon={<FiMail />}
              variant="ghost"
              colorScheme="blue"
              mr={2}
            />
            </Tooltip>
            <Tooltip label="Blog" aria-label="Blog">
            <IconButton
              aria-label="Blog"
              icon={<FiPenTool />}
              variant="ghost"
              colorScheme="blue"
              mr={2}
            />
            </Tooltip>
            <Tooltip label="Login" aria-label="Login">
            <Link to="/login">
            <IconButton
              aria-label="Login"
              icon={<FiUser />}
              variant="ghost"
              colorScheme="blue"
              mr={2}
            />
            </Link>
            </Tooltip>
            <Tooltip label="Wishlist" aria-label="Wishlist">
            <IconButton
              aria-label="Wishlist"
              icon={<FiHeart />}
              variant="ghost"
              colorScheme="blue"
            />
            </Tooltip>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;

