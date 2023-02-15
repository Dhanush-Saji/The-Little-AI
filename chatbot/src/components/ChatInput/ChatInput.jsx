import React, { useState } from 'react'
import { BeatLoader } from 'react-spinners';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
const ChatInput = ({sendMessage,loading}) => {
  const [inputValue, setinputValue] = useState("")
  const handleSubmit = () =>{
    if(inputValue === '') return
    sendMessage({sender:'user', message:inputValue})
    setinputValue('')
  }
  return (
    <Flex alignItems="center" gap="1rem" py='2rem'>
           <Textarea value={inputValue} onKeyDown={(e)=>{
            e.keyCode == 13 && e.shiftKey == false && handleSubmit()
           }}
           css={{ minHeight: "0" , height: "40px"}}
          onChange={(e)=>{setinputValue(e.target.value)}}
            placeholder="large size"
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
        </Flex>
  )
}

export default ChatInput