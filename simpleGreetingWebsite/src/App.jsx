import "./App.css";
import { useState } from "react";
import DigitalClock from "./DigitalClock";
import Event from "./Event";
import Form from "./form";
import useEffects1 from "./useEffects1";

function App() {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  let greeting = "";

  const cssStyle = {};

  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "blue";
  }
  // 1 - 24 : 12 - 6 : 7 - 12 : 13 - 18 : 19 -24

  return (
    <>
      <div className="app">
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>

        <Time />

        <DigitalClock />

        <Event />

        <Form />

        <useEffects1 />
      </div>
      
    </>
  );
}
function Time() {
  let newtime = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTIme] = useState(newtime);

  // const updateTime = () => {
  //   newtime = new Date().toLocaleTimeString();
  //   setCurrentTIme(newtime);
  // };

  return (
    <div className="timing">
      <h1 className="time"> {currentTime} </h1>
      <button className="time-btn" onClick={() => {
        newtime = new Date().toLocaleTimeString();
        setCurrentTIme(newtime);
      }} > {" "} Get Time </button>
    </div>
  );
}

export default App;
