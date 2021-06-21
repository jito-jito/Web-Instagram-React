import React from 'react'



const Post = ( {children}) => {
    return (
        <article className="Post">
            {children}
        </article>
    )
}


export default Post