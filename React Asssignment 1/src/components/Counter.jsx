import { useState } from 'react'

function Counter() {
   
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

  return (
    <>  
        <div>
            <div>
                Count X :  {x}
            </div>
            <button onClick={ () => setX(x+1)}>Inc</button>
            <button onClick={ () => setX(x-1)}>Dec</button>
            <br />
        </div>
        <div>
        <br />

            <div>
                Count Y : {y}
            </div>
            <button onClick={ () => setX(y+1)}>Inc</button>
            <button onClick={ () => setX(y-1)}>Dec</button>
        </div>

    </>
  )
}

function OddEven(){
    const [k, setK] = useState(0)
    return(
        <>
            Count K : {k}  {(k % 2 == 0) ? "Even" : "Odd"}

            <button onClick={ () => setK(k+1)}>Inc</button>
            <button onClick={ () => setK(k-1)}>Dec</button>
        </>
    )
}

function ToDoList(){
    const [todos, setTodos] = useState(['todo1', 'todo2'])
    return(
        <ul>
            {todos.map((todo) => <li> {todo} </li>)}

            <button onClick={ () => setTodos([...todos, 'anotherOne'])}>CLick</button>
        </ul>
    )
}

export  {
    Counter,
    OddEven,
    ToDoList
}