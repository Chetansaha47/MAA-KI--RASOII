import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>We already know that the more people cook at home, the healthier their diet, the fewer calories they consume, and the less likely they are to be obese or develop type 2 diabetes. A growing body of scientific evidence supports teaching patients how to cook meals at home as an effective medical intervention for improving diet quality, weight loss, and diabetes prevention.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9932371436</li>
                <li>contact@MAAKIRASOI.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright  2023-2027 FIEM BCA- CHETAN , PRIYA , SOUHARDYA , SUPRIYO , DONA </p>
    </div>
  )
}

export default Footer
