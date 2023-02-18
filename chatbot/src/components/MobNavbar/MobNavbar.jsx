import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Hide, Image, Show, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const MobNavbar = () => {
  const btnRef = useRef()
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Show below='md'>
    <Flex zIndex={'5'} pos={'fixed'} w='100%' alignItems='center' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} p='0.5rem 1rem' justifyContent='space-between' bg='white'>
      <GiHamburgerMenu ref={btnRef} onClick={onOpen} fontSize='1.8rem' color="var(--color-dark-black)" />
      <Image boxSize="50px" objectFit="contain" src={logo} alt="logo" />
      <Button backgroundColor="var(--color-light-brown)" color="var(--color-dark-brown)" _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}>
        <BiLogInCircle fontSize='1.8rem' color="var(--color-dark-black)" />
      </Button>
    </Flex>
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>The Little AI</DrawerHeader>
          <DrawerBody>
          <Flex color='var(--color-light-black)' gap='2rem' justifyContent={'center'} flexDirection='column'>
        <button  onClick={()=>{onClose()}}><a href="#feature">Features</a></button>
        <button  onClick={()=>{onClose()}}><a href="#contact">Contact</a></button>
        
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  )
}

export default MobNavbar