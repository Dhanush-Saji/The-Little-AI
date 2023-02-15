import React, { useState } from "react";
import "./ChatPage.css";
import { BeatLoader } from 'react-spinners';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Hide,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "react-query";
import chatImage from "../../assets/chatImage.png";
import ChatBody from "../../components/ChatBody/ChatBody";
import { fetchResponse } from "../../API/Api";
import ChatInput from './../../components/ChatInput/ChatInput';
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
  return (
    <Flex flexDirection={'column'} bg="#fcc16e" w="100%" h="100vh" pt="2rem" className="orangeParent"  position='relative'>
      <Hide below='md'>
          <Image  position='absolute' top='150px' left='25px' zIndex='2'
            boxSize={{base:"10rem",md:"20rem"}}
            // objectFit="cover"
            src={chatImage}
            alt="Chat Image"
            className="peekImage"
          />
          </Hide>
      <Flex flexDirection={'column'} bg="#f6dfcf" w={{base:"90%",md:"70%",lg:"80%"}} borderRadius="1.5rem" p="2rem 2rem 0rem 2rem"  className="pinkBox" overflow='auto'>
            <ChatBody chat={chat} />
            <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </Flex>
    </Flex>
  );
};

export default ChatPage;
