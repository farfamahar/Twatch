import React,{useState} from "react";
import Logo from "./Logo";

interface Props{
    setStreamName: Function
    setStreamUser: Function
    isToggled: boolean
    setIsToggled: Function
  }


  const SetUpForm: React.FC<Props> = ({setStreamName, setStreamUser, isToggled, setIsToggled}) => {

    return (
        <div className='center-div'>
            <Logo/>
            <div className='form__group field'>
                <input className='form__field' type="text" onChange={(event)=> setStreamName(event.target.value)} />
                <label id="title" placeholder="Stream Title" htmlFor="title" className='form__label' >Stream Title:</label>
            </div>
        <div className='form__group field'>
          <input  className='form__field' type="text" onChange={(event)=> setStreamUser(event.target.value)} />
          <label id="name" htmlFor="name" className='form__label'>Streamer Name:</label>
        </div>
        <button className="start-button" role="button" onClick={() => setIsToggled(!isToggled)}  > <span className="text">Start Stream</span> </button>
        </div>
    )
    }

export default SetUpForm