import React from 'react'
import image from '../statics/images/stories/InnerOval.png'

const Stories = () => {
    return (
        <>
        <section className="Stories">
            <div className="Stories-container">
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
                <div className="Stories-item">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                    <p>your story</p>
                </div>
            </div>
        </section>
        </>

    )

}


export default Stories