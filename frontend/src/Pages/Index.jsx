// import React, { useRef,useEffect,useState } from 'react';
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,
// } from '@chakra-ui/react';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import axios from 'axios';
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Index() {
//   const sliderRef = useRef(null);

//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   const cards = [
//     {
//       title: 'Design Projects 1',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//     },
//     {
//       title: 'Design Projects 2',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//     },
//     {
//       title: 'Design Projects 3',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1591949334567-0bed0d0dc660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWNlcyUyMHRvJTIwdmlzaXQlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
//     },
//   ];
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch customer reviews data from the backend API
//     axios.get('http://localhost:3001/api/reviews')
//       .then(response => {
//         setReviews(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching customer reviews:', error);
//       });
//   }, []);

//   return (
//     <div>
//     <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickPrev()}
//       >
//         <BiLeftArrowAlt size="40px" />
//       </IconButton>
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickNext()}
//       >
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
//       <Slider {...settings} ref={sliderRef}>
//         {cards.map((card, index) => (
//           <Box
//             key={index}
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${card.image})`}
//           >
//             <Container size="container.lg" height="600px" position="relative">
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)"
//               >
//                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//                   {card.title}
//                 </Heading>
//                 <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
//                   {card.text}
//                 </Text>
//               </Stack>
//             </Container>
//           </Box>
//         ))}
//       </Slider> 
//     </Box>
//     <Stack spacing={4}>
//     <Text fontWeight="bold" textAlign="center">Reviews</Text>
//         {reviews.map(review => (
              
//           <Box
//             key={review.id}
//             p={4}
//             borderWidth="1px"
//             borderColor="gray.200"
//             borderRadius="md"
//             boxShadow="md">
//             {/* Display review details */}
//             <Text fontWeight="bold">Customer Name: {review.customerName}</Text>
//             <Text>Date: {review.date}</Text>
//             <Text>Opinion: {review.opinion}</Text>
//             {/* You can add more fields and customize the display */}
//           </Box>
//         ))}
//       </Stack>
//       </div>
    
    
//   );
// }



// import React, { useRef,useEffect,useState } from 'react';
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,
// } from '@chakra-ui/react';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import axios from 'axios';
// import AddReviewForm from '../Components/AddReviewForm';
// import ReviewCard from '../Components/ReviewCard';
// import { AddIcon } from '@chakra-ui/icons';

// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Index() {
//   const sliderRef = useRef(null);

//   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   const cards = [
//     {
//       title: 'Design Projects 1',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//     },
//     {
//       title: 'Design Projects 2',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//     },
//     {
//       title: 'Design Projects 3',
//       text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//       image:
//         'https://images.unsplash.com/photo-1591949334567-0bed0d0dc660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWNlcyUyMHRvJTIwdmlzaXQlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
//     },
//   ];
//   const [reviews, setReviews] = useState([]);
//   const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

//   useEffect(() => {
//     // Fetch reviews data from the backend API
//     fetch('http://localhost:3001/api/reviews')
//       .then(response => response.json())
//       .then(data => {
//         setReviews(data);
//       })
//       .catch(error => {
//         console.error('Error fetching reviews:', error);
//       });
//   }, []);
//   const handleAddReviewClick = () => {
//     setIsAddReviewOpen(true);
//   };

//   const handleAddReviewClose = () => {
//     setIsAddReviewOpen(false);
//   };

//   return (
//     <div>
//     <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
//       <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickPrev()}
//       >
//         <BiLeftArrowAlt size="40px" />
//       </IconButton>
//       <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={() => sliderRef.current?.slickNext()}
//       >
//         <BiRightArrowAlt size="40px" />
//       </IconButton>
//       <Slider {...settings} ref={sliderRef}>
//         {cards.map((card, index) => (
//           <Box
//             key={index}
//             height={'6xl'}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${card.image})`}
//           >
//             <Container size="container.lg" height="600px" position="relative">
//               <Stack
//                 spacing={6}
//                 w={'full'}
//                 maxW={'lg'}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)"
//               >
//                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
//                   {card.title}
//                 </Heading>
//                 <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
//                   {card.text}
//                 </Text>
//               </Stack>
//             </Container>
//           </Box>
//         ))}
//       </Slider> 
//     </Box>
//     <Slider {...settings}>
//         {reviews.map(review => (
//           <ReviewCard key={review.id} review={review} />
//         ))}
//       </Slider>

//       <IconButton
//         aria-label="Add Review"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={'translate(0%, -50%)'}
//         zIndex={2}
//         onClick={handleAddReviewClick}
//       >
//         <AddIcon size="40px" />
//       </IconButton>

//       <AddReviewForm onReviewAdded={handleAddReviewClose} />
//       </div>
    
    
//   );
// }
import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import {
  BiArrowToLeft,
  BiArrowToRight,
} from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddReviewForm from '../Components/AddReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { AddIcon } from '@chakra-ui/icons';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Index() {
  const sliderRef = useRef(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '10px', md: '40px' });

  const cards = [
        {
          title: 'Design Projects 1',
          text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image:
            'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        },
        {
          title: 'Design Projects 2',
          text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image:
            'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
        },
        {
          title: 'Design Projects 3',
          text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
          image:
            'https://images.unsplash.com/photo-1591949334567-0bed0d0dc660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWNlcyUyMHRvJTIwdmlzaXQlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
        },
      ];
  const [reviews, setReviews] = useState([]);
  const [setIsAddReviewOpen] = useState(false);

  useEffect(() => {
    // Fetch reviews data from the backend API
    fetch('http://localhost:3001/api/reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleAddReviewClick = () => {
    setIsAddReviewOpen(true);
  };

  const handleAddReviewClose = () => {
    setIsAddReviewOpen(false);
  };

  return (
    <div>
      <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'}>
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <BiArrowToLeft size="32px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => sliderRef.current?.slickNext()}
        >
          <BiArrowToRight size="32px" />
        </IconButton>
        <Slider {...settings} ref={sliderRef}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'400px'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}
            >
              <Container size="container.lg" height="400px" position="relative">
                <Stack
                  spacing={4}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.600">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>

      <Slider {...settings}>
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Slider>

      <IconButton
        aria-label="Add Review"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={handleAddReviewClick}
      >
        <AddIcon size="32px" />
      </IconButton>

      <AddReviewForm onReviewAdded={handleAddReviewClose} />
    </div>
  );
}

