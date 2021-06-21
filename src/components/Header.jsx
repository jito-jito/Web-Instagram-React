import React from 'react'
import messangerIcon from '../statics/images/header/messanger.png'
import igtvIcon from '../statics/images/header/igtv.svg'
import cameraIcon from '../statics/images/header/camera.svg'
import instagramLogo from '../statics/images/header/InstagramLogo.png'



const Header = () => {
    return (
        <header className="Header">
            <nav className="Header-nav">
                <li className="Header-camera">
                    <a href="">
                        <img src={cameraIcon} alt="" />
                    </a>
                </li>
                <li className="Header-logo">
                    <a href="">
                        <img src={instagramLogo} alt="" />
                    </a>
                </li>
                <li className="Header-igtv">
                    <a href="">
                        <img src={igtvIcon} alt="" />
                    </a>
                </li>
                <li className="Header-messanger">
                    <a href="">
                        <img src={messangerIcon} alt="" />
                    </a>
                </li>
            </nav>
        </header>

    )
}


export default Header