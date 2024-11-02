import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import x from '../assets/x.png'
import youtube from '../assets/youtube.png'
import github from '../assets/github.png'
import email from '../assets/email.png'
import codeforce from '../assets/codeforces.png'
import resume from '../assets/resume.png'
import './contact.css' 
import send from '../assets/paper.png'

function Contact() {
    return(
        <>
            <div className='social-links-1'>
                <a href='https://www.linkedin.com/in/shreyansh-agrawal-695289203/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/shreyansh_0807/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram"/></a>
                <a href="https://x.com/Shrage_07" target="_blank" rel="noopener noreferrer"><img src={x} alt='X' /></a>
                <a href='https://www.youtube.com/@shreyansh_agrawal' target="_blank" rel="noopener noreferrer"><img src={youtube} alt='YouTube'/></a>
            </div>
            <div className='social-links-2'>
                <a href='https://github.com/agrawalshreyansh' target="_blank" rel="noopener noreferrer"><img src={github} alt="Github" /></a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=contactcode.ag@gmail.com' target="_blank" rel="noopener noreferrer"><img src={email} alt="Email" /></a>
                <a href='https://codeforces.com/profile/Shrage' target="_blank" rel="noopener noreferrer"><img src={codeforce} alt="Codeforces" /></a>
                <a href='https://drive.google.com/file/d/1CjFu5W0Y6YeyIO6AiTDjsVBAkZY_lnC7/view?usp=drive_link' target="_blank" rel="noopener noreferrer"><img src={resume} alt="Resume"  /></a>
            </div>

            <div className='contact-form'>
                <h1>Have a message for me ?</h1>
                <div className='inpu-texts'>
                    <input id='email' type='email' placeholder='Your email'/>
                    <textarea id='message' type='text' placeholder='Your message'/>
                </div>
                <button>Send<img src={send}/></button>
            </div>
        </>
    )
}

export default Contact 