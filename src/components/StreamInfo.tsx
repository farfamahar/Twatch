import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
// import AnimatedNumbers from "react-animated-numbers";
import Tags from './Tags';
import StreamUser from './StreamUser';
import StreamName from './StreamName';
import StreamStats from './StreamStats';
import StreamType from './StreamType';
import UserAvatar from './UserAvatar';


interface Props{
  streamName:String
  streamUser:String
}

const StreamInfo: React.FC<Props> = ({streamName, streamUser}) => {

  //Should be used to grow numbers by a lot with animated component <AnimatedNumbers>
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setNum(prevCount => prevCount + (Math.random() > 0.5 ? Math.floor(Math.random() * (100 - 5 + 1) + 100) : Math.floor(Math.random() * (-100 - -5 + 1) + -100)));
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

    return (
        <div className='stream-info'>
            <UserAvatar/>
            <div className='info-container'>
                <div className='stream-info-2'>
                    <StreamUser streamUser={streamUser}/>
                    <StreamName streamName={streamName}/>
                    <StreamType/>
                    <Tags/>
                </div>
                <StreamStats/>
            </div>
        </div>
    )
}

export default StreamInfo;
