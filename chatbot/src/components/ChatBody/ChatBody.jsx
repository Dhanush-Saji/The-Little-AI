import { VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import "./ChatBody.css";
import autoAnimate from "@formkit/auto-animate";
const ChatBody = ({ chat }) => {
  const parent = useRef(null)
  const bottomRef = useRef(null)
  useEffect(()=>{
    parent.current && autoAnimate(parent.current)
  },[parent])
  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behaviour:'smooth'})
  },[chat])
  return (
    <VStack h={{base:"400px",md:"600px",lg:"400px"}} w="100%" className="chatBodyDiv" gap="2" ref={parent}>
      {chat.map((item, index) => {
        return (
          <div className={item.sender !== 'ai'?"MsgDiv":"aiStyle"} key={index}>
            <pre>
              <span>{item.message}</span>
            </pre>
          </div>
        );
      })}
      <div ref={bottomRef} className="bottomScroll"></div>
    </VStack>
  );
};

export default ChatBody;
