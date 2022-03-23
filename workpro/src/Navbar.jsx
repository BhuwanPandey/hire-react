import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbarcontainer">
        <div className="subcontainer">
            <NavLink exact activeClass="active" to="/task1" className='nav'>Task1</NavLink>
            <NavLink exact activeClass="active" to="/task2" className='nav'>Task2</NavLink>
            <NavLink exact activeClass="active" to="/task3" className='nav'>Task3</NavLink>
        </div>
    </div>
  )
}

export default Navbar