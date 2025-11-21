import './App.css'

const App = () => {

  return (
    <div className="p-5">
      <nav className="top-5 left-5 right-5 flex items-center justify-center  z-10">
        <div className="flex gap-4 w-min bg-bg-secondary  shadow-lg px-6 h-12 rounded-lg">
          <a href="#home" className="text-text-primary hover:text-text-secondary flex items-center space-x-1">
            <span>Home</span>
          </a>
          <a href="#about" className="text-text-primary hover:text-text-secondary flex items-center space-x-1">
            <span>About</span>
          </a>
          <a href="#projects" className="text-text-primary hover:text-text-secondary flex items-center space-x-1">
            <span>Projects</span>
          </a>
          <a href="#contact" className="text-text-primary hover:text-text-secondary flex items-center space-x-1">
            <span>Contact</span>
          </a>
        </div>
      </nav>
      <div className='flex gap-8 mt-20 mx-36'>
        <div className="flex-1 sticky top-[50px] flex flex-col items-center h-min">
          <div className='flex flex-col mx-2 p-8 items-center w-min bg-white rounded-2xl '>
            <div className='w-64 h-68'>
              <img
                src="/me.jpg"
                alt="Profile"
                className="w-full h-full rounded-2xl mb-4 object-cover"
              />
            </div>
            <h1 className="text-5xl text-center font-bold my-6">Shreyansh <br></br>Agrawal</h1>
            <p className="text-[#6a6b6e] font-semibold text-center mt-8 mb-6">Passionate Software Engineer specializing in web development and innovative solutions.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/agrawalshreyansh" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary">GitHub</a>
              <a href="https://linkedin.com/in/shreyanshagrawal" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-text-secondary">LinkedIn</a>
              <a href="mailto:shreyansh@example.com" className="text-text-primary hover:text-text-secondary">Email</a>
            </div>
          </div>
        </div>
        <div className="flex-2 mx-3">
          <section className="mb-8">
            <h2 className="text-[108px] font-black text-white mb-2 leading-28">FULL STACK <br></br><span className='text-[#444444]'>ENGINEER</span></h2>
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
            <div className="space-y-4">
              <div className="bg-bg-secondary p-4 rounded">
                <h4 className="text-xl font-semibold text-text-primary">Portfolio Website</h4>
                <p className="text-text-secondary">A responsive portfolio built with React and Vite.</p>
              </div>
              <div className="bg-bg-secondary p-4 rounded">
                <h4 className="text-xl font-semibold text-text-primary">E-commerce App</h4>
                <p className="text-text-secondary">Full-stack application with Node.js and MongoDB.</p>
              </div>
            </div>
          </section>

          <section className="my-28">
            <h2 className="text-[84px] font-black text-white mb-2 leading-20">1 YEAR OF <br></br><span className='text-[#444444]'>EXPERIENCE
</span></h2>
            <div className="space-y-4">
              <div className="bg-bg-secondary p-4 rounded">
                <h4 className="text-xl font-semibold text-text-primary">Software Engineer at TechCorp</h4>
                <p className="text-text-secondary">2022 - Present</p>
                <p className="text-text-secondary">Developed and maintained web applications using React and Node.js.</p>
              </div>
              <div className="bg-bg-secondary p-4 rounded">
                <h4 className="text-xl font-semibold text-text-primary">Junior Developer at StartupXYZ</h4>
                <p className="text-text-secondary">2020 - 2022</p>
                <p className="text-text-secondary">Worked on frontend development with JavaScript and CSS.</p>
              </div>
            </div>
          </section>

          <section className="my-28">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Let&apos;s Work Together</h3>
            <p className="text-text-secondary mb-4">I&apos;m always open to new opportunities and collaborations. Feel free to reach out!</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 bg-bg-secondary text-text-primary rounded" />
              <input type="email" placeholder="Your Email" className="w-full p-2 bg-bg-secondary text-text-primary rounded" />
              <textarea placeholder="Your Message" className="w-full p-2 bg-bg-secondary text-text-primary rounded" rows="4"></textarea>
              <button type="submit" className="bg-text-primary text-bg-primary px-4 py-2 rounded hover:bg-text-secondary">Send Message</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App
