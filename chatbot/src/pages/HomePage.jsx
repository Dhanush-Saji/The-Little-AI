import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Insta from '../assets/insta.png'
import Twit from '../assets/twit.png'
import Slack from '../assets/slack.png'

const HomePage = () => {
  return (
    <Flex>
      <VStack></VStack>
      <VStack>
        <Heading as="h2" size="2xl">Chat With Ease❤️</Heading>
        <Text color='var(--color-light-black)'>Experience fun, efficient assistance with our playful AI-powered chatbot</Text>
        <Button  size='lg'
        _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}
          variant="solid"
          backgroundColor="var(--color-light-brown)"
          color='white' borderRadius='50px' border='5px solid #FFDDAD'
        >
          Let's chat
        </Button>
        <Link to='/'>Want to know how it works?</Link>
        <Text as='b'>Connect with us</Text>
        <Flex gap='1rem'>
        <Image boxSize="60px" objectFit="contain" src={Insta} alt="insta" />
        <Image boxSize="60px" objectFit="contain" src={Twit} alt="twit" />
        <Image boxSize="60px" objectFit="contain" src={Slack} alt="slack" />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default HomePage;
