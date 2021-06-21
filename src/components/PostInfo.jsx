import React from 'react'
import miniImage from '../statics/images/post/miniImage.png'

const PostInfo = () => {
    return (
        <section className="PostInfo">
            <div className="PostInfo-likes">
                <img className="PostInfo-image" src={miniImage}alt="" />
                <p>Liked by <span>craig_love</span> and <span>44,686 others</span></p>
            </div>
            <div className="PostInfo-message">
                <p><span>joshua_l</span> The game in Japan was amazing and i want to share some photos</p>
            </div>
        </section>
    )

}


export default PostInfo