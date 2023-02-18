import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Button, Flex, Input, Textarea, VStack } from "@chakra-ui/react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4td586t",
      "template_kpdjzuq",
      form.current,
      "9TxBzr_CWefE0r88i"
    );
    e.target.reset();
  };
  return (
    <Flex
      id="contact"
      gap="1rem"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-around"}
      bg="white"
      p="4rem 2rem"
      w="100%"
      alignItems={"center"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        h="150px"
        className="contact_option"
      >
        <a href="mailto:dhanushsaji1@gmail.com">
          <Flex alignItems={"center"} justifyContent={"center"} gap="0.5rem">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
          </Flex>
          <h5>dhanushsaji1@gmail.com</h5>
          <a href="mailto:dhanushsaji1@gmail.com"> Send a message</a>
        </a>
      </Flex>
      <form ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="name"
          placeholder="Your Full Name"
          size="lg"
          isRequired
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          size="lg"
          isRequired
        />
        <Textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          isRequired
        ></Textarea>
        <Button
          size="lg"
          _hover={{ backgroundColor: "#e29a43", color: "#f5f1ee" }}
          variant="solid"
          marginLeft="auto"
          backgroundColor="var(--color-light-brown)"
          color="var(--color-dark-brown)"
          type="submit"
        >
          Send Message
        </Button>
      </form>
    </Flex>
  );
};

export default Contact;
