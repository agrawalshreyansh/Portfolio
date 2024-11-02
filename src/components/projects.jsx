import './projects.css';
import link from '../assets/link.png';
import comimg from '../assets/e-commerce.png'

function Projects() {
    return(
        <>
        <div className='proj-head'>
            <div className="proj">
                <h1>E-Commerce Store</h1>
                <div className='proj-img'>
                    <img src={comimg}/>
                </div>
                <div className='proj-links'>
                    <span href=""><a href='https://github.com/agrawalshreyansh/Pujamart_ecom' target="_blank" rel="noopener noreferrer">Github<img src={link}/></a></span>
                    <span><a href='https://shrage.pythonanywhere.com/' target="_blank" rel="noopener noreferrer">Host<img src={link}/></a></span>
                </div>
            </div>
                       
        </div>
        <div className='dline'></div>
 
        </>
    )
}

export default Projects 