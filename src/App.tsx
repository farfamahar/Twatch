import { useState, useEffect } from 'react'
import './App.css'
import Webcam from "react-webcam";
import Chat from './components/Chat';
import AnimatedNumbers from "react-animated-numbers";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {

  const [num, setNum] = useState(12);

  //Should be used to grow numbers by a lot with animated component <AnimatedNumbers>
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setNum(prevCount => prevCount + (Math.random() > 0.5 ? Math.floor(Math.random() * (100 - 5 + 1) + 100) : Math.floor(Math.random() * (-100 - -5 + 1) + -100)));
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  interface Timer {
    hours: number;
    minutes: number;
    seconds: number;
  }

  const [timer, setTimer] = useState<Timer>({ hours: 0, minutes: 0, seconds: 0 });
  const [ticker, setTicker] = useState(0);

  //Timer
  useEffect(() => {
    const intervalId3 = setInterval(() => {
      setTimer(prevTimer => {
        const newTimer = { ...prevTimer };
        newTimer.seconds++;
        if (newTimer.seconds === 60) {
          newTimer.seconds = 0;
          newTimer.minutes++;
        }
        if (newTimer.minutes === 60) {
          newTimer.minutes = 0;
          newTimer.hours++;
        }
        return newTimer;
      });
    }, 1000);
    return () => clearInterval(intervalId3);
  }, []);

  //Slow audience number increases
  //TODO: Have audience number increases happen in phases (from small community to out of control numbers)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum(prevCount => prevCount + (Math.random() > 0.5 ? 1 : 0));
    }, Math.floor(Math.random() * (10000 - 500 + 1) + 500));
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='flex background'>
      <div className='webcam-container'>
      <Webcam 
      width={815}
      height={460}
      videoConstraints={videoConstraints}
      className="video"

      />
      <div className='stream-info'>
        <div className="user-avatar"></div>
        <div className='info-container'>
        <div className='stream-info-2'>
          <p className='stream-name'> Farfama <span> <svg type="color-fill-current" width="16px" height="16px" version="1.1" viewBox="0 0 16 16" x="0px" y="0px" className="badge"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 3.5L8 2L3.5 3.5L2 8L3.5 12.5L8 14L12.5 12.5L14 8L12.5 3.5ZM7.00008 11L11.5 6.5L10 5L7.00008 8L5.5 6.5L4 8L7.00008 11Z"></path></svg></span> </p>
          <p className='stream-title'> Watch me have an existential crisis!</p>
          <p className='stream-type'> <a  href=""> Just Chatting </a> </p>
          <div className='tag-container'>
            <p className='tag'> Talking </p>
            <p className='tag'> Fun </p>
            <p className='tag'> English </p>
            <p className='tag'> Reaction </p>
          </div>
        </div>
        <div className='stats-container'>
        <p> <svg type="color-text-accessible-red" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="audience-icon"><g><path fill-rule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"></path></g></svg> </p> 
          <p className='stream-audience animated-numbers'>
          {/* <AnimatedNumbers
          animateToNumber={num}
          includeComma
          // fontStyle={{ fontSize: 14 }}
          configs={[
            { mass: 1, tension: 230, friction: 60 },
          ]}
          ></AnimatedNumbers> */}
          {num}
        </p>
        <div className='stream-timer'>
      {timer.hours}:{timer.minutes}:{timer.seconds}
    </div>
      </div>
        </div>
        </div>
      </div>
        <div id="parent-container">
        <div id="chat-container">
          <div className='chat-header-container'>
      <div className='chat-header'>STREAM CHAT </div>
      </div>
          <Chat/>
        </div>
        <div className='chat-input-container'>
          <input />
      </div>
        </div>

    </div>
  )
}

export default App
