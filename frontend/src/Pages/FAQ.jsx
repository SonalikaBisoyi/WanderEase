import React from "react";
import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const FAQPage = () => {
  const faqData = [
    {
      question: "What is TravelPlanner?",
      answer: "TravelPlanner is a platform that helps you plan and organize your travel itineraries and find useful travel tips.",
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button and provide your details. You will receive a confirmation email to activate your account.",
    },
    {
      question: "Can I edit my travel plans after creating them?",
      answer: "Yes, you can edit your travel plans at any time by logging into your account and accessing your itineraries.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <Box padding="5rem 0"  bgImage="https://img.freepik.com/free-vector/faq-concept_23-2148158953.jpg?w=740&t=st=1692482656~exp=1692483256~hmac=aed40b87cdddca9ccfacdb566af40af69240d5b9f496204404c1a6e9d28d9ac5"
    bgSize="cover">
      <Container maxWidth="800px" textAlign="center">
        <Heading as="h2" size="xl" mb="4">
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQPage;
