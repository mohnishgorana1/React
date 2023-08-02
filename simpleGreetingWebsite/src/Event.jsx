import { useState } from "react";
import "./App.css";


function Event() {
    
    const grey = "#121212";
    const [bg, setBg] = useState(grey);

    const [name, setName] = useState("Click ME")

 

    function bgChange(){  
        let newBg = "#34495e";
        setBg(newBg);

        let newName = "Aiyoo";
        setName(newName)   ;

        
    }
    function revertChange(){
        let newBg = "#121212";
        setBg(newBg);
        let newName = "Click Me";
        setName(newName)   ;

     
        
    }
 
    return (
        <>
            <div className="event" style={ {backgroundColor: bg}} onDoubleClick={ revertChange }>
                <button className="event-btn" onClick={ bgChange }>
                    {name}
                </button>
             
                
            </div>
        </>
        
    )
}

export default Event