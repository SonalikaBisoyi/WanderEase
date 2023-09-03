// AdminDashboard.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import SiteManager from '../Components/SiteManager';
//import SiteManager from './SiteManager';
//import AgentManager from './AgentManager';

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState('sites');

  useEffect(() => {
    // You can load data or perform other actions when the tabs change
  }, [currentTab]);

  return (
    <Container maxW="container.xl" py={10}>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading as="h1" size="lg">
          Admin Dashboard
        </Heading>
        {/* Add a logout button */}
        <button >Logout</button>
      </Flex>

      <Box bg="white" p={5} boxShadow="lg" borderRadius="md">
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab
              onClick={() => setCurrentTab('sites')}
              _selected={{ color: 'white', bg: 'teal.500' }}
            >
              Sites
            </Tab>
            <Tab
              onClick={() => setCurrentTab('agents')}
              _selected={{ color: 'white', bg: 'blue.500' }}
            >
              Agents
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SiteManager/>
            </TabPanel>
            <TabPanel>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
