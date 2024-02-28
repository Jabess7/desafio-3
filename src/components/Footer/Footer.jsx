import React from 'react'
import face from "../../assets/face.svg"
import insta from "../../assets/insta.svg"
import link from "../../assets/link.svg"
import tw from "../../assets/tw.svg"
import Style from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={Style.footerContainer} id='contato'>
        <div>
            <img src={face} alt="Facebook" />
            <img src={insta} alt="Instagram" />
            <img src={tw} alt="twitter" />
            <img src={link} alt="linkedin" />
        </div>
        <div>
        <p>Copyright ©2024 All rights reserved</p> 
        </div>

    </div>
  )
}

export default Footer