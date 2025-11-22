import './App.css'
import Card from './components/Card';
import { projects, experiences, techStack } from './constants';
import { House, Briefcase, Wrench, Contact } from 'lucide-react';


const App = () => {

  return (
    <div className="p-5">
      <nav className="flex items-center justify-center mt-2">
        <div className="flex items-center gap-12 w-min bg-bg-secondary  shadow-lg px-6 h-12 rounded-2xl">
          <a href="#home" className="text-text-primary hover:text-text-secondary">
            <House size={20} />
          </a>
          <a href="#about" className="text-text-primary hover:text-text-secondary">
            <Briefcase size={20} />
          </a>
          <a href="#projects" className="text-text-primary hover:text-text-secondary">
            <Wrench size={20} />
          </a>
          <a href="#contact" className="text-text-primary hover:text-text-secondary">
            <Contact size={20} />
          </a>
        </div>
      </nav>
      <div className='flex gap-16 mt-20 mx-36'>
        <div className="flex-1 sticky top-[50px] flex flex-col items-center h-min">
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
              <a href="https://linkedin.com/in/shreyanshagrawal" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary">
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
        </div>
        <div className="flex-2 mx-3">
          <section className="mb-8">
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

          <section className="my-28">
            <h2 className="text-[84px] font-black text-white mb-2 leading-20">
              RECENT
              <br></br>
              <span className='text-[#444444]'>PROJECTS</span>
            </h2>
            <div>
              {projects.map((item) => (
                <Card
                  key={item.src}
                  img={item.src}
                  title={item.title}
                  description={item.description}
                  timeline={item.timeline}
                />
              ))}
            </div>
          </section>

          <section className="my-28">
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
                />
              ))}
            </div>
          </section>

          <section className="my-28">
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

          <section className="my-28">
            <h3 className="text-2xl font-bold text-text-primary mb-4"> </h3>
            <h2 className="text-[84px] font-black text-white mb-8 leading-20">LET&apos;S WORK<br></br><span className='text-[#444444]'>TOGETHER
            </span></h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-[#a4a6aa]">Name</label>
                <input id="name" type="text" placeholder="Your Name" className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-[#a4a6aa]">Email</label>
                <input id="email" type="email" placeholder="Your@email.com" className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-[#a4a6aa]">Message</label>
                <textarea id="message" placeholder="Message" className="w-full p-2 bg-bg-secondary rounded-lg text-[#a4a6aa] border-1 border-transparent focus:border-text-primary focus:outline-none" rows="4"></textarea>
              </div>
              <button type="submit" className="bg-text-primary w-full text-bg-primary px-4 py-2  rounded-lg hover:bg-text-secondary">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App
