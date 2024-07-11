import React from 'react'
import '../Style/navbar.css'
import moya from '../Images/moyLog.png'
import menu from '../Images/hamburguer.png'
import facebook from '../Images/facebookwhite.png'
import instagram from '../Images/instawhite.png'
import linkedin from '../Images/linkedinwhite.png'
import pinterest from '../Images/pinterestwhite.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-content'>
            <div className='navbar-image'>
                <img src={moya} alt="moya"/>
            </div>
            
            <label htmlFor="menu_" className='navbar-menu'>
                <p>MENU</p>
                <img src={menu} alt="moya"/>
            </label>
            <input type='checkbox' id="menu_" style={{display: "none"}}/>
            <div className='menu-content'>
                <label htmlFor="menu_" className='menu-closed'>
                    <p>CLOSE</p>
                    <span>X</span>
                </label>
                <div className='menu-items'>
                    <p>About</p>
                    <p>Expertise</p>
                    <p>Contact</p>
                    <p>News</p>
                </div>
                <div className='menu-icons'>
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={pinterest} alt="pinterest"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar