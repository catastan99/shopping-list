import React from 'react'
import logo from '../assets/images/logo.png'
import '../style/Header.css';

function Header(){
    return(
        <div className="Header">
            <img src={logo} alt="logo"/>
            <p>listă de cumpărături</p>
        </div>
    )
}
export default Header;