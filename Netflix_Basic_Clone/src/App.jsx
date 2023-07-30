import './App.css'

import Card from './components/Card.jsx'
import sdata from './sdata.js'
console.log(sdata[0].sname);



function App() {

  return (
    <>
      <h1>Netflix Top 5 Movies</h1>    
      {sdata.map(function nCard(value){
        console.log(value);
        return (
          <Card 
              imgsrc = {value.imgscr}
              category_name = {value.title}
              card_title = {value.sname}
              watch_link = {value.links}
            />
        )
      })}
      
    </>
  )
}

export default App
