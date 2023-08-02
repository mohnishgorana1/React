import { useState } from "react";
import "./App.css";


function DigitalClock() {
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTIme ] = useState(time);

    setInterval(() => {
        time = new Date().toLocaleTimeString();
        setCurrentTIme(time);
    },1000)
  return (
    <>  
    <div className="digital-time">
        <p>Digital Clock</p>
        <h1  > {currentTime} </h1>
    </div>
        
    </>
  )
}

export default DigitalClock