import './skills.css'


function Skills() {
    return(
        <>
            <div className="sk-container-1">
                <div className='lang'>
                    <h2>Languages</h2>
                    <h3>C++, Python, HTML, CSS, Javascript, Kotlin</h3>
                </div>
                <div className='frames'>
                    <h2 className='f-text'>Frameworks & </h2><h2 className='lib-text'>Libraries</h2>
                    <h3>Django, React, Matplotlib, Pandas, Numpy, Tailwind CSS</h3>
                </div>
            </div>
            <div className='line'></div>
            <div className='sk-container-2'>
                <div className='data'>
                    <h2>Databases</h2>
                    <h3>MySQL, SQLite</h3>
                </div>
                <div className='tech'>
                    <h2>Technologies</h2>
                    <h3>VS Code, Git & Github, Da Vinci Resolve, Canva</h3>  
                </div>
            </div>
        </>
    )
}

export default Skills 