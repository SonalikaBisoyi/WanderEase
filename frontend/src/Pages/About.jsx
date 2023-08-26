import React from "react";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Box padding="5rem 0" bgImage="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=826&t=st=1692481883~exp=1692482483~hmac=b0e3df737747b200f9cd806e603c4e993846b09a771937d20ed35e12d4d2d823"
    bgSize="cover">
      <Container maxWidth="800px" textAlign="center">
        <Heading as="h2" size="xl" mb="2">
          About Us
        </Heading>
        <Text fontSize="lg" mb="4">
          Welcome to WanderEase! We are a passionate team of travel enthusiasts
          dedicated to helping you plan your dream vacations.
        </Text>
        <Text fontSize="lg" mb="4">
          Our goal is to provide you with the best travel experiences by offering
          carefully curated itineraries, travel tips, and recommendations for
          destinations around the world.
        </Text>
        <Text fontSize="lg" mb="4">
          Whether you're a solo traveler, a couple, or a family, we have something
          for everyone. Join us on your next adventure and let us help you create
          unforgettable memories.
        </Text>
        <Image
          src="https://img.freepik.com/free-vector/corporate-portrait-office-workers-employees_74855-5471.jpg?w=826&t=st=1692482219~exp=1692482819~hmac=4109f13979493ef5a691af462d137178dc3a18e6fdcf52dc40d1acbde09bdbc7"
          alt="Our Team"
          w="100%"
          maxW="400px"
          mx="auto"
          mt="4"
          borderRadius="full"
        />
      </Container>
    </Box>
  );
};

export default AboutUsPage;
