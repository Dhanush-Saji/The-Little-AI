
import React, { useState } from "react";
import "./ChatPage.css";
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import ChatBody from "../../components/ChatBody/ChatBody";
import { fetchResponse } from "../../API/Api";
import ChatInput from './../../components/ChatInput/ChatInput';
import {BsThreeDotsVertical} from 'react-icons/bs'
const ChatPage = () => {
  const [chat, setchat] = useState([])

  const mutation = useMutation({
    mutationFn: () => {
        return fetchResponse(chat);
    },
    onSuccess: (data) => {
        setchat((prev) => [
            ...prev,
            { sender: "ai", message: data.message.replace(/^\n\n/, "")}
,
        ]);
    }
});

  const sendMessage = async (message) => {
    await Promise.resolve(setchat((prev) => [...prev, message]));
    mutation.mutate();
  };
  const handleClearChat = () =>{
    setchat([])
  }
  console.log(process.env);

  return (
    <Flex flexDirection={'column'} bg={{base:"#fcc16e"}} w="100%" p='7rem 0rem' minH={{md:"100vh"}}>
      <Flex flexDirection={'column'} bg="#f6dfcf" w={{base:"95%",md:"70%",lg:"80%"}} borderRadius="1.5rem" p={{base:"0.8rem 0.8rem 0rem 0.8rem",md:"2rem 2rem 0rem 2rem"}} m='auto'>
        
            <ChatBody chat={chat} />
            <ChatInput clearChat={handleClearChat} sendMessage={sendMessage} loading={mutation.isLoading} />
      </Flex>
    </Flex>
  );
};

export default ChatPage;
