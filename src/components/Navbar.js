import React from 'react'
import logo from '../images/logog.png'
import { Link } from 'react-router-dom'

import Cart from '../images/cart.png'
const Navbar = () => {
    const navStyle={
        color:'rgb(229, 9, 20)'
    }
    return (
        <nav>
                       <Link to="/" style={{textAlign: 'start'}}>

                        <li><img className="logo" src={logo} /> </li>

                        </Link>
                      <li><input type="text" placeholder=" Enter your  Search Here  " name="search" size='20' /></li>

            <ul className="nav-links">
            
                    
                     <li style={navStyle}><i>Categories</i></li>
                    
                     <Link to="/news" style={navStyle} >
                   <li><i>News!!</i></li>
                </Link>
                     
                    <li style={navStyle}><i>Whishlist</i></li>
                    <Link to="/aboutus" style={navStyle} >
                   <li><i>AboutUs</i></li>
                </Link>



                    <Link to="/signup" style={navStyle} >
                   <li><i>SignUp</i></li>
                </Link>
                <Link to="/signin" style={navStyle} >
                    <li><i>SignIn</i></li>
                </Link>

            </ul>
        </nav>
    )
}

export default Navbar