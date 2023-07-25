import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyH from './components/MyH'
import Card from './components/card'



function App() {
 
  // const [variable, howToUpdateThisVariable] =useState()
  let [details, setDetails] = useState("Mohnish Gorana")
  const handleClick = () => {
    details = setDetails("Hello I'm Mohnish");
  }

  return (
    <>
      <h1>{details}</h1>
      <h1>Test</h1>
      <button onClick={handleClick}>Click Me </button>
      <h1>Run</h1>
      <MyH />
      <Card name="Mohnish" email="M@pw" />
      <Card name="Sachin" email="S@pw" />


    </>
  )
}

export default App
