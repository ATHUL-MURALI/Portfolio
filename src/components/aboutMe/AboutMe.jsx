import './AboutMe.css'
import myImg from '../../assets/athulPic.png'
function AboutMe() {
    return (
        <div className='container'>
            <div className='container-box'>
                <div className='image-box'>
                    <img src = {myImg} alt="img not found" />
                </div>
                <div className='content-box'>
                    <h2>Athul</h2>
                    <p>I’m a Full-Stack Developer skilled in React, Spring Boot, JavaScript, Python, ETL tools.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe