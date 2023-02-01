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

  return (
    <div className='flex background'>
      <div className='sidebar'> 
        {/* <div> For You </div>
        <p> Name 1 </p>
        <p> Name 2 </p>
        <p> Name 3 </p>

        <div> RECOMMENDED CHANNELS</div> */}
      </div>
      <div className='webcam-container'>
      <Webcam 
      width={815}
      height={460}
      videoConstraints={videoConstraints}
      className="video"

      />
      <StreamInfo/>
      </div>
        <div id="parent-container">
        <div id="chat-container">
          <div className='chat-header-container'>
      <div className='chat-header'>STREAM CHAT </div>
      </div>
          <Chat/>
        </div>
        </div>
    </div>
  )
}

export default App
