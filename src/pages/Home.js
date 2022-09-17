import React from 'react'
import webImage from '../images/web.png'

function Home() {
  return (
    <div className='alert alert-primary'>
    <img src="/images/my-photo.jpg" alt="My photo" />
    <h1>hello my name is Moufida. I am a Fullstack Web Developer</h1>
    <img src={webImage} alt="web Development" />
    </div>
  )
}

export default Home