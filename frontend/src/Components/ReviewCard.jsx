import React from 'react';
import { Box, Text ,Avatar} from '@chakra-ui/react';

const ReviewCard = ({ review }) => {
  return (
    <Box p={4} borderWidth="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
      <Avatar src={review.customerImage} />
      <Text fontWeight="bold">Customer Name: {review.customerName}</Text>
      <Text>Date: {review.date}</Text>
      <Text>Opinion: {review.opinion}</Text>
    </Box>
  );
};

export default ReviewCard;