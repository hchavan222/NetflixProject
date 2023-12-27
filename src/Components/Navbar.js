import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import "../App.css"


function Navbar() {
  return (
    <div style={{display:"flex" }}>
    <img style={{height:"70px" ,width:"100px"}}src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" alt="netfloix"/>
        <BrowserRouter className="link">
            <Link className="link">TV</Link>
            <Link className="link">Movies</Link>
            <Link className="link">Recently added</Link>
            <Link className="link">Mylist</Link>

        </BrowserRouter>
    </div>
  )
}

export default Navbar