import React, { useState } from 'react';
import './App.css'
import Home from './components/home'
import Aboutme from './components/about';
import Contact from './components/contact'
import Education from './components/education'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const content = {
    home: <Home/>,
    about: <Aboutme/>,
    skills: <Skills/>,
    projects: <Projects/>,
    education: <Education/>,
    contact: <Contact/>,
  };

  return (
    <>
      <div className='m-container'>
          <nav className='navbar'>
              <ul className='nav-elements'>
                  <li id="home" onClick={() => setActiveTab('home')}><a href="#home">Home</a></li>
                  <li id="about" onClick={() => setActiveTab('about')}><a href="#about">About Me</a></li>
                  <li id='skills' onClick={() => setActiveTab('skills')}><a href="#skills">Skills</a></li>
                  <li id='projects' onClick={() => setActiveTab('projects')}><a href="#projects">Projects</a></li>
                  <li id='education' onClick={() => setActiveTab('education')}><a href="#education">Education</a></li>
                  <li id='contact' onClick={() => setActiveTab('contact')}><a href="#contact">Contact Me</a></li>
              </ul>
          </nav>
          <div className="content">
              {content[activeTab]}
          </div>
      </div>
    </>
  )
}

export default App
