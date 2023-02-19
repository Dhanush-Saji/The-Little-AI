import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BiLogInCircle } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import './Navbar.css'
import { Button, Flex, Hide, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import {HashLink} from 'react-router-hash-link'
import {useNavigate} from 'react-router-dom'
import {auth,provider} from '../../Firebase/firebase'
import {signInWithPopup,signOut} from 'firebase/auth'
import byeImage from '../../assets/byeRobot.png'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const [user, setuser] = useState('')
  const handleSigninOut = () =>{
    if(user){
      onOpen()
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
    onClose()
  }
  useEffect(()=>{
    setuser(localStorage.getItem('user'))
  })
  return (
    <>
    <Hide below='md'>
      <Flex className="navbarParent" position={'fixed'} bg='white' zIndex={'5'} boxShadow='rgba(149, 157, 165, 0.2) 0px 8px 24px;'>
        <Flex alignItems={"center"} gap="1rem" cursor={'pointer'} onClick={()=>{
              navigate('/')
            }}>
          <Image boxSize="60px" objectFit="contain" src={logo} alt="logo" />
          <Text fontSize="xl" as='b' color='var(--color-dark-black)'>The Little AI</Text>
        </Flex>
        <Flex marginLeft='3rem' color='var(--color-light-black)' gap='2rem' className="navbarLinks" alignItems={'center'}>
        <button><HashLink smooth to="#feature">Features</HashLink></button>
        <RxDotFilled color="var(--color-light-brown)" />
        <button><HashLink smooth to="#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Contact</HashLink></button>
        </Flex>
        <Button  size='lg' onClick={handleSigninOut}
        _hover={{ backgroundColor: '#e29a43',color:'#f5f1ee' }}
        
          leftIcon={user?null:<BiLogInCircle />}
          variant="solid"
          marginLeft="auto"
          backgroundColor="var(--color-light-brown)"
          color="var(--color-dark-brown)"
        >{
          user?user:'Login'
        }
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody justifyContent={'center'} textAlign='center' py='2rem'>
            <Image w='200px' src={byeImage} m='auto' />
            <Button colorScheme={'red'} onClick={handleLogOut}>Sign Out</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Hide>
    </>
  );
};

export default Navbar;
