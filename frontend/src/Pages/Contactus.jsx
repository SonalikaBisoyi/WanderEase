// import React from "react";
// import { Box, Container, Textarea, Input, Button,Text } from "@chakra-ui/react";
// const Contact = () => {
//   return (
//     <Box bgImage="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg?w=826&t=st=1692480421~exp=1692481021~hmac=747bdf56c99da89ad5b78f9103ca2bfb4896bb8e38971b0debd009278ca59ff1"
//     bgSize="cover">
//       <Container  textAlign="center">
//         <Text fontSize="6xl">Feel Free to Contact us</Text>

//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"></iframe>

//         <Container maxW="50rem" margin="auto" className="contact-form">
//           <form
//             action="https://formspree.io/f/mbjvolad"
//             method="POST"
//             className="contact-inputs">
//             <Input
//               type="text"
//               name="username"
//               placeholder="username"
//               autoComplete="off"
//               required
//             />

//             <Input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <Textarea
//               name="message"
//               cols="30"
//               rows="6"
//               autoComplete="off"
//               required></Textarea>

//             <Button type="submit" cursor="pointer" transition="all 0.2s">
//               Send
//             </Button>
//           </form>
//         </Container>
//       </Container>
//     </Box>
//   );
// };

// export default Contact;
import React from "react";
import { Box, Container, Flex, Textarea, Input, Button,Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box
    
      bgImage="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg?w=826&t=st=1692480421~exp=1692481021~hmac=747bdf56c99da89ad5b78f9103ca2bfb4896bb8e38971b0debd009278ca59ff1"
      bgSize="cover"
    >
      <Container marginTop="6rem" textAlign="center">
      <Text fontSize="6xl">Feel Free to Contact us</Text>

        <Flex justifyContent="space-between">
          {/* Map on the left */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>

          {/* Contact Form on the right */}
          <Box width="100%">
            <Container className="contact-form">
              <form
                action="https://formspree.io/f/mbjvolad"
                method="POST"
                className="contact-inputs">
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />

                <Input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />

                <Textarea
                  name="message"
                  rows="6"
                  autoComplete="off"
                  required
                ></Textarea>

                <Button type="submit">send</Button>
              </form>
            </Container>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;

