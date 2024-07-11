import React from 'react'
import '../Style/footer.css'
import facebook from '../Images/faceBlack.png'
import instagram from '../Images/instaBlack.png'
import linkedin from '../Images/linkeBlack.png'
import pinterest from '../Images/pinteBlack.png'
import moya from '../Images/logoMoyaReco.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='footer-logo'>
                <img src={moya} alt="logo"/>
                <p>1308 19th St NW I Washington, D.C. 20036 I 202.816.6692</p>
            </div>
            <div className='footer-social'>
                <div className='footer-social-icons'> 
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={pinterest} alt="pinterest"/>
                </div>
                <div className='footer-social-address'>
                    <p>MOYA Design Partners, LLC. © 2024, All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer