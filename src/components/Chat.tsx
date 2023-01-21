import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import {chatMessages} from '../assets/data';


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ name: string, message: string, color: string }[]>([]);
  let messageNumber = 1;
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [lastMessage, setLastMessage] = useState(0);
  const scrollToBottom = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  console.log(chatMessages);

  useLayoutEffect(() => {
    const addMessage = () => {
      const name = generateRandomName();
      var randomProperty = function (chatMessages: { [key: string]: any }): any {
        var keys = Object.keys(chatMessages);
        return chatMessages[keys[ keys.length * Math.random() << 0]];
    };
    let item = randomProperty(chatMessages);
    console.log(randomProperty);
      const message = item[Math.floor(Math.random() * item.length)]
      const color = generateRandomColor();
      setMessages((prevMessages) => [...prevMessages, { name, message, color }]);
      setLastMessage(messageNumber);
      setTimeout(addMessage, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    }
    addMessage();
  }, []);

  useLayoutEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight - chatContainerRef.current.clientHeight;
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div className="fake-twitch-chat" style={{ }} ref={chatContainerRef}>
      {messages.map((message, index) => (
        <div key={index} style={{ overflow: 'auto', display: 'flex', flexDirection: 'column'}}>
          <div className="chat-padding chat-font">
           <strong style={{ color : message.color }}>{message.name}: </strong>
          <span>{message.message}</span>
          </div>
          <div ref={chatContainerRef} />
        </div>
      ))}
    </div>
  );
};

const generateRandomName = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let name = '';
  for (let i = 0; i < 8; i++) {
    name += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return name;
};

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export default Chat;
