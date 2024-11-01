import myimg from '../assets/me.png'
import './home.css'

function Home() {
    return(
        <>
            <div className='main'>
                <div className='profileimg'>
                    <img src={myimg}></img>
                </div>
                <div className='details'>
                    <h2>Shreyansh Agrawal</h2>
                    <div className='myskill'>
                        <h3>Full Stack Web Developer</h3>
                        <h3>&</h3>
                        <h3>Content Creator</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home