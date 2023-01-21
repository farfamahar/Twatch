import React, { useState, useEffect } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessages(prevMessages => [
        `Random message ${prevMessages.length + 1}`,
        ...prevMessages,
      ]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fake-twitch-chat" style={{ overflow: 'auto', height: '200px'}}>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default Chat;