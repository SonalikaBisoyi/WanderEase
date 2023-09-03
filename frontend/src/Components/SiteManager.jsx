// // import React, { useState, useEffect } from 'react';

// // const SiteManager = () => {
// //   const [requests, setRequests] = useState([]);
  
// //   useEffect(() => {
// //     // Load data when the component mounts
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       // Fetch data from the server
// //       const response = await fetch('http://localhost:3001/api/allsites'); // Replace with your actual API endpoint
// //       const data = await response.json();
// //       setRequests(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   const handleApprove = async (requestId) => {
// //     try {
// //       // Send a request to the server to approve and remove the request
// //       await fetch(`http://localhost:3001/api/approve/${requestId}`, {
// //         method: 'DELETE', // Use the appropriate HTTP method
// //       });
// //       // Remove the approved request from the local state
// //       setRequests((prevRequests) =>
// //         prevRequests.filter((request) => request.id !== requestId)
// //       );
// //     } catch (error) {
// //       console.error('Error approving request:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Site Requests</h2>
// //       <button onClick={fetchData}>Request</button>
// //       <ul>
// //         {requests.map((request) => (
// //           <li key={request.id}>
// //             {/* Display request data */}
// //             <div>{request.siteName}</div>
// //             <div>{request.stateName}</div>
// //             <div>{request.cityName}</div>
// //             <div>{request.imageUrl}</div>
// //             {/* Approve button */}
// //             <button onClick={() => handleApprove(request.id)}>Approve</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SiteManager;
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Text,
//   VStack,
//   Heading,
//   List,
//   ListItem,
//   Flex,
// } from '@chakra-ui/react';

// const SiteManager = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Load data when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch data from the server
//       const response = await fetch('http://localhost:3001/api/allsites'); // Replace with your actual API endpoint
//       const data = await response.json();
//       console.log(data);
//       setRequests(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleApprove = async (requestId) => {
//     try {
//       // Send a request to the server to approve and remove the request
//       await fetch(`http://localhost:3001/api/approve/${requestId}`, {
//         method: 'DELETE', // Use the appropriate HTTP method
//       });
//       // Remove the approved request from the local state
//       setRequests((prevRequests) =>
//         prevRequests.filter((request) => request.siteRequestId !== requestId)
//       );
//     } catch (error) {
//       console.error('Error approving request:', error);
//     }
//   };

//   return (
//     <Box>
//       <Heading as="h2" mb={4}>
//         Site Requests
//       </Heading>
//       <Button onClick={fetchData} colorScheme="teal">
//         Request
//       </Button>
//       <List mt={4}>
//         {requests.map((request) => (
//           <ListItem key={request.siteRequestId} mb={4} boxShadow="md" p={4}>
//             <VStack align="start" spacing={2}>
//               <Text fontWeight="bold">Site Name: {request.siteName}</Text>
//               <Text>State Name: {request.stateName}</Text>
//               <Text>City Name: {request.cityName}</Text>
//               <Text>Image URL: {request.imageUrl}</Text>
//               <Flex>
//                 <Button
//                   onClick={() => handleApprove(request.siteRequestId)}
//                   colorScheme="green"
//                 >
//                   Approve
//                 </Button>
//               </Flex>
//             </VStack>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default SiteManager;
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Text,
//   VStack,
//   Heading,
//   List,
//   ListItem,
//   Flex,
// } from '@chakra-ui/react';

// const SiteManager = () => {
//   const [requests, setRequests] = useState([]);
//   const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

