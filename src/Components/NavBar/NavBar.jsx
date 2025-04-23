import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <ul>            
            <Link to={"/"} className='item'>Home</Link>
            <Link to={"/filter/male"} className='item'>Masculino</Link>            
            <Link to={"/filter/female"} className='item'>Femenino</Link>            
            <Link to={"acercade"} className='item'>Acerca de</Link>            
        </ul>
    </nav>
  )
}

export default NavBar