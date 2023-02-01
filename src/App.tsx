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
     
      <div className='webcam-container'>
      <Webcam 
      width={815}
      height={460}
      videoConstraints={videoConstraints}
      className="video"
      />
      <StreamInfo/>
      </div>
      <Chat/>

    </div>
  )
}

export default App
