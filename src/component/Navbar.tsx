import React from 'react'
import {Link} from 'react-router-dom'
import './css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <h1>OU HOSPITAL</h1>
        <div className="links">
            <Link to='/' className='each-link'><button className='nav-but'>All patient Info</button></Link>
            <Link to='/add' className='each-link'><button className='nav-but'>Add new patient</button></Link>

        </div>
    </nav>
  )
}

export default Navbar