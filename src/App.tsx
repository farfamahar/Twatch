import { useState, useEffect} from 'react'
import Webcam from "react-webcam";
import Chat from './components/Chat';
import StreamInfo from "./components/StreamInfo";
import AOS from 'aos';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import SetupForm from './components/SetupForm';
import 'aos/dist/aos.css';
import './App.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
      easing: 'ease-out-cubic',      
    });
  });

  const [streamName,setStreamName] = useState("");
  const [streamUser,setStreamUser] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      {!isToggled &&
      <SetupForm
        setStreamName={setStreamName}
        setStreamUser={setStreamUser}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      }
    {isToggled && 
  <> 
    <NavBar/>
      <div className='flex background'>
        <div className='webcam-container'>
          <Webcam 
          width={815}
          height={460}
          videoConstraints={videoConstraints}
          className="video"
          />
          <StreamInfo 
            streamName={streamName}
            streamUser={streamUser}  
          />
        </div>
      <Chat/>
      </div> 
    </>}
    </>
  )
}

export default App
