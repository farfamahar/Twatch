import { useState } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';


function App() {

  return (
    <div className='flex'>
      <Webcam />
      <Chat/>
    </div>
  )
}

export default App
