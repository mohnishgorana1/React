import React from 'react'

import './App.css'
import SlotM  from './SlotMachine'


function App() {
  return (
    <>
      <h1 className='heading-style'>
         🎰 Welcome to {" "} <span style = { { fontWeight: 'bold'} } >Slot Machine Game</span> 🎰 
      </h1>
      <div className='slot-machine'>
          <SlotM x='😊' y='🤣' z='😶' />
          <SlotM x='🤣' y='🤣' z='🤣' />
          <SlotM x='🤣' y='🤣' z='😶' />
          
      </div>

     

    </>
  )
}

export default App
