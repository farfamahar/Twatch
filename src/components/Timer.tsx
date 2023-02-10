import React,{useEffect, useState} from "react";
export default function Timer(){

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

    return (

        <div className='stream-timer'>
            {timer.hours}:{timer.minutes}:{timer.seconds}
        </div>

    )
}