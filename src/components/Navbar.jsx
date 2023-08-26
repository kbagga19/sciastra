import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo_section'>
                <img className='logo' src="https://www.sciastra.com/Assets/Images/newsciastra.jpg" alt="" />
            </div>
            <div className='center_section'>
                <ul>
                    <li>HOME</li>
                    <li>COURSES</li>
                    <li>SELECTIONS</li>
                    <li>BLOGS</li>
                    <li>MATERIALS</li>
                    <li>TEAM</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className='login_btn'>
                <button className='login'>LOGIN</button>
            </div>
        </div>
    )
}

export default Navbar;