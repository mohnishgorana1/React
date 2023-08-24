import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './main.css'

import {BrowserRouter, Routes, Route , NavLink, Outlet} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/WebDevelopment" element={<WebDevelopment/>} />
        <Route path="/courses/ReactCourse" element={<ReactCourse/>} />
        <Route path="/courses/NodeJS" element={<NodeJS/>} />       
      </Routes>
    </BrowserRouter>
)

function NavigationButtons(){
  return(
    <>
      <div className="nav-btns">

        <NavLink className="nav-btns" to={`/`} >
         <button className='btn' id='courses'>Home</button>
        </NavLink>

        <NavLink className="nav-btns" to={`/courses`}>
          <button className='btn'  id='courses'>Courses</button>
        </NavLink>

        <NavLink className="nav-btns" to={`/bundles`}>
          <button className='btn'  id='bundles'>Bundles</button>
        </NavLink>
        
        <NavLink className="nav-btns" to={`/docs`} >
          <button className='btn'  id='docs'>Docs</button>
        </NavLink>
        
      </div>
    </>
  )
}


function Home(){
  return(
    <>
      <div className='home-page'>
        <NavigationButtons/>
        <h1 className='heading'>You are the Home Page</h1>
        <p>You Can Check Out Our Courses Bundles Docs</p>
      </div>
    </>
  )
}

function Courses(){
  return(
    <>
      <div className='courses-page'>
        <NavigationButtons/>
        <h1 className='heading'>You are the Courses Page</h1>
        <ul className='course-lists'>

          <NavLink className="course-link" to= {`/courses/WebDevelopment`}>
            <li>Web Development</li> 
          </NavLink>
          <NavLink className="course-link" to= {`/courses/ReactCourse`}>
            <li>React</li>
          </NavLink><NavLink className="course-link" to= {`/courses/NodeJs`}>
            <li>NodeJS </li>       
          </NavLink>

        </ul>
      </div>
    </>
  )
}

function WebDevelopment(){
  return(
    <>
      <div className='web-dev-wrapper'>
        <NavigationButtons/>
        <div className="course_details">
        <h2>Welcome to Full Stack Web Development Course </h2>
        <h3>MERN Stack</h3>
        <h4>HTML | CSS | TAILWIND | JAVASCRIPT | NODEJS | EXPRESS JS |  MONGODB | MONGOOSE | REACT  </h4>
        </div>
      </div>
    </>
  )
}

function ReactCourse(){
  return(
    <>
      
      <div className='react-wrapper'>
       <NavigationButtons/> 
       <div className="course_details">
        <h2>Welcome to React Course </h2>
        <h4>HTML |CSS | JAVASCRIPT | NODEJS | REACT  </h4>
       </div>

      </div>
 

    </>
  )
}
function NodeJS(){
  return(
    <>

      <div className='nodejs-wrapper'>
        <NavigationButtons/>
        <div className="course_details">
          <h2>Welcome to NodeJS Backend Course </h2>
          <h3>Back-End Course</h3>
          <h4>JAVASCRIPT | NODEJS | EXPRESS JS |  MONGODB | MONGOOSE | Authntication | Authorization | Tokenization </h4>
        </div>
      </div>

  

    </>
  )
}



