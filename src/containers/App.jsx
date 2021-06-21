import React from 'react'
import '../styles/global.scss'
import Header from '../components/Header'
import Stories from '../components/Stories'
import Post from '../components/Post'
import PostTop from '../components/PostTop'
import PostImages from '../components/PostImages'
import PostButtons from '../components/PostButtons'
import PostInfo from '../components/PostInfo'
import Footer from '../components/Footer'

const App = () => {
    return (
        <>
        <Header/>
        <Stories></Stories>
        <Post>
            <PostTop/>
            <PostImages/>
            <PostButtons/>
            <PostInfo/>
        </Post>
        <Footer/>
        </>

    )

}


export default App