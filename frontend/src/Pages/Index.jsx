// import React, { useRef, useEffect, useState } from 'react';
// import {
//   Box,
//   IconButton,
//   useBreakpointValue,
//   Stack,
//   Heading,
//   Text,
//   Container,
// } from '@chakra-ui/react';
// import {
//   BiArrowToLeft,
//   BiArrowToRight,
// } from 'react-icons/bi';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
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
//   const side = useBreakpointValue({ base: '10px', md: '40px' });

//   const cards = [
//         {
//           title: 'Design Projects 1',
//           text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//           image:
//             'https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//         },
//         {
//           title: 'Design Projects 2',
//           text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//           image:
//             'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
//         },
//         {
//           title: 'Design Projects 3',
//           text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//           image:
//             'https://images.unsplash.com/photo-1591949334567-0bed0d0dc660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWNlcyUyMHRvJTIwdmlzaXQlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
//         },
//       ];
//   const [reviews, setReviews] = useState([]);
//   const setIsAddReviewOpen = useState(false);


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
//        <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'} zIndex={10}>
//         <IconButton
//           aria-label="left-arrow"
//           variant="ghost"
//           position="absolute"
//           left={side}
//           top={top}
//           transform={'translate(0%, -50%)'}
//           zIndex={2}
//           onClick={() => sliderRef.current?.slickPrev()}
//         >
//           <BiArrowToLeft size="32px" />
//         </IconButton>
//         <IconButton
//           aria-label="right-arrow"
//           variant="ghost"
//           position="absolute"
//           right={side}
//           top={top}
//           transform={'translate(0%, -50%)'}
//           zIndex={2}
//           onClick={() => sliderRef.current?.slickNext()}
//         >
//           <BiArrowToRight size="32px" />
//         </IconButton>
//         <Slider {...settings} ref={sliderRef}>
//           {cards.map((card, index) => (
//             <Box
//               key={index}
//               zIndex={10}
//               height={'400px'}
//               position="relative"
//               backgroundPosition="center"
//               backgroundRepeat="no-repeat"
//               backgroundSize="cover"
//               backgroundImage={`url(${card.image})`}
//             >
//               <Container size="container.lg" height="400px" position="relative">
//                 <Stack
//                   spacing={4}
//                   w={'full'}
//                   maxW={'lg'}
//                   position="absolute"
//                   top="50%"
//                   transform="translate(0, -50%)"
//                 >
//                   <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
//                     {card.title}
//                   </Heading>
//                   <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.600">
//                     {card.text}
//                   </Text>
//                 </Stack>
//               </Container>
//             </Box>
//           ))}
//         </Slider>
//       </Box> 
//        <Box position={'relative'} height={'400px'} width={'full'} overflow={'hidden'} zIndex={1}>
//   <Slider {...settings} ref={sliderRef}>
//     {cards.map((card, index) => (
//       <Box
//         key={index}
//         zIndex={1} // Change the zIndex to 1
//         height={'400px'}
//         position="relative"
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         backgroundSize="cover"
//         backgroundImage={`url(${card.image})`}
//       >
//         <Container size="container.lg" height="400px" position="relative">
//           <Stack
//             spacing={4}
//             w={'full'}
//             maxW={'lg'}
//             position="absolute"
//             top="50%"
//             transform="translate(0, -50%)"
//           >
//             <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
//               {card.title}
//             </Heading>
//             <Text fontSize={{ base: 'sm', lg: 'md' }} color="gray.600">
//               {card.text}
//             </Text>
//           </Stack>
//         </Container>
//       </Box>
//     ))}
//   </Slider>
// </Box>

//       <Text fontSize="5xl">Voices</Text>
//       <Slider {...settings}>
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
//         onClick={handleAddReviewClick} />

//       <AddReviewForm onReviewAdded={handleAddReviewClose} />
//     </div>
//   );
//  } 
'use client'
import React,{useEffect,useState} from 'react';
import {
  Image,Flex, 
   Container,
   Heading,
   Stack,
   Text,
   Button,
   IconButton,Slider, Box, Grid, GridItem, Center,
   
 } from '@chakra-ui/react';
 import AddReviewForm from '../Components/AddReviewForm';
