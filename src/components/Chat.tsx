import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ name: string, message: string, color: string }[]>([]);
  let messageNumber = 1;
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [lastMessage, setLastMessage] = useState(0);
  const scrollToBottom = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      const name = generateRandomName();
      const message = `Random message ${messageNumber++}`;
      const color = generateRandomColor();
      setMessages(prevMessages => [
        ...prevMessages,
        { name, message, color },
      ]);
      setLastMessage(messageNumber);
    }, 1000);

    return () => clearInterval(intervalId);
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
