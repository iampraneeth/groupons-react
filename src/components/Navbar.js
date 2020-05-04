import React from 'react'
import logo from '../images/logog.png'

const Navbar = () => {
    const navStyle={
        color:'rgb(229, 9, 20)'
    }
    return (
        <nav>
            <ul className="nav-links">
            <input type="image" src={logo} alt="Submit" height="42" width="42"/>
            <input type="text" placeholder=" Enter your  Search Here  " name="search" size='40' />

                     <li style={navStyle}>Home</li>
                    <li style={navStyle}>News!!</li>
                     <li style={navStyle}>Categories</li>
                    <li style={navStyle}>Whishlist</li>
                    <li style={navStyle}>AboutUs</li>
                    <li style={navStyle}>SignUp</li>
                    <li style={navStyle}>SignIn</li>

            </ul>
        </nav>
    )
}

export default Navbar