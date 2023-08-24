import React from 'react';

import { useState, useEffect } from 'react';


function Post() {
    const [resourceType, setResourseType ] = useState('posts')
    
    console.log("render");

    useEffect(()=>{
    console.log("Resource Type Changes");
    }, [resourceType]) // andar wala code tabhi chalega jab array me jo h vo change hoga
  return (
    <>
        <div className="posts">
            <button onClick={() => setResourseType("posts")} id="posts">Posts</button>
            <button onClick={() => setResourseType("users")} id="users">Users</button>
            <button onClick={() => setResourseType("comments")} id="comments">Comments</button>
        </div>
        <h1 id="resoursce_type">{resourceType}</h1>
    </>
  )
}

export default Post