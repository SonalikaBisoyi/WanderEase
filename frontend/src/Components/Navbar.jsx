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
//   Image,
//   Tooltip,
// } from '@chakra-ui/react';
// import { Link } from 'react-router-dom'; 
// import { FiSearch } from 'react-icons/fi';
// import { FiMail } from 'react-icons/fi';
// import { FiPenTool } from 'react-icons/fi';
// import { FiUser } from 'react-icons/fi';
// import { FiHeart } from 'react-icons/fi';
// import logo from '../images/logo.png';


// const Navbar = () => {
//   return (
//     <Box bg="white" color="white">
//       <Container maxW="xl">
//         <Flex
//           direction={{ base: 'column', md: 'row' }} 
//           align={{ base: 'center', md: 'center' }} 
//           justify="space-between"
//           py={4}
//         >
//           <Flex alignItems="center" marginBottom={{ base: '1rem', md: '0' }}>
//             <Link to="/" display="block">
//             <Image src={logo} alt="logo" w="180px" h="100px" alignSelf="flex-start" />
//             </Link>
//           </Flex>
//           <Flex alignItems="center">
//             <InputGroup w="100%">
//               <Input placeholder="State" />
//             </InputGroup>
//             <InputGroup w="100%" marginTop={{ base: '1rem', md: '0' }}>
//               <Input placeholder="City" />
//               <InputRightElement>
//                 <IconButton
//                   aria-label="Search"
//                   icon={<FiSearch />}
//                   bg="blue.400"
//                   color="white"
//                   _hover={{ bg: 'blue.600' }}
//                 />
//               </InputRightElement>
//             </InputGroup>
//           </Flex>

//           <Spacer />

//           <Flex alignItems="center">
//             <Tooltip label="Newsletter" aria-label="Newsletter">
//             <IconButton
//               aria-label="Newsletter"
//               icon={<FiMail />}
//               variant="ghost"
//               colorScheme="blue"
//               mr={2}
//             />
//             </Tooltip>
//             <Tooltip label="Blog" aria-label="Blog">
//             <IconButton
//               aria-label="Blog"
//               icon={<FiPenTool />}
//               variant="ghost"
//               colorScheme="blue"
//               mr={2}
//             />
//             </Tooltip>
//             <Tooltip label="Login" aria-label="Login">
//             <Link to="/login">
//             <IconButton
//               aria-label="Login"
//               icon={<FiUser />}
//               variant="ghost"
//               colorScheme="blue"
//               mr={2}
//             />
//             </Link>
//             </Tooltip>
//             <Tooltip label="Wishlist" aria-label="Wishlist">
//             <IconButton
//               aria-label="Wishlist"
//               icon={<FiHeart />}
//               variant="ghost"
//               colorScheme="blue"
//             />
//             </Tooltip>
//           </Flex>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export default Navbar;

import React, { useState ,useEffect} from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon ,HamburgerIcon,
  CloseIcon,} from '@chakra-ui/icons';
