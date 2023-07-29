
import './App.css'
import Person from './components/Person.jsx'
import Button from './components/Button.jsx'
import Header from './components/Header'
import List from './components/List'
function App() {
  return (
    <>
      
      <div>
        <h1>COMPONENTS</h1>
      </div>

      <h1>..............................</h1>
      <h3>Person Component</h3>
      <Person name="Mohnish Gorana" age="22" />
      <h1>..............................</h1>

      <h3>Button Component</h3>
      <Button text="Click Me" onClick={() => console.log("I am Text")} />
      <h1>..............................</h1>

      <h3>Header Component</h3>
      <Header title="Hey there, title here!" />
      <h1>..............................</h1>

      <h3>List Component</h3>
      <List items={["Hey", "Mohnish" ,"Gorana" , "List", "Here"]}/>
      <h1>..............................</h1>



    </>  
    
  )
}

export default App
