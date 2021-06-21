import React from 'react'
import profileIcon from '../statics/images/post/Oval.png'
import moreIcon from '../statics/images/post/MoreIcon.svg'
import oficialIcon from '../statics/images/post/OfficialIcon.png'

const Post = () => {
    return (
        <section className="PostTop">
            <figure className="PostTop-image">
                <img src={profileIcon} alt="" />
            </figure>
            <div className="PostTop-data">
                <h1 className="PostTop-title">joshua_l</h1>
                <img src={oficialIcon} alt="" />
                <h2 className="PostTop-subtitle">Tokyo, Japan</h2>
            </div>
            <a className="PostTop-button" href="">
                <img src={moreIcon} alt="" />
            </a>
        </section>
    )
}


export default Post