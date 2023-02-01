import { useState, useEffect } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';
import StreamInfo from "./components/StreamInfo";
import AnimatedNumbers from "react-animated-numbers";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {

  const [streamName,setStreamName] = useState("Stream Name");
  const [streamUser,setStreamUser] = useState("Name");

  const handleStreamNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamName(event.target.value);
  };

  const handleStreamUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamUser(event.target.value);
  };

  return (
    <div className='flex background'>
      <div>
        <label>Stream Title:</label>
        <input type="text" value={streamName} onChange={handleStreamNameChange} />
      </div>
      <div>
        <label>Streamer Name:</label>
        <input type="text" value={streamUser} onChange={handleStreamUserChange} />
      </div>
      <div className='webcam-container'>
        <Webcam 
        width={815}
        height={460}
        videoConstraints={videoConstraints}
        className="video"
        />
        <StreamInfo 
          streamName={streamName}
          streamUser={streamUser}  
        />
      </div>
    <Chat/>
    </div>
  )
}

export default App
