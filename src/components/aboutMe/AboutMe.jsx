import './AboutMe.css'
import myImg from '../../assets/athulPic.png'
import but from '../../assets/buttons/button.svg'
function AboutMe() {
    const do1 = () => {
        const fileUrl = '/ATHUL_MURALI_Resume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'ATHUL_MURALI_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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