import ReviewCard from '../Components/ReviewCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

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
const srces = [
  "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4388593/pexels-photo-4388593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
  const tourismTypes = [
    { name: 'adventure', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcUFBQYFxcZGRkXGRcYGRoZGhgiGhcYGhoZGhoaISwjGh0pHhkXJDYkKS0vMzMzGiI4PjgyPSwyMy8BCwsLDw4PHhISHjQpIykyMjIyNDIyMjIyNjIyMjIyMjMyMjIyNDQyMi8yMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwIEBQEGB//EADsQAAIBAwIEBAMGBgIBBQEAAAECEQADIRIxBCJBUQUTYXEygZEGQlKhwfAUI2Kx0eEz8YIVkqKy0nL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALhEAAgIBAwMCBQQCAwAAAAAAAAECERIDITEEE1EUQQUiYXGRFVKhwbHwMkKB/9oADAMBAAIRAxEAPwDG00RU4oivsz4yxcURTIoimFi4oimRRFILFxXIpsURQGQuKIpkURQFi4rkU2KIoHYqKIpmmjTTCxcURTYrkUBkLiiKZpoigMhcURTIoigLFxRFMijTQFi4rsUyKIoFkL00aaZFEUBkLiiKZFcigLIRRFTiuxQFkIoipxRFAWQiiKnFEUCsjFFT00UBZOKNNN00aaDPIVpo003TXIoDIVpo002KIoHkK00aabFEUBkK00aabFEUBkK00aabFEUBkK00aabpo00gyFaaNNN00aaAyFaaNNNiuaaYZC9NGmmxRFAZCtNGmm6aNNIMhWmjTTYoimGQrTRppsURQGQuK5ppsURQGQuKNNMiiKAyIaaNNTiu6aBWKijTTdNGmgMhemipxRQGQ3TRpp2mjTU2Y5CdNGmnaaNNFhkJ00aabpo0UWGQrTRppuijRRYZCdNGmnaaNNFhkJ00aadpo00WGQnTRpp2mjTRYZCdNGmnaaNNFhkJ00aadpo0UWGQnTRpp2mjTRYZCdNGmnaaNNFhkJ00aadprmmiwyFaaNNO00aaLDITpo003TRposMh/hnCq9xUYEgnoQPqegr2q/ZThMSW9QHOf1ivDoxX4THqKsWePuKulXI9dz7Sdq4+o0dTUdxlR39L1Wjpxa1I2em8Rt8LbJS3btq8Rrca1H1Jg147iLQViFYMO4ECpNJ3JPvXAlaaGj2lvJv7mfUdUtV7RS+wmKNNWTYYCY6TE59/b1qo7NiQRkbwD0MRJPyP5Vlr9fpaW3L+hv0/w7X1d6peWSiiq7cQx2cfv2FFcP6vL9v8nf8Aoi/f/Bs+RR5FaPlUeVXpd08b06MzyKPJNaflVzyqfcF6YzfKrnlGtPyq55NPui9OZnlntR5Z7Vp+TR5NHdJ9M/JmeWe1GitPyaPJp9xC9O/JmaKNFafk0GzS7gvTy8lS3wTMpYfT9aQ9ojcVphD3P1rhszUrUd7mktFUq5MzRXNNaXkV0cPV9xGXYkZmmjTWm3DUfwuP0zR3EHp5mZpo01onhvSufw9PuoXZmZ+mjTWh5FHkelLuIOzIz9Nc01ofw9cXhZMUdxB2ZlDTRFad3gCpgwfUGRSjwtC1YvgHoTWzRQ00aavfw9cNgdqfcQu1MpaaNFXRY9KXxFwJA6nbsPUxnvgZP1iJ60YLJmul02pqyxjyVrhCjOScBRux7D/PSqY4kHDkp15YPULpJyGyehFQ4shWBYlrmdyECxE4EwuRgSZXfvWHBE6GboSyLJBwCvKvbmPrk7V4nU9dPUdRdLwfUdH8NhoRTkrl5NHivGEBcFtejUzFTMYOliVGSYEddiN5FLhbUu117hucrAMSVXOBgbCdzPWrrcMugFwHDbIAuk6ZmQVEnBB6D0rH4/XaD3EUhtIVUGyhWiQBgjIwNsiuBte56ZrW0uAct1gMxpELE4j0opXBgi2nnWXNzSNRM5xjf0iip3LpHtfKo8qr3lUeVXu9w+Y7ZS8qjyqveVR5VHdH2ih5VHlVf8r9gTR5YiTgesj6giR+dQ9eMeWaR6Sc1aRn+VR5VaycFIkuv9xtvNIvG0gE3NRI+6J/XFT6uJo+g1K4KScOSYArlzh9J0kZ7DP9q2OHtW3XkYhvXcenb50s8MisouKM4DDb596yl1m+xtp/Dk18z/BlrakwN96PIPQT7Z/tWzd4W2VEKm8RuN89flS24flAaGUY2g/lj5VK6yRb+HaflmanCgxzb52P6/KoXrIWMzJgDqcevXIxVu5YdSMSuejdxEgTB9YOx2rg4WCW8sJ13nYiZPwxv+fal6mfkv0Gl4/kqeT09YrqcPJgbjJ9PerFp0K5Kavw/Gc/C0zMTt/mp2ke4JVFAGNUhwcCJLc3+fSr9ZKuDH9NhfOxXTg5AOoQc/vpXH4QqYkfIjP1qzZ4aFyhRQJIMN0jETPWeuac9yEGkG7OJATEdDEHv0+lT6uRo/h+m+LM5uHOTvG8ZjE9PSlrbB2q1w7ucMOViZGkcvUbHUM4io3bPMJABnlyeuOWfl+5prrJXuiJfDINbPcR5NSThSdh8+lbNngFK6smNuYZ94x++lCIZjQF+e3rI/1VS6zbZGcPhiv5n+DFu2AuAZOemMdCeh+tN4ZliGCmZOk7jsNUdonpv6Uvigz3I1QqwY6EkNv0PSP+qsKs6ZnGc9T16dx07Vzy1py5Z3afT6UNlEtJ4dbaIAHtJBoHhVskgmCPWN/cVVbitwCUggASRI2+Ifr2pga6NnDHuTEenX07UlqTXu/yN9PpP/qvwR4rw9La7MR3Gc/v5VnXUtgmbgUDMvCiPefameJeOeSwS4VLMMWx1JkA6iJXY7jOd4ryPiXily9z3FtgKYW2NQRSQSGwd9Jkn5+lNdRqR4ZM+k0p8x/o17/iloToJfoGAgE7EKGySDjaMj1rBv8AFugDDV5rzCHm67knOO4gdJODWXe52EhmdYQHMao5iJEQNjv290+c959JuYkjXESJ2hQYH1rDV6mepyy9LQ09JfKjUQkaXbnd2wRAOc8oGTG9WuGFt50XGe4IJYGBOCoChsLEiZ/tjvEcPobzFlVABAIzH3QIwFAAGe3eKm/EW7am5pCu55jBKsQCGwJJ09Y7ZzWVUjpQpLlt7vNd5lgBGgEGNxidIIPfcd85rXQXJtnVrA3Hw42PYRG2Kc9vS9y6oEOQ7Df4ARgESoBzk5j0rM4m95l1fLyLhDEdJgg6jHUzI9d8VnN2thNnb3HMGIKgZ2JyPeiqr+Hu5LNcAJ3ENiiss4+RH3nyqi4A3qrY8ZtXF30GVVlYwyltlBGG6iQYqvxVxUb+Wm/3hJIx6b/PevWetfBxx6X9wxr3mSukgTv3g7YqxYVQcY6Tt+dZvDvnU4YmSTj++PoK0LF8vgADIy06gOwEY9orKUmzqhFRVIu2X3g/STPsBS+IvLat6rhLE4AOC3ppG3z/ACrvmacSAZjOOnWd9wYkb1C4UEXH5yNgDkE74/XaoKZn8Pwly9z3JC4IXZR7L6T71Hi/DGDoqsSSdoECB1/PHpWvd4qBv6gbx/b6UocegMEj5ETJnpTt+wqIfwlxBsrSI/tn8j9aTb4i4WdAgfExPKpE/ETt0OP91bu8YNQzjScYmcAfrSPNX4dUaugUCT8v1P0pDFu9xmEECIlZJHripm66kxIieoII7+gpPFeJW7OXUlt1CkaiBuxDEcvrUbfi1m+vKwkRyNAYagdII2IOY/SiwLtnjVIOo6SMVS4vVdYIATb3PQHIyT2Ebf6FHEXEVTLC2ZyWAGe+8E42FV18Ut6o1gk95P0gS3y2gzVJ0SxnEcCpmFUqMSff2wflTOHRUH9XqSFWdzq2nPSl3HAEgkmcMQCBPWO31pDPcBz5Z35pYEztH+BikM2TpJ0tcEDMKNJ6btO/+aanD2w0qDnsQQZ69x/qsINEl3DTso2Hb2qDXCGGksJ2Ij0xkRHcUhm5dCbvOAduuK7cdCBK9tJzI9gBjesxePkFGiTABA0g5iZ2/wC6mnH6VBZhA/DgRsDk943/AFoAtniPLadWDgjuYnI6GK4/HponOd+/+qxW8ft3GVVZC55YiZI7FoEdvp0qp4rxot5YKqiNROILNCjTuepwdgcUydja4c23YuFCk41xBMdAx33Nc4lEB+NgekTH9o+teT4b7V2kRBuYySCpn7w+8TAM7wTioWPtUguObqW9KqNIUlmLMTjcwdME0sl5FaPTu6iP5md5mZ23jrWZe8bCavLTVJI1dFaDPr09vWqfH+Pi4k6RaQwCxnVIJ20//wAkEAnf3rybeJOLh8skyQF1ZOJEBJjc7GfrRLUSKLnHccAzO51XSDIGZJIEsT6TnppiIxWLf4u4xLksY6/h2GD0YgDO5qxb4YAm5cIfm+BSrG63WYmBt71fseB3G5rpFtWhhbUxo5gBywQu57kyesgYNuQ6bKHCIHbS7HRjZTJCsMKokDOJ9a3OE4cLKIu0ljjGdIBO08urfHypFyyttl8sQPgAgFmJ3k9Ph32HtWtZstcXy7a6mBEtMKkQTkEaok7bjtvTxopIsJ4eHYaz9wkkSBlpLEDOqFGRJAxiqN/xFAui2sIDgkBRAJ9BjAxM5HWrPjN/+GtLbOnW0qQoxnfURHL06fFAg7eZ47xVeZPhlYmCWYkAHSD90qoBiNxA3ltpA2Z/E8cysyaZ3SIAB9vnkf6qn4ZdQOIOqSAAywUJODqEkGY775qfjHC2wpdX1MYIgAhQZnYwMxjpXUsKIZNJRgOdiAbbCT0wQe57/KsHVUQTu8CSSbl8Kx3E7dvyiitC5wvmHWGMED7q9hPxNO8+nbFFYZy8fwViz3p8LFttS3IltSg4G0aTMzOd9wesVWvcJdtljZkNglCGa2CBnTJBQESIE4giBmr1/hr1sN5n862TjSFUr6ZPr+VI4PxFLBbVdZrYmVZTqUsV05MYABA1RucmK7VY2rE8L9pghCXlNthB3BDdyCDkSDiIA6yM2OJ+0MMfLeSRhZAC/wBbkHB/pGcfOl/aLgvPt+ZaAaJMmIYFWVlj8QnYx+leK1kQnNbBKgoZ32kqdj6VS1PZmUrR6+342LYGq5cuySTcgBQfQROCO2ZPvVp/HZ5wRokc5J6EGDC5mGaBnEe/mXsG2DKq8DUWR5ETu6/EBEZGB36Cq9zV2jO2B8q1TT4IcpLk1OP8buXDAc6QcYjV6kfuMe9UzxDEqZ2lfrJP1qqKakZzHarItsuLxlwEurw0TvAJ1GYB+InUT869H4V4kty1ce58dsKYBA1apwAZMjST7V5W2mtgqLqY4AHSPXaBkztFW3a2iNbVtQaBddGYa4BBRdJ+HLAt13xQouTpFxy5RT+1lnizctcRbNxXXlBEqumdVtjBn70Eb+9VPC+JuAO8FSXkYyukkriMQfzHTavb8F4fb4bg3vrIvrbN1G38vSupVPSIEGd5IqS8Za8V4N7o8tL9qQxkKAR0JbZGG07Hrgzwx6nTlL5Xaur+oZZLY8kx8zmuXNjzMxlo6Adh8gMxW94fwyIoZFE9JEMY6wTI/ZrE4CEJJUN90RkgzlgDjEH/ANwr0AQugKiJzn/R/wAn6V2KiooZduETPU4lj1xMfSu2LLDWSx5yTpMMufwg4Hb9zTEsErrChoIBYSQeYiAQN9RAwB17VXu8UrWw4YAaihcglTB2BBHN17+/Qb8F/cUqkGADC4BEjDRBySD169KvWHfy2eJAn1PLnAO+3Sk+Uip5mvy1hbgcYUi4wAbAKklpx1GazLf2mCHSlvAPMSRnvA6Eify9qTditLkveKM/lhQQC5AdiAcCTpAgySTgCYz3qfHcULNtkuXToIzqlnwVJ0d1bIztODWZ4940bTDSup41rq250QoQOkCR0615bw9xcufznZgAzMNy0Qx+pgEe0djEpVshXYeKeKB2dkTSPi3MxJYznm3j2Huah/yc9wmWcAqcFpJk7jTGrrjPpV/7Q8ZbYqllNIAGBAI0gxn8WTJnEepqmrgsRqLAJBY5kzzAA5GOuSZNZSlYVuSvjTOg29CkZB5mJ5gB97HpjFJVtIaZa6wKyYOjUCMf18xFX04FrlwWz/Lt2wJL4ZFLSoeMeYZB+c4oW9at3StpSrAlZuEwgUnU4gyScR2g7AwJSodGc5uXmCgguOUKxVYA6DZRjp1NavhXh1tHYErdKiGESFboAQIJmcTI7TtW4JFi55etnKZukwqc3vMnBickehre4a2lq2LZtgMyrK6g2T+JsQTkT7fK4opIjwotWy6qqlyoZkxC7KAs7n+5/N62y6vbfUXkIzRkqxJULsBEAY7/ACNfxfhkS7aSDrJeHBx90BYB32jr2rU8K4QjUhLMynSbgwD1xk5z+s9Kf2LqjNdUtppZQTK6SQNTsZISRuTA77+oq7xvGJwttdGGb/jtjSwYgzKjTBzux+U0rxfhtNxXNxy2kg2kAIQdSr6ZUkZM5zvEzlX7JDi5c/5XA8tcabaq0zzZ0jqYg9MCqqhXYx2d3S5fY3bsSEMKluY2gCWGM5/KawL1kvzMCHFwKDtALRIznPyw1b3BoCxe46qhPlqweQ5JkQSImYzP3TMxWf4lZ0XGS4xKiHS5gCSpaAATJGoH69d850lYhPinh7LFtELEwTyjMkZ1fiJAMYNFmxbsm4l2GVACYkqSwGPaSRIPQ1Kzw1xS1x3by9J0XQGI1MjgYzDa2DdiRAPSgJcLMSTDOmnzARqCQ2VMNtEY3OwFYT8rgGL4Tw9wgm81qZbywX5dTFht3Bn512rnH+U9xmayzEnfUOmAPkAB8qKnvx+pNn0rgOPW8iuuzLIz1+8pHoYE15bx/hLltmuKFuo2sBonSdbSrMCNAAZlkERoEkV5TguMuWmV7bkaTqycH8UjbMAfKtg+PlkZCukOZZRDISShLAH/AIyf5hMYIO2Sa6c0xZHovA/GLQt2rflN/MuKjQVOkwE1PGdwgJP4t+lWuP8As+NRhEuajnUAtwKcZZRqYDYHfAma8dfuWTcW5wwFqPuszSTyTO4Ay2Z2HTrYueLXPMVrlxlcL5Quq0qAxZtTRJiHUg/07GMK0x5+SxcS7wTNC6rZLHQ8MvxBQCQMkgjYA/mKp8Twtu4pu2NSuQzm0RgBSNYQxmAQ0bwa0rn2gZ7YXirQuWjpi5bxzDIIPfYx/mvP3YQ67bEqCYYDSV1CIYdD8QnaBR77ESoT5vv++9dGaRp/xVzg+GW5q1mCBOsnbMAfUg/KKruuKtmbiKe+1tHcAGEcFWGpWBQghlOGGZg9QDVXwrj0IOpZmGnU2IOnTAIB+Kf/ABG+Z9FY8FuKpZlt3Eggq5IGRjZgTuMf914vxnw4WHVSGQtJVFIbGxhyZ0+hzvk1cOojvXLNItpUz6LZ8abiLP8ACcPbL3jbKs2SqKVILNEbiSBPWM7Hy/CSipHKw0vMD4vikqRB5iTEb9q0fDvtQOFspbt2/KzENqW4T0ckyrE4MlGHrgA2rHFXnASyvDByYh/KuaVC/cKoC0Qo5s1lo9OoKVKk9/yRH5N+Btm+t9dSlLfFDLWyo03D+JS07mCNhMg5M1jX+JuNIcmZyG6ESMJsDv06mvQcT47cezd1cJZK2mZS7MyEMkqzrp1FT16YO4FV/BvtmwtuHtQwJNt7gMEBlBVoEjc569qFJ6bp8HTKUNVWtn7+GdteNkWlsnhVJUELJZRkGZUCWJySJzVK54tce3dtNaUrccNIQroIggLpx03MnJma9t4Z40162r6UB6rHwnp17QfmKZxXinljVcZVHqJn2Aya2U01Zyuauv6PnjcTc8s2zkHSJ9EjSB6AT9fnSUttksrepg575/WvXcT9tra/CGYiT8KqMe+Y+VeU8Z+0t3iSQGKpzDSuCVMSCRuMLjbFJ6iGtyn4hxVy+fMOQBGrC6pjlGRIGw7CqUaSfxbfCOWe46nOO1TUyMyQAYAgR6kkd4q9wXC2gvmXbmDIFpNJdvxT+AdJOTmI3rFyLM2BHxdhA3I9x6/vFafhVspchcXQZ1kahZA06n0nBcZHZY69Kl7ilUykKQWOqdlI5YMYYAkFvTHUmqjv0YjeTMb77bn/AHSKNTjvGXny7btpDFhc1E3HwVJdiBMggQRjSOlZrcKQ+jVPSFnPX9zEUpVI9N9xj69PberovC2JAXVpIgoOratTapmREAdhvJFNsOTe8DFpVKSXJHOiqTBlYYxgKCDHzPvd4nhCH1jll02H4SYEHrGO+3rSvsz4fcuA67bIPj1kFTcLZJmd8J93EHY17G3ZS2JOTgE7k+lax3RaMpPBluLbNwHUkEGdiBBn8QMmfem8Xx62l0WxreQpKgHSSDntiPlj2KfFvH7duULhWK4zJE6oOAc8px6E7CsLg+Ji2zaNKBC2rYuSfhZ2OrXqAzAkETBmmqXAN2S455Vv5gMEk6mABlueQABgSJPWKw+K4jSVusw1EyjwCCMGCp2EGMdZ9aocR4hca4C22DpxpiZiAdt9/X3qzwnhHEcS3mW1GkmdTAhf/EmcDAxNRk3wKxDW7mXcjBwLp7NJXUcgjlJiNzSeFuXLzFzbZknSdIJCkZ1EAR06xNaXGC3bFzhb2u4VS2UFqBDEkuwkTgMD0kdIrQ+zXCvwl0Ih81boBGSoAxGoRhuYTuJMdiYw5chUZXFpeW3adtdtLjqUGkkai4hegAIEgH8PtG19nL4ez5dy2tx9RUF4BUCFASROEBPf86T9reK8x2Xy3TSSIOwZSTq5CQwIziYxPpieI8UbdtCJD3QpLTjmAkzAnqCRv1FZuTTUUMdccgnQeXpyn/8AVFUXe+CQ1uCCQeUZg753nefWuVn2ZfQVFl0MR/8AXY5qBB6E+30G9NgRhv2KnpMwR8se/wBK1sgg1yMmI29e+3X3oV9U4/X5V3QO0V0JBBkR26/4o2ChhbSIDYPTcGD/ANb0J1jBmJExO4H0/eKuvb4QqSPMDA49dthkRjrmucHxCW7gi44U4nbTkwfX4m6dfpCn9GKisyuzEQZLEDljUcDGPUfOhrVzJ0E82nbYz8M/i/xWra44kPkF1ZVWThye09TB+tT42xqU3EMEEyIJ5hgERsfX1mp7rTpoeJX8M8QdWZdQzO5jmAAAJ6nAFZ3224RJs3rjDTrFtwmknSwLzjqIbp1rR4bhE4kFx/K8sHXcmUAGnSXHUtJOM4qv43xPDG2tuL7W1K6bukaZ0kCFYSRBOxqoxeSklRcNmeSuBWZn4e0xRMlSGcKpHxmdv7Qele0+wXCJf1O7fw8hktMqgB3jJUkRyjEDJkjYGsngOFNqGVku+bIXECEVmIKnJgKsiSOaIO5h4X4k/wDEG1b+A8gtlVNpn1feT8MyJWDOmCJkdEpSppI1jjlUuDQ4/hby+ZY4nWLrXcG3GlgEjXCAQG0gzEkz1OI3UZAEKOF06YYEFucyTOQOvyFek+2Ba54fYvpy6LiF4JLIHlG5t4BIM+gmYrxi3SoBD3GtO2h1Zy0ZHOpJJU+++R787Wa+otTTUJUuDY8N427btrbW4UEkGInUZyTBjAGBt/fPvcQzks7sTkHUST6j2yfrUE4w3GYNOpAJ5t4afkd+1FxYMYOcfngVMHK6ZztbiC+rGcj/AB1+v1oVImcUNcwYHrG31qKkwJ7dOv1rUaRzVO2w3jr03/Wo5+vp+n0qbA9BArjP+opjEhIPc/v/AF9af/DvIGgk4EAEzIBAEDJ9KueGeE3bolEgNEM2FxnUDHNEdJOa9v4T9mFt80ktpILndSRvb/Ad+5zuKpJsaR5geCXbFtbr27bvqBW25LDYnKEczzBwQBHc42fA/sy5fz740kkHQYk7FmIHUme2+2BXqLXCKgAVcLgA5/udqsR3NaKKsqiMQIXAFU+N0qrMxj3/AC/PpVx36dTsKpXeG1sG8yFWZCkdRHMTjHNjOfarYHjPGUJYOhlgTADSuRk8vMzGAoA300f+h8XxQQ3NNlFwisM5H4FO++GI3r2ti3bXktpnqd9+pJMkbbnNV/HrotWLjuwnSyrK8skEiexhYnA2qMVywM3wr7JWEhmBukZBf4RtkJt9ZitPxTxC1wyNccg6B7xgkCOkxEmqL+Lt5Ns2wSYtq2RjVCkxO8ZzG/zrJ8U4pruuwiAo9ufNYhmgkcgDbPOrE9R2pZxS2APEfDm4m+t6y/Oh8pwSCCoxqwp0TDDO4B3qvx32l5/J8tHdC6lzKgDQeaYJwSQRjoR6eV4HjH4dkdC3lw4IllI5zh9MZB3Aqvxzu9xnwxuMZYMCCTBJHaex7/ITnsFm5xXiFzUoNshSVbzNzBGBqI3G3b0nJyPHOOdiLWoFVJCEfEROx6wDiNven8TxBCKsjVoCgz8Xwz7lXnG2/YTd4fy7/DMg1a1lnM5kAb94EwY6isG8ak1/vkDDt8XagarLE9TqOfoK5UL/AIOQxhwRgiSAcia5W2UPIjX0HdSIPr0z+dCIZltiB0Ijpt71YbhGXEEdWO4HcQcgyNsn513hrauYkld+xEiQCDt+dYZ+RYsgxOPcjGw6Z+poVpMQN+n/AF7fWptbZCYhpk4iBpHXOFBG0HrUVsZ1AiJyBqgSFIiRnrj0+sqSCgK+hEH1+vsa6UOZH7+dWbXBXCFKgQN2MAQdRYiDvGnf8VWuC4EzLMQoWdIKsxjocQANMHrP0o7g8DLde4/StHw/jLmuEhnYxByZOJyPWavN4OpUaeUkYLEqBicyOuRv613w3hzZuKTGFdzy5kBoE6ffHSnFqbSDFol41x6rcWwqyluC0ELruQDqPKQQPUdu1YfiX865ZtkBPNa2jydvhUEQBBadvVRsTWh4lwDQLh0Ak5y0nUdyD1PSOprIu8WykkalidN1gZt+Zk3F3OohSB12jIFdEUnuv/C18rtmlxHC6JRV1i0cZC5GoOSSQCJYnPRR2qn4Tw6cPdN0sJFtigJIhipIVT946SrehB6Cpcfxdz/jRSzBfNzIJWdQhRDBixMAxM9q5/BXGs2rxyvnEkkklQ6kBWMQJd4AJnK461a4QqLngnjlt+C4jhr1zSXtuLUgySyyoAAkwxBnaCKw1cPctqkAMBIAO2JmPhIg79+tanjHgzLb1soGnyyLnmal5oChiAILYWNgYOM1R8MuWVfUqq1zTG5AJJ5sbkmSNsQKiMY8ryVOUpVfshicC73HZUJUmS5I5ttuhHp6Uvi7DIckg43B+kGDXo+H4G7c1FbPlookQMnAYjAGo4yIn8qs3/DyVUPpKmMZDdO2+4rztTqnpzpolabZ5Dufyj32/wAV1LTHYE4nHQdZOwFeks+BLqBBBtnJJ1D5YievXOJq1d8N4dUNwmCQ2OYBTEgqob4RPU5iuiOtGStMXbZ53hvCnd9LEKfWDuQDEHMda9J4b4Tw1tXdv5jISAzCcrkwrCMEgTBzOaRb8Ka5ltKggiA0aSQSDymDE9fSRXfHPDuJ4ZV0WjcQoulpDGSxUgiZAChM4GQJnFRHXc24x5/wUoVyanD8Wq3C4uBWZdirFVlUkhe8p7Uy94tpU/zNeBKqFOMycSV+HsRnfqfJeGC7cKOLb6MSWtv5ZjYSqsZmVM/DzT3OtxPmMFCE5gleIeEVV0mGgaWuBhEAkQREkkrrCMkqbLSTXBocF9ppkaCLgnkZHDR0YgwAMxqjcVd4X7TAZe2hBaJZYVfds53MAHAmeleLa2oWNQadCg22Oos2YkAYkOOu2+YpnG3mQBXBbSDpA6BDBnaOkxBJKzk4eU4v6CquT1XinH2uJuWyNaLLAMIW2TpI1QwmJK55cTVBNQk2nUuWkoVILdzqHK5gk7b1503eJdFZHgYZUjSwghQARvJ1AnfPUwRYS5fEguokal5TjussNRzj2G1Y6ik3le4WjYt8fftljpK6mLMZ5Z0Ksw2WiFjqdqo+I8deu22t3JcFCWnQSpDMRAEAMVZd8QpyMzf4LiuJGkBReSADJ1g9TAblA9ql4nbtXLclblpzuQQi6sbgd/TY9D0UNRxW7/ImjA4HjzZ4e4jow1wxKiY+FApG+TAz+tZicZFxSZlS2pRgjBIicbAnHc7YrZYWzrtkkajBJgidxpHQzBxSytq0TFqRq/5MxJJClm6Eg74jSNhFXDVjLb3JoqWkBa6/KqtqGkTJOu7sDOIHX0+WXd4TSClvLtpfQpIGk4kTsTy9aseI8XoFp7ZItHlI1iZDFiAZ5szBj/eQb7eYZYAAkhjEnfZozv8AWtYwldiZH+FcgyPhzvBH/e+KteG3tDSWMKZZo2J9DmY6532qNri+Ysw1SCNK7kRuSu2BJboKQSkGCSWmAxOwPTHaTO0j3FacqmBbv3LYYxt7tRVZEEDmj00jH/yopdtBR7XX5gInUARpPRd4E9ckDffOKp/wqZA1Htp3O4Y7D7xG/ffve/hydTMzGDKsRGI+7JxHf1Oc4LbssuE16igjAgcrg6dUyYmSYysztXAsXwXiKtmHCKdJgFiF+AZ+pyBA7g1c4fgVbKBebSTiA0kBZzvIbr2zTr/AqyhgCqAF/LlQxZSAATGRyj1mMDBpyfy1jUGLMCvlkKWhXOnJkRC7Zx7UWlyNQoz7i+WmnoWhQBzZO6idoP1rocO3IC5+EIAAREwGJ3yxzn7tWEtAXCbrBog5QrBzMAA7QDifQwKY3HwQ9tSR0Dcg1BjOAh19Tq9B2miO8lFfktQZ1OGglrlxEkQBPNMfeXdolcBcaaq8baS2quLmuT5ayApUMrEgKWLAEhYB2jHY2G4q5cHmG2YGCQ5OYOQwSBqEMQRggxGI8hw9puM4hyWYJa5UAOdRLDV9Qx+g712acVF2XKG1L3NU2XTXHGByBqCG3kAkxLEMSZBycYj2xLlrib7QY1OUDOLbqRoJCtojYlj09BG1aPEW1JTzn8u4MKYXS/aFfBEwYjp8zu8LwzaWFoaHfLXrigNgEciCO/oMg5IroW25k03seY4nixYujh7eIKh7gRXbVqBgBpWSAB1AGBgZ0OEfiLl25w/EtxDZglR/LKnIJZLRhczPKPaK9N4RwNq2ulAWJ9y1wwYZoMaiesdRGNrVjgbzXDoQoukKFZCV7SdI+LeCNvXBrKWpb4Kwcfco2+Ba3bKeZqxq2DIc41aWAJxvpAPbpWh4BwNhU8y5euF+hVmgHmUBlUaFmBAhR2q7xXg94W9bXPNxIIkkDsIGB6CKo+GTbcFyVtu0XUQAEwso5nDKDKkR88AHBTk5NPj6hj4Lb8MrSWGTyrymOXAKzGDt6CKcvAM6syuttgZCsxFzpzSw2yM9qXwl5rba9IPOxVRMAEEbxJaYbJ6DNPtMHUm7h1k22XMrHL5iDCsP03jFKMIP7lUKscKUhiysXJacE9Y1LMFsnvMnfFPS+bZlIJEyDgDGMD06AdvlS4njS5jSJ+EOSebpME8vXckfSl69P322EFSYBMz1kfT6VWKT2ReAzj3W4+p7dsjClYCr2MkGWMQB7dKXw3iPlTZtOgGmVtliMrpDTpAgDMAbSJip2+JCyNR7hgPin7st8O4mInudq4nFWVw6yFkcgyJidKwwnqRIPpV0GJZ4gMzariozNumoMVx1kypjGoZyaq8ZwQDDTqtkmDJ1dOkwR7yesVLibhtuotgXQxlidQZAOaZGwMr84wZpjcYjuWa3EkaGwCQMFdN0MpEAfDk9p2WNXTFxwULPCrLMyalABnt9BggHfpPzqtxfhSsHt6jpkMoA+EgAQCBEZIjb2AIqZ47RcYopMkHQfvThgomJGIAM4wD0rXr6h2tguu7SDpKAgMNWSQYIxtvP3QMs51uJs6PDioi2qFRuuxaYycyGkv33rD4jw67bUOqNdYsFcsrdyHXaCue4M+wr0KBw2ny2VnMkB8GTJKGNM4kA5Ix6iSBhcMaiW2DRIJaDP9OJ6CM7SKeTW7RGKMrwS8bfmohcKGuTpYkGD0YwAY7g5PaKev2gvkFrlnzrdtTykgO45QGRWViw5sz2HfNy49m4S6o5I1H+W/lnlOeXSZAMQvKdzJmBT4nhyIcLJ+FZHONJgd5y3bq3Y1r3UkJxos37lhwvlWitt1ZwAjWypCSpQgQ2RGnK7RAmPJeNEop59aiFlWcNanmZDrUe20T8xXo7fE3GQWxddhBQrJlBhY5jykTjYnIq0eKUg271m29lwyM0kXCAGjU5zAbIMQN6XyOV0S0fKb3EE77STH3fcDYTjFd4Gw7vChjA2kgAHaYGzE4EZLDevYcf9kktq0CNSKyFmICljCzvImAT86Tw9hAjjKsYtpcgM4VCQwYnYEq5B9gI0it81RNHm77KjEAkwArEYDRIbTpjlk6c7xNUsrOY2B/YOT/utHiOCa3cFq5EGIiSCGjmHLJPSYMHtFbfEeDcMEXQSW5WV1MyGYhWbUQoUkr0kZzAihzjFX5FRlWeNuBQFtGIEE2yZHQzqzO/zopn/p6n4mdj1IKgH2BQkfX5DYFRnER9P8TtiA33WUBgSfw4CxgTE7DfpWLZ4hZKcPaGGuF21acrpJiRONSYiMEDvRRXlNHRP/kWL5IUKzddUtzfeHp74Hf1NV7lhHgkyxLACDLYYvGwWMdcx6CiiuqqeP0LY3gOEABDbzLCFYCQAyrgYkRJM7dJNbXiHGJcQItpURByjfbb23/M79O0VrHgqK2QpeEaQCpaTqMEbx2LAZ2mZjrVa19nbGssLS6mJz+LPUSBM0UU0VIv8L4RatEHyFDMBBWASD/UM/WnuqzASZ9uu0mQT60UUNsS4OoYnC535Qe5xI2z74qNi0paCNWcIrMvsc46gnNdoqcnY2lRGwxRoL3EtwBoV5UqoMBVYMFUKTAGnYYmo22DvygsBzZP3Rncjf5UUU6t7kLkldRtRInTsQxBInAiB+8UojOnTLSwEQDMwRM/nj2ooqGkMpXAgMgN3zBjBznfekXL5+8C/QExORgZ6bda5RWkeS0KfiVDspOV3RSzH2YkKD7g1S4vjjsqqoCz+I4yckR0P3a7RViKlniLwhgyqFGrmEwC0EEiSFzGJ3OKvX7N4ubiXSQGMBguRJ5XiNY5pBOc560UU2IvJ4hcUlb6K2YYoQwJUQ2oOAcgGTLenanWVtXAGtrqQTLdhltA1jVjJkzuRXaKyxRKOWeNslvLljysBMyArLuYAIEgdzI7SKt7xJnA8uCwgbRqVsyDg9RhszJ9aKKiW63FLgnZtqIJIJbSAratR5jBkCFzpEzMjtUOPsi2PKuXNZJIGCC2nRswHKwdiQek0UU8ElsQ/Y4msOluAdSHJj4lHKG7nUGzmIO8il2+GV+S4o8vDzJgQRkgDUSNokgyaKKpN7CXJzirKOFy3YZOnORjMTiY6g+hGd4h4VquIy25Duoco+kRhpMwZOo7DttArlFGTUhySMSzae+ycPdPOoJEAQCOUcwMxufYDc1f+0NjU1uzbfS2nTzDoiBi4K9SD1zkwASaKKu2mzNLYyTZ461yKQQOoKQZyfiAO5NFFFc/qZeEB//Z' },
    { name: 'wildlife', image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?cs=srgb&dl=pexels-pixabay-247502.jpg&fm=jpg' },
    { name: 'eco', image: 'data:image/jpeg;base64,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' },
    { name: 'cultural', image: 'data:image/jpeg;base64,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' },
    { name: 'beach', image: 'https://images.pexels.com/videos/1720220/free-video-1720220.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    // Add more tourism types with their respective images
  ];
  
 export default function Index() {
  const [reviews, setReviews] = useState([]);
  const setIsAddReviewOpen = useState(false);
  const [popularSites, setPopularSites] = useState([]);
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
  useEffect(() => {
    // Fetch data from the backend API for popular sites
    fetch('http://localhost:3001/api/popular_sites')
      .then(response => response.json())
      .then(datap => {
        setPopularSites(datap); // Set popularSites directly with the detailed data
      })
      .catch(error => console.error('Fetching error:', error));
  }, []);
  
  
  const handleAddReviewClick = () => {
    setIsAddReviewOpen(true);
  };

  const handleAddReviewClose = () => {
    setIsAddReviewOpen(false);
  };
   return (
     <Box>
       {/* <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Flex
          flex={{ base: 1, md: 1 }}
          justifyContent="center"
          alignItems="flex-start"
          pr={{ base: 0, md: 16 }}>
          <Stack textAlign={'left'}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Roam without {' '}
              <Text as={'span'} color={'orange.400'}>
                Limits
              </Text>
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Your Way . Your ADVENTURE . Our Support
            </Text>
          </Stack>
        </Flex>
        
        <Flex >
        <Box
        
        w="100%"
        maxW="900px"
        mx="auto"
        
        sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
      >
        {srces.map((src) => (
          <Image
            key={src}
            w="100%"
            borderRadius="xl"
            mb={2}
            d="inline-block"
            src={src}
            alt="Alt"
            _hover={{ transform: 'scale(1.05)' }}
          />
        ))}
      </Box>
    </Flex>
    </Stack>   */}
    
   <Stack
  direction={{ base: 'column-reverse', md: 'row' }}
  spacing={{ base: 8, md: 10 }}
  py={{ base: 20, md: 28 }}>

  <Flex
    flex={{ base: 1, md: 1 }}
    justifyContent="center"
    alignItems="flex-start"
    pr={{ base: 0, md: 16 }}>
    <Stack textAlign={'left'} w={{ base: '100%', md: '40%' }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Roam without {' '}
        <Text as={'span'} color={'orange.400'}>
          Limits
        </Text>
      </Heading>
      <Text fontSize="lg" fontWeight="bold" mt={4}>
        Your Way . Your ADVENTURE . Our Support
      </Text>
    </Stack>
  </Flex>
        
  <Flex flex={{ base: 1, md: 1 }} justifyContent="center" alignItems="center">
    <Box
      w="100%"
      maxW="400px"
      mx="auto"
      overflow='hidden'
      sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}
    >
      {srces.map((src) => (
        <Image
          key={src}
          w="100%"
          borderRadius="xl"
          mb={2}
          d="inline-block"
          src={src}
          alt="Alt"
          _hover={{ transform: 'scale(1.05)' }}
        />
      ))}
    </Box>
  </Flex>
</Stack>


  {/* "MUST VISITS" section */}
  
  {/* <Box >
  <Flex mt={12} direction="row">
  <Heading fontSize="xl" fontWeight="bold">
    MUST VISITS
  </Heading>
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    navigation
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
  >
    {popularSites.map(popularSite => (
      <SwiperSlide key={popularSite.popularSiteId}>
        <Box
          p={4}
          borderWidth={1}
          borderRadius="lg"
          borderColor="gray.200"
          bg="white"
          shadow="md"
          _hover={{ shadow: 'lg' }}>
          <Image src={popularSite.siteImages.image1} alt={popularSite.siteName} /> {/* Display the site image 
          <Text fontSize="xl" fontWeight="semibold">
            {popularSite.siteName} {/* Display the site name 
          </Text>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
  </Flex>
</Box> */}

{/* <Box mt={12}>
  <Heading fontSize="xl" fontWeight="bold">
    MUST VISITS
  </Heading>
  <Flex mt={4} flexWrap="wrap">
    {popularSites.map((popularSite) => (
      <Box
        key={popularSite.popularSiteId}
        p={4}
        width="calc(33.33% - 32px)" // Adjust width as needed
        margin="16px"
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.200"
        bg="white"
        shadow="md"
        _hover={{ shadow: 'lg' }}
      >
        <Image
          src={popularSite.siteImages.image1}
          alt={popularSite.siteName}
        />{' '}
        <Text fontSize="xl" fontWeight="semibold" mt={2}>
          {popularSite.siteName} 
        </Text>
      </Box>
    ))}
  </Flex>
</Box> */}
<Box mt={12}>
  <Heading  fontWeight="bold" fontSize="2xl" mb={4} textAlign='center'>
    MUST VISITS
  </Heading>
  <Flex mt={4} flexWrap="wrap">
    {popularSites.map((popularSite) => (
      <Link key={popularSite.popularSiteId} to={`/site/${popularSite.popularSiteId}`}>
      <Box
        key={popularSite.popularSiteId}
        p={4}
        width="calc(33.33% - 32px)" // Adjust width as needed
        margin="16px"
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.200"
        bg="white"
        shadow="md"
        _hover={{ shadow: 'lg' }}
        position="relative"
      >
        <Image
          src={popularSite.siteImages.image1}
          alt={popularSite.siteName}
          borderRadius="lg"
          width="100%"
          height="200px" // Adjust image height as needed
          objectFit="cover"
        />{' '}
        {/* Display the site image */}
        <Text
          fontSize="xl"
          fontWeight="semibold"
          mb={2}
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          color="white"
          textAlign="center"
          background="rgba(0, 0, 0, 0.7)"
          padding="8px"
          borderRadius="md"
          zIndex={1}
        >
          {popularSite.siteName} {/* Display the site name */}
        </Text>
        
      </Box>
      </Link>
    ))}
  </Flex>
</Box>

       {/* <Box>
      <Flex>
       <Text fontSize="5xl">Voices</Text>
       <Slider {...settings}>
       <Stack spacing={8} direction='row'>
         {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
        </Stack>
      </Slider>

      <IconButton
        aria-label="Add Review"
        variant="ghost"
        position="absolute"
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={handleAddReviewClick} />

      <AddReviewForm onReviewAdded={handleAddReviewClose} />
      </Flex>
     </Box> */}
     <Box>
  <Flex direction="column" alignItems="center" position="relative">
    <Heading fontSize="2xl" mb={4}>
      VOICES
    </Heading>
    <Slider {...settings}>
      <Stack spacing={8} direction="row">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Stack>
    </Slider>
    <IconButton
      aria-label="Add Review"
      variant="ghost"
      position="absolute"
      transform={'translate(0%, -50%)'}
      right={0}
      zIndex={2}
      onClick={handleAddReviewClick}
    />
    <AddReviewForm onReviewAdded={handleAddReviewClose} />
  </Flex>
</Box>

     {/* <Box p={8}>
      <Heading as="h1" mb={4} textAlign="center">
        Tourism Types
      </Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
        {tourismTypes.map(tourismType => (
          <Link to={`/sites/tourism_type/${tourismType.name}`} key={tourismType.name}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              textAlign="center"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              <Image src={tourismType.image} alt={tourismType.name} />
              <Heading as="h3" mt={2} fontSize="lg">
                {tourismType.name}
              </Heading>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box> */}
    <Box p={8}>
  <Heading as="h1" mb={4} textAlign="center">
    Tourism Types
  </Heading>
  <Flex flexWrap="wrap" justifyContent="center">
    {tourismTypes.map(tourismType => (
       <Link to={`/sites/tourism_type/${tourismType.name}`} key={tourismType.name}>
      <Box
        key={tourismType.name}
        p={4}
        width="calc(33.33% - 32px)" 
        margin="16px"
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.200"
        bg="white"
        shadow="md"
        _hover={{ shadow: 'lg' }}
        position="relative"
      >
        <Image
          src={tourismType.image}
          alt={tourismType.name}
          borderRadius="lg"
          width="100%"
          height="200px" // Adjust image height as needed
          objectFit="cover"
        />
        <Text
          fontSize="xl"
          fontWeight="semibold"
          mb={2}
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          color="white"
          textAlign="center"
          background="rgba(0, 0, 0, 0.7)"
          padding="8px"
          borderRadius="md"
          zIndex={1}
        >
          {tourismType.name}
        </Text>
      </Box>
      </Link>
    ))}
    
  </Flex>
</Box>

     </Box>
     
   )
 }