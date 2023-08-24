import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Post from './post.jsx'
import Home from './Home.jsx'
import {Learn,Courses, Bundle , CourseID} from './Learn.jsx'
import './index.css'

import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <Post /> */}
  //   <Home />
  // </React.StrictMode>,

  <Router>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/myapps' element= {<Navigate replace to="/learn" />} />

      <Route path='/learn' element= {<Learn/>} >
        <Route path='courses' element={<Courses/>} >
            <Route path=":courseid" element={<CourseID />} />
        </Route>
        <Route path='bundles' element={<Bundle/>} />

      </Route>

    </Routes>
  </Router>

)
