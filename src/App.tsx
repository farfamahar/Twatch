import { useState } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';


function App() {

  return (
    <div className='flex'>
      <Webcam 
      width={815}
      height={460}
      />
      <div id="parent-container">
      <div id="chat-container">
        <Chat/>
      </div>
      </div>
    </div>
  )
}

export default App
