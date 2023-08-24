import React from 'react'
import { Link , Outlet, useParams, NavLink} from 'react-router-dom'

function Learn() {
  return (
    <>
        <h1>Learn</h1>
        <h4>All courses are listed here</h4>

        <Link to='/learn/courses' className='btn btn-success'>Courses</Link>
        <Link to='/learn/bundles' className='btn btn-primary'>Bundle</Link>

        <Outlet />

    </>
  )
}
function Courses(){
    const courseList = ["React" , "Angular", "Flutter" , "NodeJs"]
    const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];

    return (
        <>
            <h2>Courses are listed here</h2>
            <ul>
                <li>Web Dev</li>
                <li>Android</li>
                <li>C++</li>
            </ul>
            <p>More Test</p>
            <NavLink
            style={ ({isActive}) => {
                return {
                    backgroundColor: isActive ? "pink"  : "yellow"
                }
            }}
            to = {`/learn/courses/${randomCourseName}`}>
                {randomCourseName}
            </NavLink>
            <NavLink to = {`/learn/courses/test`}>
                test
            </NavLink>
            <Outlet />
        </>
    )
}
function Bundle(){
    return (
        <>
            <h2>Bundle List</h2>
            <h4>Bundle Cards</h4>
        </>
    )
}
function CourseID(){
    const {courseid} = useParams()
    return (
        <>
            <h2>URL PARAMS is : {courseid}</h2>
        
        </>
    )
}

export {Learn , Courses, Bundle, CourseID}