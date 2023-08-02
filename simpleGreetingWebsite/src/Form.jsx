import React, { useState } from 'react'
function Form() {
    const [name, setName] = useState("")

    const [newName, setNewName] = useState();

    const [Password, SetPassword] = useState("");
    const [newPassword, SetNewPassword] = useState("")
    
    const inputEvent = (eventObject) => {
        setName(eventObject.target.value)
    }
    function onSubmit(e){
        e.preventDefault();
        setNewName(name)
        SetNewPassword(Password);
    }

    const inputPasswordEvent = (eventObject) => {
        SetPassword(eventObject.target.value)

    }
    

    
  return (
    <>
        <div className="form-container">
            <h1> Hello {newName} </h1>

            <form action="" onSubmit = {onSubmit} className='form'>

                <input className="input" type="text" placeholder="Enter Your Name" defaultValue="" onChange={inputEvent}></input>

                <input className="input" type="Password"  placeholder='Enter Password' onChange={inputPasswordEvent}/>
                        
                <button className="submit-btn" type='submit' >Submit</button>

            </form>

           { console.log(Password)}
        </div>
    </>
  )
}

export default Form
