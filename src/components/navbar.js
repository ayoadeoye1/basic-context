import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div style={{backgroundColor: 'pink'}}>
            <Link to="/" className="brand-logo">Logo</Link>
            <ul id="nav-mobile" style={{color:'tomato', alignSelf: 'center', display: 'flex', justifyContent: 'flex-end', }}>
                <li><Link to="sign-up">Sign-Up</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li><Link to="sign-in">Sign-In</Link></li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li><Link to="profile">Profile</Link></li>&nbsp;&nbsp;
            </ul>
        </div> 
    );
}
 
export default Navbar;