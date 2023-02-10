import React,{useEffect, useState} from "react";

export default function AudienceCount(){

    const [audienceNumber, setAudienceNumber] = useState(185);


    //Slow audience number increases
    //TODO: Have audience number increases happen in phases (from small community to out of control numbers)
    useEffect(() => {
        const intervalId = setInterval(() => {
          setAudienceNumber(prevCount => prevCount + Math.floor(Math.random() > 0.5 ? (Math.random() * (3 - 0 + 1) + 0) : 0));
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
        return () => clearInterval(intervalId);
      }, []);

    return (
        <p className='stream-audience animated-numbers'>
            {/* <AnimatedNumbers
                animateToNumber={num}
                includeComma
                fontStyle={{ fontSize: 14 }}
                configs={[
                    { mass: 1, tension: 230, friction: 60 },
                    ]}
            ></AnimatedNumbers> */}
            {audienceNumber}
        </p>
    )

}