//   const fetchData = async () => {
//     try {
//       // Fetch data from the server
//       const response = await fetch('http://localhost:3001/api/allsites'); // Replace with your actual API endpoint
//       const data = await response.json();
//       setRequests(data);
//       setDataFetched(true); // Set dataFetched to true after data is fetched
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleApprove = async (requestId) => {
//     try {
//       // Send a request to the server to approve and remove the request
//       await fetch(`http://localhost:3001/api/approve/${requestId}`, {
//         method: 'DELETE', // Use the appropriate HTTP method
//       });
//       // Remove the approved request from the local state
//       setRequests((prevRequests) =>
//         prevRequests.filter((request) => request.siteRequestId !== requestId)
//       );
//     } catch (error) {
//       console.error('Error approving request:', error);
//     }
//   };

//   return (
//     <Box>
//       <Heading as="h2" mb={4}>
//         Site Requests
//       </Heading>
//       <Button onClick={fetchData} colorScheme="teal">
//         Request
//       </Button>
//       {dataFetched && ( // Render the list only if data has been fetched
//         <List mt={4}>
//           {requests.map((request) => (
//             <ListItem key={request.siteRequestId} mb={4} boxShadow="md" p={4}>
//               <VStack align="start" spacing={2}>
//                 <Text fontWeight="bold">Site Name: {request.siteName}</Text>
//                 <Text>State Name: {request.stateName}</Text>
//                 <Text>City Name: {request.cityName}</Text>
//                 <Text>Image URL: {request.imageUrl}</Text>
//                 <Flex>
//                   <Button
//                     onClick={() => handleApprove(request.siteRequestId)}
//                     colorScheme="green"
//                   >
//                     Approve
//                   </Button>
//                 </Flex>
//               </VStack>
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </Box>
//   );
// };

// export default SiteManager;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Text,
//   VStack,
//   Heading,
//   List,
//   ListItem,
//   Flex,
//   Select,
// } from '@chakra-ui/react';

// const SiteManager = () => {
//   const [requests, setRequests] = useState([]);
//   const [sites, setSites] = useState([]);
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [cityOptions, setCityOptions] = useState([]); // State to store city options

//   useEffect(() => {
//     // Load data when the component mounts
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Fetch cities when the selected region changes
//     fetchCities();
//   }, [selectedRegion]);

//   const fetchData = async () => {
//     try {
//       // Fetch data from the server
//       const response = await fetch('http://localhost:3001/api/allsites');
//       const data = await response.json();
//       setRequests(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const fetchCities = async () => {
//     try {
//       // Fetch city options based on the selected region
//       const response = await fetch(`http://localhost:3001/api/citiesByRegion/${selectedRegion}`);
//       const data = await response.json();
//       setCityOptions(data);
//     } catch (error) {
//       console.error('Error fetching city options:', error);
//     }
//   };

//   const fetchSites = async () => {
//     try {
//         console.log('Selected Region:', selectedRegion);
//     console.log('Selected City:', selectedCity);
//       // Fetch data from the server for sites based on the selected region and city
//       const response = await fetch(`http://localhost:3001/api/sitesAndAgents/${selectedRegion}/${selectedCity}`);
//       const data = await response.json();
//       setSites(data.sites);
//     } catch (error) {
//       console.error('Error fetching sites data:', error);
//     }
//   };

//   const handleApprove = async (requestId) => {
//     try {
//       // Send a request to the server to approve and remove the request
//       await fetch(`http://localhost:3001/api/approve/${requestId}`, {
//         method: 'DELETE',
//       });
//       // Remove the approved request from the local state
//       setRequests((prevRequests) =>
//         prevRequests.filter((request) => request.siteRequestId !== requestId)
//       );
//     } catch (error) {
//       console.error('Error approving request:', error);
//     }
//   };

//   return (
//     <Box>
//       <Heading as="h2" mb={4}>
//         Site Requests
//       </Heading>
//       <Button onClick={fetchData} colorScheme="teal">
//         Request
//       </Button>
//       <List mt={4}>
//         {requests.map((request) => (
//           <ListItem key={request.siteRequestId} mb={4} boxShadow="md" p={4}>
//             <VStack align="start" spacing={2}>
//               <Text fontWeight="bold">Site Name: {request.siteName}</Text>
//               <Text>State Name: {request.stateName}</Text>
//               <Text>City Name: {request.cityName}</Text>
//               <Text>Image URL: {request.imageUrl}</Text>
//               <Flex>
//                 <Button
//                   onClick={() => handleApprove(request.siteRequestId)}
//                   colorScheme="green"
//                 >
//                   Approve
//                 </Button>
//               </Flex>
//             </VStack>
//           </ListItem>
//         ))}
//       </List>
//       <Heading as="h2" mt={8} mb={4}>
//         Sites
//       </Heading>
//       {/* Add a Select component to choose the region */}
//       <Select
//         placeholder="Select a Region"
//         onChange={(e) => setSelectedRegion(e.target.value)}
//         value={selectedRegion}
//       >
//         <option value="north">North</option>
//         <option value="south">South</option>
//         <option value="east">East</option>
//         <option value="west">West</option>
//       </Select>
//       {/* Add a Select component to choose the city */}
//       <Select
//         placeholder="Select a City"
//         onChange={(e) => setSelectedCity(e.target.value)}
//         value={selectedCity}
//       >
//         {/* Map over cityOptions to generate city options */}
//         {cityOptions.map((city) => (
//           <option key={city.city_id} value={city.city}>
//             {city.city}
//           </option>
//         ))}
//       </Select>
//       <Button onClick={fetchSites} colorScheme="teal" mt={2}>
//         Fetch Sites
//       </Button>
//       <List mt={4}>
//         {sites.map((site) => (
//           <ListItem key={site.site_id} mb={4} boxShadow="md" p={4}>
//             <VStack align="start" spacing={2}>
//               <Text fontWeight="bold">Site Name: {site.name}</Text>
//               <Text>City: {site.city}</Text>
//               <Text>Best Visit: {site.best_visit}</Text>
//               <Text>Description: {site.description}</Text>
//               <Text>Requirements: {site.requirements}</Text>
//               <Text>Image URL 1: {site.image1}</Text>
//               <Text>Image URL 2: {site.image2}</Text>
//               <Text>Image URL 3: {site.image3}</Text>
//               <Text>Food: {site.food}</Text>
//               <Text>Tourism Type: {site.tourism_type}</Text>
//               <Flex>
//                 <Button colorScheme="red" ml={2}>
//                   Delete
//                 </Button>
//                 <Button colorScheme="teal" ml={2}>
//                   Edit
//                 </Button>
//               </Flex>
//             </VStack>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default SiteManager;



import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  List,
  ListItem,
  Flex,
  Select,
} from '@chakra-ui/react';

