import React from 'react'
import saveIcon from '../statics/images/post/postBotton/Shape.svg'
import likeIcon from '../statics/images/post/postBotton/Like.svg'
import commentIcon from '../statics/images/post/postBotton/Comment.svg'
import messangerIcon from '../statics/images/header/messanger.png'
import pagination from '../statics/images/post/postBotton/Pagination.png'


const PostButtons = () => {
    return (
        <section className="PostButtons">
            <div className="PostButtons-share">
                <a className="PostButtons-item" href=""><img src={likeIcon} alt="" /></a>
                <a className="PostButtons-item" href=""><img src={commentIcon} alt="" /></a>
                <a className="PostButtons-item" href=""><img src={messangerIcon} alt="" /></a>
            </div>
            <div className="PostButtons-pagination">
                <img className="PostButtons-item"src={pagination} alt="" />
            </div>
            <div className="PostButtons-save">
                <a className="PostButtons-item" href=""><img src={saveIcon} alt="" /></a>
            </div>
        </section>
    )

}


export default PostButtons