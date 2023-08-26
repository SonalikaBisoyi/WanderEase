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
                {region.states[state].map(city => (
                  <p key={city}>{city}</p>
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

export default Nav;