import { Link } from 'react-router-dom'; 
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
const NavLink = (props) => {
  const { children } = props;


  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
const [isSearchOpen, setIsSearchOpen] = useState(false);
const [data, setData] = useState([]);

const handleSearchToggle = () => {
  setIsSearchOpen(!isSearchOpen);
};
useEffect(() => {
  // Fetch data from your API
  fetch('http://localhost:3001/api/states/regions')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Fetching error:', error));
}, []);
console.log(data);
const getCityId = (cityName, cityIdMapping) => {
  return cityIdMapping[cityName] || ''; // Return empty string if cityIdMapping doesn't have the city
};
//top={0} zIndex={1000} p={4} justifyContent="space-between" alignItems="center" boxShadow="md"
  return (
    <><Flex position="sticky"   px={[2, 4, 8]} h={16} bg={useColorModeValue('gray.100', 'gray.900')}>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} px={4} w="100%">
            <Box> 
              <Link to="/" >
               <Text>WanderEase</Text>
              </Link>
            </Box>
            <Flex alignItems={'center'}>
              <IconButton
                aria-label="Toggle menu"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                variant="ghost"
                display={{ base: 'block', md: 'none' }}
                onClick={isOpen ? onClose : onOpen}/>
                <Flex alignItems={'center'} >
                  <Stack direction={'row'} spacing={7}>
                    <Popover placement="left" isLazy z-index ='9999' position='absolute'>
                      <PopoverTrigger>
                        <Button rightIcon={<ChevronDownIcon />} w="fit-content"  display={{ base: 'none', md: 'flex' }}>
                          WanderLust Stops
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent >
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader fontWeight="bold" >Let's Explore</PopoverHeader>
                      <PopoverBody w="full">
                      <Tabs isLazy>
  <TabList>
    {data.map(region => (
      <Tab key={region.region}>{region.region}</Tab>
    ))}
  </TabList>
  <TabPanels>
    {data.map(region => (
      <TabPanel key={region.region}>
        <Tabs isLazy>
          <TabList>
            {Object.keys(region.states).map(state => (
              <Tab key={state}>{state}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(region.states).map(state => (
              <TabPanel key={state}>
                {region.states[state].map(cityName => (
                  // Access the city_id using a function or lookup
                  <Link key={cityName} to={`/sites/${getCityId(cityName, region.cityIdMapping)}`}>
                    <p>{cityName}</p>
                  </Link>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabPanel>
    ))}
  </TabPanels>
</Tabs>



                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
      
      <Button ml={4}  display={{ base: 'none', md: 'flex' }}>
        Insights
      </Button>
      <Button ml={4}  display={{ base: 'none', md: 'flex' }} >
        Diaries
      </Button>
      <Button ml={4} onClick={handleSearchToggle}  display={{ base: 'none', md: 'flex' }}>
        <SearchIcon />
      </Button>
      {isSearchOpen && (
        <Input
          placeholder="Search"
          w="200px"
          ml={4}
          variant="filled"
          size="sm"
          display={{ base: 'none', md: 'flex' }}
        />
      )}
        <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        <Link to='/login'>
          <Button><Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  /></Button>
        </Link>
             
            </Stack>
          </Flex>
        </Flex>
        </Flex>
      </Box>
              
      {/* Drawer for small screens */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
              <Popover placement="bottom" isLazy z-index ='1000'>
                      <PopoverTrigger>
                        <Button rightIcon={<ChevronDownIcon />} w="fit-content">
                          WanderLust Stops
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent >
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader fontWeight="bold" >Let's Explore</PopoverHeader>
                      <PopoverBody w="full">
                      {/* <Tabs isLazy>
  <TabList>
    {data.map(region => (
      <Tab key={region.region}>{region.region}</Tab>
    ))}
  </TabList>
  <TabPanels>
    {data.map(region => (
      <TabPanel key={region.region}>
        <Tabs isLazy>
          <TabList>
            {Object.keys(region.states).map(state => (
              <Tab key={state}>{state}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(region.states).map(state => (
              <TabPanel key={state}>
                {region.states[state].map(city => (
                  <Link key={city} to={`/sites/${city.city_id}`}>
                  <p>{city}</p>
                </Link>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabPanel>
    ))}
  </TabPanels>
</Tabs>  */}
<Tabs isLazy>
  <TabList>
    {data.map(region => (
      <Tab key={region.region}>{region.region}</Tab>
    ))}
  </TabList>
  <TabPanels>
    {data.map(region => (
      <TabPanel key={region.region}>
        <Tabs isLazy>
          <TabList>
            {Object.keys(region.states).map(state => (
              <Tab key={state}>{state}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(region.states).map(state => (
              <TabPanel key={state}>
                {region.states[state].map(cityName => (
                  // Access the city_id using a function or lookup
                  <Link key={cityName} to={`/sites/${getCityId(cityName, region.cityIdMapping)}`}>
                    <p>{cityName}</p>
                  </Link>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabPanel>
    ))}
  </TabPanels>
</Tabs>


                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                
                <Button>Insights</Button>
                <Button>Diaries</Button>
                <Button ml={4} onClick={handleSearchToggle}>
        <SearchIcon />
      </Button>
      {isSearchOpen && (
        <Input
          placeholder="Search"
          w="200px"
          ml={4}
          variant="filled"
          size="sm"
        />
      )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </Flex>
    </>
  );
}

export default Nav;











// import React, { useState } from 'react';
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverArrow,
//   PopoverCloseButton,
//   Button,
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel,
//   Flex,
//   Input,
//   IconButton,
// } from '@chakra-ui/react';
// import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

// const Navbar = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const handleSearchToggle = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   return (
//     <Flex justifyContent="center" mt={4}>
//       <Popover placement="bottom" isLazy>
//         <PopoverTrigger>
//           <Button rightIcon={<ChevronDownIcon />} w="fit-content">
//             WanderLust Stops
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent >
//           <PopoverArrow />
//           <PopoverCloseButton />
//           <PopoverHeader fontWeight="bold" >Let's Explore</PopoverHeader>
//           <PopoverBody w="full">
//             <Tabs isLazy >
//               <TabList>
//                 <Tab
                  
//                   fontSize="xs"
//                   fontWeight="bold"
//                   w="50%">
//                   States
//                 </Tab>
//                 <Tab
                 
//                   fontSize="xs"
//                   fontWeight="bold"
//                   w="50%">
//                   Cities
//                 </Tab>
//               </TabList>
//               <TabPanels>
//                 <TabPanel>
//                   {/* You can add your content here. */}
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                   tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur
//                   vitae nunc sed velit dignissim sodales ut eu. Mauris nunc congue nisi
//                   vitae suscipit tellus mauris a diam. Eros in cursus turpis massa
//                   tincidunt.
//                 </TabPanel>
//                 <TabPanel>
//                   {/* You can add your content here. */}
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//                   tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur
//                   vitae nunc sed velit dignissim sodales ut eu. Mauris nunc congue nisi
//                   vitae suscipit tellus mauris a diam. Eros in cursus turpis massa
//                   tincidunt.
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
      
//       <Button ml={4} >
//         Insights
//       </Button>
//       <Button ml={4} >
//         Diaries
//       </Button>
//       <Button ml={4} onClick={handleSearchToggle}>
//         <SearchIcon />
//       </Button>
//       {isSearchOpen && (
//         <Input
//           placeholder="Search"
//           w="200px"
//           ml={4}
//           variant="filled"
//           size="sm"
//         />
//       )}
//     </Flex>
//   );
// };

// export default Navbar;

