import React from 'react'
import './about.css';
import me from '../assets/me.png'

export default function About () {
  return (
    <div className="about about-header">
      <div className="about-me">
        <img src={me} alt="" className='me' />
      </div>
      <div className='about-paragraph'>
      <h1>Mobile Application Developer</h1>
      <h3>About me</h3>
      <p>Hey I'm Derya. I graduated from Pamukkale University by finishing Biomedical Enginerring Program.
        I cultivated my self on image processing and mobile application development.
        While I'm student i worked on so many projects using image processing.
        One of them was my thesis it was about lung cancer diagnostic using AI and image processing.
        On my intern-engineering I worked on React-Native and completed 2 application development projects.
        I joined TEKNOFEST 2022 Technology Festival.
        For this Festival i made a required software for a vehicle that works autonomous operation and search for a special plant and then agricultural spray it.
      </p>
      </div>
    </div>
  )
}
