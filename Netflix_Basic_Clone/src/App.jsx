import './App.css'

import Card from './Components/Card.jsx'
import sdata from './sdata.js'
import Header from './Components/Header';
console.log(sdata[0].sname);




function App() {

  return (
    <>  
      {
        sdata.map( (value) => {
          console.log(value);
          return (
            <Card 
                imgsrc = {value.imgscr}
                category_name = {value.title}
                card_title = {value.sname}
                watch_link = {value.links}
              />
          )
        })
      }
      
    </>
  )
}

export default App
