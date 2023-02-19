import React, { useState } from 'react'
import { BeatLoader } from 'react-spinners';
import {
  Button,
  Flex,
  Textarea,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import {BsThreeDotsVertical} from 'react-icons/bs'
const ChatInput = ({sendMessage,loading,clearChat}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setinputValue] = useState("")
  const handleSubmit = () =>{
    if(inputValue === '') return
    sendMessage({sender:'user', message:inputValue})
    setinputValue('')
  }
  return (
    <Flex alignItems="center" gap={{base:"0.5rem",md:'1rem'}} py='2rem'>
           <Textarea value={inputValue} onKeyDown={(e)=>{
            e.keyCode == 13 && e.shiftKey == false && handleSubmit()
           }}
           css={{ minHeight: "0" , height: "40px"}}
          onChange={(e)=>{setinputValue(e.target.value)}}
            placeholder="Enter here.."
            // size="5px"
            bg="white"
            borderRadius="1rem"
            boxShadow={"var(--shadow-elevation-medium)"}
            border="none"
      />
          <Button
            isLoading={loading}
            spinner={<BeatLoader size={8} color='white' />}
            color="white"
            _hover={{ bg: "#db7c46" }}
            bg="#fe8f50"
            size="md"
            padding=" 0.5rem 2rem"
            borderRadius="1.5rem"
            boxShadow={"var(--shadow-elevation-high)"}
            onClick={handleSubmit}
          >
            Ask me
          </Button>
          <Popover placement="top-start" isOpen={isOpen} onClose={onClose}>
  <PopoverTrigger>
    <Button size={'sm'} onClick={onOpen}><BsThreeDotsVertical /></Button>
  </PopoverTrigger>
  <PopoverContent w='100%'>
    <PopoverArrow />
    {/* <PopoverCloseButton /> */}
    <PopoverBody>
      <Button colorScheme={'red'}  onClick={()=>{
        clearChat()
        onClose()
      }}>Clear chat</Button>
    </PopoverBody>
  </PopoverContent>
</Popover>
        </Flex>
  )
}

export default ChatInput