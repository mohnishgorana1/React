import React from 'react'

function Card({name, email}) {
  // console.log(props);
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Photo:</h1>
        <h1>Contact:</h1>
    </div>
  )
}

export default Card