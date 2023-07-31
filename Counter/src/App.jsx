import { useState } from 'react'

import './App.css'

function App() {
  let  [count, counter] = useState(0)
  return (
    <>
      <div className="container">
        <h1>Count: {count}</h1>

        <div className="btns">
          <button onClick={ () => counter(count+1) } >Increment</button>
          <button onClick={ () => counter(count-1) } >Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
