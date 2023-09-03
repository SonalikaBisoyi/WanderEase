import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const AddReviewForm = ({ onReviewAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    customerName: '',
    customerImage:'',
    date: '',
    opinion: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmitReview = () => {
    // Send the new review data to the backend API
    fetch('http://localhost:3001/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(response => response.json())
      .then(data => {
        // Notify parent component that a new review has been added
        onReviewAdded(data);
        // Reset the newReview state
        setNewReview({
          customerName: '',
          customerImage:'',
          date: '',
          opinion: '',
        });
        // Close the modal
        handleClose();
      })
      .catch(error => {
        console.error('Error adding customer review:', error);
      });
  };

  return (
    <Box>
      <Button
        aria-label="Add Review"
        leftIcon={<AddIcon />}
        colorScheme="teal"
        onClick={handleOpen}
      >
        Add Review
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Review</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Customer Name"
              value={newReview.customerName}
              onChange={e =>
                setNewReview({ ...newReview, customerName: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              value={newReview.customerImage}
              onChange={e =>
                setNewReview({ ...newReview, customerImage: e.target.value })
              }
            />
            <Input
              placeholder="Date"
              type="date"
              value={newReview.date}
              onChange={e =>
                setNewReview({ ...newReview, date: e.target.value })
              }
            />
            <Input
              placeholder="Opinion"
              value={newReview.opinion}
              onChange={e =>
                setNewReview({ ...newReview, opinion: e.target.value })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSubmitReview}>
              Submit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddReviewForm;


