import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Insta from "../../assets/insta.png";
import Twit from "../../assets/twit.png";
import Slack from "../../assets/slack.png";
import "./HomePage.css";
import heroImage from "../../assets/heroImage.png";
import cloudL from "../../assets/cloud_left.png";
import cloudR from "../../assets/cloud_right.png";
import backDrop from "../../assets/heroImageBackgroundDrop.png";
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <Grid templateColumns={{base:'repeat(1,1fr)',md:"60% 40%"}} pt='3rem'>
      <GridItem pos="relative" mt="2rem">
        <VStack
          h={{base:"500px",md:"550px",lg:"500px"}}
          border="0px"
          className="heroImage"
          borderRadius="0rem 8rem 0rem 0rem"
          pt="7rem"
          w="100%"
        >
          <motion.div class='cloudLDiv'
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale:1,
            }}
            transition={{
              duration:2,
              ease: "easeInOut",type: "spring", stiffness: 300, damping: 20
            }}
          >
            <Image
              w="180px"
              src={cloudL}
              alt="cloud 1"
            />
          </motion.div>

          <motion.div class='cloudRDiv'
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale:1,
            }}
            transition={{ 
              delay:0.5,
              duration:2,
              ease: "easeInOut",type: "spring", stiffness: 300, damping: 20
            }}>

          <Image
            w="250px"
            src={cloudR}
            alt="cloud 2"
          />
          </motion.div>
          <Image
            boxSize="350px"
            objectFit="cover"
            pos="absolute"
            bottom="0px"
            zIndex={"3"}
            src={heroImage}
            alt="Hero Image"
            mt="auto"
          />
          <Image
            pos="absolute"
            bottom="0px"
            w="800px"
            src={backDrop}
            alt="cloud 2"
          />
        </VStack>
      </GridItem>
      <GridItem bg={{base:'rgba(0, 0, 0, 0.03)',md:'white'}}>
        <VStack as={motion.div}
          m="auto"
          marginTop={"3rem"}
          w="80%"
          lineHeight="2rem"
          gap="0.5rem"  initial={{
            opacity :0,
            y: '-3rem'
          }}
          animate={{
            opacity:1,
            y: '0rem'
          }}
          transition='all 0.1s ease-in'
        >
          <Heading as='h2' size="2xl">
            Chat With Ease❤️
          </Heading>
          <Text color="var(--color-light-black)">
            Experience fun, efficient assistance with our playful AI-powered
            chatbot
          </Text>
          <Button
            size="lg"
            _hover={{ backgroundColor: "#e29a43", color: "#f5f1ee" }}
            variant="solid"
            backgroundColor="var(--color-light-brown)"
            color="white"
            borderRadius="50px"
            border="5px solid #FFDDAD"
            w="100%"
          >
            Let's chat
          </Button>
          <Link to="/" className="wantToKnowLink">
            Want to know how it works?
          </Link>
          <Text as="b">Connect with us</Text>
          <Flex gap="1rem">
            <Image boxSize="60px" objectFit="contain" src={Insta} alt="insta" />
            <Image boxSize="60px" objectFit="contain" src={Twit} alt="twit" />
            <Image boxSize="60px" objectFit="contain" src={Slack} alt="slack" />
          </Flex>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
