'use client';

import Card from './components/Card';
import { projects, experiences, techStack } from './components/constants';
import { House, Briefcase, Code, Wrench, Contact } from 'lucide-react';
import ContactForm from './components/Form';

const App = () => {

  return (
    <div className="p-5">
      <nav className="flex items-center justify-center mt-2 fade-in">
        <div className="flex items-center gap-12 w-min bg-bg-secondary  shadow-lg px-6 h-12 rounded-2xl">
          <a onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-text-primary hover:text-text-secondary cursor-pointer">
            <House size={20} />
          </a>
          <a onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-text-primary hover:text-text-secondary cursor-pointer">
            <Briefcase size={20} />
          </a>
          <a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="text-text-primary hover:text-text-secondary cursor-pointer">
            <Code size={20} />
          </a>
          <a onClick={() => document.getElementById('tools').scrollIntoView({ behavior: 'smooth' })} className="text-text-primary hover:text-text-secondary cursor-pointer">
            <Wrench size={20} />
          </a>
          <a onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-text-primary hover:text-text-secondary cursor-pointer">
            <Contact size={20} />
          </a>
        </div>
      </nav>
      <div className='flex gap-16 mt-20 mx-36'>
        <section className="flex-1 sticky top-[50px] flex flex-col items-center h-min fade-in">
          <div className='flex flex-col mx-2 py-8 px-12 items-center w-min bg-white rounded-2xl '>
            <div className='w-64 h-68'>
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-full rounded-2xl mb-4 object-cover"
              />
            </div>
            <h1 className="text-5xl text-center font-bold my-6">Shreyansh <br></br>Agrawal</h1>
            <p className="text-[#6a6b6e] font-semibold text-center mt-8 mb-6">Passionate Software Engineer specializing in web development and innovative solutions.</p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/agrawalshreyansh" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary" >
                <img src='/github.svg' className='h-8 w-8'/>
              </a>
              <a href="https://leetcode.com/u/Shrage" className="text-text-primary hover:text-text-secondary flex items-center" target="_blank">
                <img src='/leetcode.png' className='w-8'/>
              </a>
              <a href="https://www.linkedin.com/in/shreyansh-agrawal-695289203/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary">
                <img src='/linkedin.svg' className='h-8 w-8'/>
              </a>
              <a href="mailto:i.shreyansh.agrawal@gmail.com" className="text-text-primary hover:text-text-secondary flex items-center" target="_blank">
                <img src='/gmail.png' className='w-7'/>
              </a>
              <a href="https://www.youtube.com/@shreyansh_agrawal" className="text-text-primary hover:text-text-secondary flex items-center" target="_blank">
                <img src='/youtube.png' className='w-12'/>
              </a>
            </div>
          </div>
        </section>
        <div className="flex-2 mx-3">
          <section className="mb-8 py-20 fade-in" id="home">
            <h2 className="text-[108px] font-black text-white mb-2 leading-28">FULL STACK <br></br><span className='text-[#444444]'>DEVELOPER</span></h2>
            <p className="text-[#a4a6aa] text-lg mb-4 w-[62%]">Building scalable web applications and solving complex problems with modern technologies.Building scalable web applications and solving </p>
            <div className="flex space-x-8 my-16">
              <div className="text-center">
                <div className="text-7xl font-semibold text-text-primary">+3</div>
                <div className="text-[#a4a6aa]">YEARS OF EXPERIENCE</div>
              </div>
              <div className="text-center">
                <div className="text-7xl font-semibold text-text-primary">+15</div>
                <div className="text-[#a4a6aa]">PROJECTS COMPLETED</div>
              </div>
              <div className="text-center">
                <div className="text-7xl font-semibold text-text-primary">+5</div>
                <div className="text-[#a4a6aa]">TECHNOLOGIES</div>
              </div>
            </div>
          </section>

          <section className="py-4 my-24 fade-in fade-in-delay-1" id="projects">
            <h2 className="text-[84px] font-black text-white mb-2 leading-20">
              RECENT
              <br></br>
              <span className='text-[#444444]'>PROJECTS</span>
            </h2>
            <div>
              {projects.map((item) => (
                <Card
                  key={item.title}
                  img={item.src}
                  title={item.title}
                  description={item.description}
                  timeline={item.timeline}
                  url={item.url}
                />
              ))}
            </div>
          </section>

          <section className="py-28 fade-in fade-in-delay-2" id="about">
            <h2 className="text-[84px] font-black text-white mb-8 leading-20">1 YEAR OF <br></br><span className='text-[#444444]'>EXPERIENCE
            </span></h2>
            <div>
              {experiences.map((item) => (
                <Card
                  key={item.title}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  timeline={item.timeline}
                  url={item.url}
                />
              ))}
            </div>
          </section>

          <section className="py-18 my-10 fade-in fade-in-delay-3" id="tools">
            <h2 className="text-[84px] font-black text-white mb-8 leading-20">TECH<br></br><span className='text-[#444444]'>STACK
            </span></h2>
            <div className='grid grid-cols-2 w-[90%]'>
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center text-2xl  text-white px-6 py-3 rounded-lg hover:bg-bg-secondary cursor-pointer transition-all duration-300">
                  {tech.logo && <img src={tech.logo} alt={tech.name} className="w-16 h-16 mr-2 bg-white p-1 rounded-xl" />}
                  {tech.name}
                </div>
              ))}
            </div>
          </section>

         <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default App
