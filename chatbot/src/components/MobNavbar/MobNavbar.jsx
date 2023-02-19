import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Show, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import {auth,provider} from '../../Firebase/firebase'
import {signInWithPopup,signOut} from 'firebase/auth'
import byeImage from '../../assets/byeRobot.png'

const MobNavbar = () => {
  const btnRef = useRef()
  const navigate = useNavigate()

  const { isOpen:drawerisOpen, onOpen:draweronOpen, onClose:draweronClose } = useDisclosure()
  const { isOpen:logisOpen, onOpen:logonOpen, onClose:logonClose } = useDisclosure()
  const [user, setuser] = useState('')
  const handleSigninOut = () =>{
    if(user){
      logonOpen()
    }
    else{
      signInWithPopup(auth,provider).then((data)=>{
        setuser(data.user.email)
        localStorage.setItem('user', data.user.email)
      })
    }
    
  }
  const handleLogOut = () =>{
    signOut(auth)
    localStorage.removeItem('user')
    logonClose()
  }
  useEffect(()=>{
    setuser(localStorage.getItem('user'))
  })
  return (
    <Show below='md'>
    <Flex zIndex={'5'} pos={'fixed'} w='100%' alignItems='center' boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'} p='0.5rem 1rem' justifyContent='space-between' bg='white'>
      <GiHamburgerMenu ref={btnRef} onClick={draweronOpen} fontSize='1.8rem' color="var(--color-dark-black)" />
      <Image boxSize="50px" objectFit="contain" src={logo} alt="logo" />
      <Button onClick={handleSigninOut} backgroundColor="var(--color-light-brown)" color="var(--color-dark-brown)" _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}>
      {
          user?user:<BiLogInCircle fontSize='1.8rem' color="var(--color-dark-black)" />
        }
        
      </Button>
    </Flex>
    <Drawer
        isOpen={drawerisOpen}
        placement='left'
        onClose={draweronClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>The Little AI</DrawerHeader>
          <DrawerBody>
          <Flex color='var(--color-light-black)' gap='2rem' justifyContent={'center'} flexDirection='column'>
        <button  onClick={()=>{draweronClose()}}><a href="#feature">Features</a></button>
        <button  onClick={()=>{draweronClose()}}><a href="#contact">Contact</a></button>
        
        </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Modal isOpen={logisOpen} onClose={logonClose} >
        <ModalOverlay />
        <ModalContent  w='80%'>
          <ModalCloseButton border='3px solid #cadcfc' color='#47556e' />
          <ModalBody justifyContent={'center'} textAlign='center' py='2rem'>
            <Image w='200px' src={byeImage} m='auto' />
            <Button colorScheme={'red'} onClick={handleLogOut}>Sign Out</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Show>
  )
}

export default MobNavbar