import EditSiteForm from './EditSiteForm';

const SiteManager = () => {
  const [requests, setRequests] = useState([]);
  const [sites, setSites] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cityOptions, setCityOptions] = useState([]); // State to store city options
  const [isEditing, setIsEditing] = useState(false);
  const [editSite, setEditSite] = useState(null);

  useEffect(() => {
    // Load data when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    // Fetch cities when the selected region changes
    fetchCities();
  }, [selectedRegion]);

  const fetchData = async () => {
    try {
      // Fetch data from the server
      const response = await fetch('http://localhost:3001/api/allsites');
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCities = async () => {
    try {
      // Fetch city options based on the selected region
      const response = await fetch(`http://localhost:3001/api/citiesByRegion/${selectedRegion}`);
      const data = await response.json();
      setCityOptions(data);
    } catch (error) {
      console.error('Error fetching city options:', error);
    }
  };

  const fetchSites = async () => {
    try {
      // Fetch data from the server for sites based on the selected region and city
      const response = await fetch(`http://localhost:3001/api/sitesAndAgents/${selectedRegion}/${selectedCity}`);
      const data = await response.json();
      setSites(data.sites);
    } catch (error) {
      console.error('Error fetching sites data:', error);
    }
  };

  const handleApprove = async (requestId) => {
    try {
      // Send a request to the server to approve and remove the request
      await fetch(`http://localhost:3001/api/approve/${requestId}`, {
        method: 'DELETE',
      });
      // Remove the approved request from the local state
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.siteRequestId !== requestId)
      );
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  // Function to handle editing a site
  const handleEdit = (site) => {
    setIsEditing(true);
    setEditSite(site);
  };

  // Function to save the edited site
  const handleSaveEdit = async (editedSite) => {
    try {
      // Send a request to update the site details
      await fetch(`http://localhost:3001/api/sites/updateSite/${editSite.site_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedSite),
      });

      // Disable editing mode and refresh the site list
      setIsEditing(false);
      fetchSites();
    } catch (error) {
      console.error('Error updating site details:', error);
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Site Requests
      </Heading>
      <Button onClick={fetchData} colorScheme="teal">
        Request
      </Button>
      <List mt={4}>
        {requests.map((request) => (
          <ListItem key={request.siteRequestId} mb={4} boxShadow="md" p={4}>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Site Name: {request.siteName}</Text>
              <Text>State Name: {request.stateName}</Text>
              <Text>City Name: {request.cityName}</Text>
              <Text>Image URL: {request.imageUrl}</Text>
              <Flex>
                <Button
                  onClick={() => handleApprove(request.siteRequestId)}
                  colorScheme="green"
                >
                  Approve
                </Button>
              </Flex>
            </VStack>
          </ListItem>
        ))}
      </List>
      <Heading as="h2" mt={8} mb={4}>
        Sites
      </Heading>
      {/* Add a Select component to choose the region */}
      <Select
        placeholder="Select a Region"
        onChange={(e) => setSelectedRegion(e.target.value)}
        value={selectedRegion}
      >
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="east">East</option>
        <option value="west">West</option>
      </Select>
      {/* Add a Select component to choose the city */}
      <Select
        placeholder="Select a City"
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
      >
        {/* Map over cityOptions to generate city options */}
        {cityOptions.map((city) => (
          <option key={city.city_id} value={city.city}>
            {city.city}
          </option>
        ))}
      </Select>
      <Button onClick={fetchSites} colorScheme="teal" mt={2}>
        Fetch Sites
      </Button>
      <List mt={4}>
        {sites.map((site) => (
          <ListItem key={site.site_id} mb={4} boxShadow="md" p={4}>
            <VStack align="start" spacing={2}>
              <Text fontWeight="bold">Site Name: {site.name}</Text>
              <Text>City: {site.city}</Text>
              <Text>Best Visit: {site.best_visit}</Text>
              <Text>Description: {site.description}</Text>
              <Text>Requirements: {site.requirements}</Text>
              <Text>Image URL 1: {site.image1}</Text>
              <Text>Image URL 2: {site.image2}</Text>
              <Text>Image URL 3: {site.image3}</Text>
              <Text>Food: {site.food}</Text>
              <Text>Tourism Type: {site.tourism_type}</Text>
              <Flex>
                <Button colorScheme="red" ml={2}>
                  Delete
                </Button>
                <Button colorScheme="teal" ml={2} onClick={() => handleEdit(site)}>
                  Edit
                </Button>
              </Flex>
              {isEditing && editSite && editSite.site_id === site.site_id && (
                <EditSiteForm
                  site={editSite}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              )}
            </VStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SiteManager;




