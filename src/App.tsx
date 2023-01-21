import { useState } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {

  return (
    <div className='flex'>
      <div>
      <Webcam 
      width={815}
      height={460}
      videoConstraints={videoConstraints}
      className="video"

      />
      <h1 className='stream-title'> stream title</h1>
      </div>
      <div id="parent-container">
      <div id="chat-container">
        <Chat/>
      </div>
      </div>
    </div>
  )
}

export default App
