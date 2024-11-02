import './education.css'
import degree from '../assets/school.svg'

function Education() {
    return(
        <>  
        <div className='edmain'>
            <div className='e-container-1'>
                <div className='hsdegree'>
                    <h1>Higher Secondary <br/>Education</h1>     
                    <h3>Divine Public Education</h3>
                    <h4>2021-2023</h4>
                    <img src={degree}/>
                </div>
            </div>
            <div className='e-divide'></div>
            <div className='e-container-2'>
                <div className='bdegree'>
                    <h1>B.Tech in CS and AI</h1>
                    <h3>Newton School of Technology, <br/>Rishihood University</h3>
                    <h4>2024-2028</h4>
                    <img src={degree}/>
                </div>
                <div className='sdegree'>
                    <h1>Secondary Education</h1>
                    <h3>Siddhartha English Boarding  <br/>Secondary School</h3>
                    <h4>2008-2021</h4>
                    <img src={degree}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education;