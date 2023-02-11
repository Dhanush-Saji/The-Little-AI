import React from "react";
import logo from "../../assets/logo.png";
import { BiLogInCircle } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import './Navbar.css'
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import {HashLink} from 'react-router-hash-link'
const Navbar = () => {
  return (
    <>
      <div className="navbarParent">
        <Flex alignItems={"center"} gap="1rem">
          <Image boxSize="80px" objectFit="contain" src={logo} alt="logo" />
          <Text fontSize="xl" as='b' color='var(--color-dark-black)'>The Little AI</Text>
        </Flex>
        <Flex marginLeft='3rem' color='var(--color-light-black)' gap='2rem' className="navbarLinks" alignItems={'center'}>
        <button><HashLink smooth to="#">Features</HashLink></button>
        <RxDotFilled color="var(--color-light-brown)" />
        <button><HashLink smooth to="#">About Us</HashLink></button>
        <RxDotFilled color="var(--color-light-brown)" />
        <button><HashLink smooth to="#">Contact</HashLink></button>
        </Flex>
        <Button  size='lg'
        _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}
        
          leftIcon={<BiLogInCircle />}
          variant="solid"
          marginLeft="auto"
          backgroundColor="var(--color-light-brown)"
          color="var(--color-dark-brown)"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Navbar;
