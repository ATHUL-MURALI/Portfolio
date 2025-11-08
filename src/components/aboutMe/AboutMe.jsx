import './AboutMe.css'
import myImg from '../../assets/athulPic.png'
import but from '../../assets/buttons/button.svg'
function AboutMe() {
    const do1 = () => {
        console.log("1clicked")
    }
    return (
        <div className='AboutMe__container'>
            <div className='AboutMe__container-box'>
                <div className='AboutMe__image-box'>
                    <img src={myImg} alt="img not found" />
                </div>
                <div className='AboutMe__content-box'>
                    <div className='AboutMe__name-resume'>
                        <h2>Athul Murali T</h2>
                        <div>
                            <button onClick={do1} className='AboutMe__download'>
                                <p id='downloadR'>Resume</p>
                                <img src={but} alt="error" />
                            </button>
                        </div>
                    </div>
                    <p>I’m a Full-Stack Developer skilled in React, Spring Boot, JavaScript, Python, ETL tools.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe