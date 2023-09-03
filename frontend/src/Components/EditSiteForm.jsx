// EditSiteForm.js
import React, { useState } from 'react';
import { Box, VStack, Input, Textarea, Button } from '@chakra-ui/react';

const EditSiteForm = ({ site, onSave, onCancel }) => {
  const [editedSite, setEditedSite] = useState(site);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSite({ ...editedSite, [name]: value });
  };

  const handleSave = () => {
    onSave(editedSite);
  };

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
      {/* Form elements for editing site details */}
      <VStack align="start" spacing={4}>
        <Input
          type="text"
          name="name"
          value={editedSite.name}
          onChange={handleInputChange}
          placeholder="Site Name"
        />
        <Input
          type="text"
          name="best_visit"
          value={editedSite.best_visit}
          onChange={handleInputChange}
          placeholder="Best Visit"
        />
        <Textarea
          name="description"
          value={editedSite.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <Textarea
          name="requirements"
          value={editedSite.requirements}
          onChange={handleInputChange}
          placeholder="Requirements"
        />
        <Input
          type="text"
          name="image1"
          value={editedSite.image1}
          onChange={handleInputChange}
          placeholder="Image URL 1"
        />
        <Input
          type="text"
          name="image2"
          value={editedSite.image2}
          onChange={handleInputChange}
          placeholder="Image URL 2"
        />
        <Input
          type="text"
          name="image3"
          value={editedSite.image3}
          onChange={handleInputChange}
          placeholder="Image URL 3"
        />
        <Textarea
          name="food"
          value={editedSite.food}
          onChange={handleInputChange}
          placeholder="Food"
        />
        <Input
          type="text"
          name="tourism_type"
          value={editedSite.tourism_type}
          onChange={handleInputChange}
          placeholder="Tourism Type"
        />
        <Button colorScheme="teal" onClick={handleSave}>
          Save
        </Button>
        <Button colorScheme="gray" onClick={onCancel}>
          Cancel
        </Button>
      </VStack>
    </Box>
  );
};

export default EditSiteForm;
