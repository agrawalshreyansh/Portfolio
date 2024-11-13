import React, { useState } from 'react';
import './App.css'
import Home from './components/home'
import Aboutme from './components/about';
import Contact from './components/contact'
import Education from './components/education'
import Projects from './components/projects'
import Skills from './components/skills'
import Menu from './assets/menu.svg'
import homeicon from './assets/home.png'
import abouticon from './assets/list.png'
import skillicon from './assets/skill.png'
import projecticon from './assets/project.png'
import eduicon from './assets/graduation.png'
import contacticon from './assets/contact-us.png'


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
          <img src={Menu} className='menu-icon'></img> 
              <ul className='nav-elements'>
                  <li id="home" onClick={() => setActiveTab('home')}><a href="#home" className='tabnames'>Home</a><img src={homeicon} href="#home" className='tabicons'></img></li>
                  <li id="about" onClick={() => setActiveTab('about')}><a href="#about" className='tabnames'>About Me</a><img src={abouticon} href="#about" className='tabicons'></img></li>
                  <li id='skills' onClick={() => setActiveTab('skills')}><a href="#skills" className='tabnames'>Skills</a><img src={skillicon} className='tabicons'></img></li>
                  <li id='projects' onClick={() => setActiveTab('projects')}><a href="#projects" className='tabnames'>Projects</a><img src={projecticon} className='tabicons'></img></li>
                  <li id='education' onClick={() => setActiveTab('education')}><a href="#education" className='tabnames'>Education</a><img src={eduicon} className='tabicons'></img></li>
                  <li id='contact' onClick={() => setActiveTab('contact')}><a href="#contact" className='tabnames'>Contact Me</a><img src={contacticon} className='tabicons'></img></li>
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
