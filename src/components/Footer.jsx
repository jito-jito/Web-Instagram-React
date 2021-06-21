import React from 'react'
import messangerIcon from '../statics/images/header/messanger.png'
import homeIcon from '../statics/images/footer/home.svg'
import searchIcon from '../statics/images/footer/search.svg'
import plusIcon from '../statics/images/footer/plus.svg'
import heartIcon from '../statics/images/footer/heart.svg'
import profile from '../statics/images/footer/profile.png'



const Footer = () => {
    return (
        <>
        <footer className="Footer">
        <div className="Footer-container">.</div>
            <nav className="Footer-nav">
                <li className="Footer-home">
                    <a href="">
                        <img src={homeIcon} alt="" />
                    </a>
                </li>
                <li className="Footer-search">
                    <a href="">
                        <img src={searchIcon} alt="" />
                    </a>
                </li>
                <li className="Footer-plus">
                    <a href="">
                        <img src={plusIcon} alt="" />
                    </a>
                </li>
                <li className="Footer-heart">
                    <a href="">
                        <img src={heartIcon} alt="" />
                    </a>
                </li>
                <li className="Footer-profile">
                    <a href="">
                        <img src={profile} alt="" />
                    </a>
                </li>
            </nav>
        </footer>
        </>

    )
}


export default Footer