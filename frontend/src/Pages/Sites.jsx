// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// export default function Site() {
//   const { cityId } = useParams(); // Extract cityId from URL parameter
//   const [sites, setSites] = useState([]);

//   useEffect(() => {
//     // Fetch data from your API using the provided cityId
//     fetch(`http://localhost:3001/api/sites/${cityId}`)
//       .then(response => response.json())
//       .then(data => setSites(data))
//       .catch(error => console.error('Fetching error:', error));
//   }, [cityId]);

//   return (
//     <div>
//       <h1>Sites in City ID: {cityId}</h1>
//       <div>
//         {sites.map(site => (
//           <div key={site.site_id}>
//             <img src={site.image1} alt={site.name} />
//             <h2>{site.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Heading, Image } from '@chakra-ui/react';
// import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/effect-coverflow/effect-coverflow.scss';

// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

// export default function Site() {
//   const { cityId } = useParams(); // Extract cityId from URL parameter
//   const [sites, setSites] = useState([]);

//   useEffect(() => {
//     // Fetch data from your API using the provided cityId
//     fetch(`http://localhost:3001/api/sites/${cityId}`)
//       .then(response => response.json())
//       .then(data => setSites(data))
//       .catch(error => console.error('Fetching error:', error));
//   }, [cityId]);

//   return (
//     <Box p={8}>
//       <Heading as="h1" mb={4}>
//         Sites in City ID: {cityId}
//       </Heading>
//       <Swiper
//         navigation
//         pagination={{ clickable: true }}
//         effect="coverflow"
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         slidesPerView={3}
//         centeredSlides
//       >
//         {sites.map(site => (
//           <SwiperSlide key={site.site_id}>
//             <Box
//               p={4}
//               borderWidth="1px"
//               borderRadius="md"
//               textAlign="center"
//               transition="transform 0.2s"
//               _hover={{ transform: 'scale(1.05)' }}
//             >
//               <Image src={site.image1} alt={site.name} />
//               <Heading as="h2" mt={2} fontSize="lg">
//                 {site.name}
//               </Heading>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, Heading, Image, VStack } from '@chakra-ui/react';

// export default function Site() {
//   const { cityId } = useParams(); // Extract cityId from URL parameter
//   const [sites, setSites] = useState([]);

//   useEffect(() => {
//     // Fetch data from your API using the provided cityId
//     fetch(`http://localhost:3001/api/sites/${cityId}`)
//       .then(response => response.json())
//       .then(data => setSites(data))
//       .catch(error => console.error('Fetching error:', error));
//   }, [cityId]);

//   return (
//     <Box p={8}>
//       <Heading as="h1" mb={4}>
//         Sites in City ID: {cityId}
//       </Heading>
//       <VStack spacing={4}>
//         {sites.map(site => (
//           <Box
//             key={site.site_id}
//             p={4}
//             borderWidth="1px"
//             borderRadius="md"
//             textAlign="center"
//             transition="transform 0.2s"
//             _hover={{ transform: 'scale(1.05)' }}
//           >
//             <Image src={site.image1} alt={site.name} />
//             <Heading as="h2" mt={2} fontSize="lg">
//               {site.name}
//             </Heading>
//           </Box>
//         ))}
//       </VStack>
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export default function Site() {
  const { cityId } = useParams(); // Extract cityId from URL parameter
  const [sites, setSites] = useState([]);

  useEffect(() => {
    // Fetch data from your API using the provided cityId
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
          <Link key={site.site_id} to={`/site/ssite/${site.site_id}`}>
            <Box
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
          </Link>
        ))}
      </VStack>
    </Box>
  );
}


