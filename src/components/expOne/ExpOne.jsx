import './ExpOne.css'
import myImg from '../../assets/athulPic.png'
import but from '../../assets/button.svg'

const ExpOne = () => {
    return (
        <div className='container'>
            <div className='container-box'>
                <div className='image-box'>
                    <img src={myImg} alt="img not found" />
                </div>
                <div className='content-box'>
                    <div className='name-resume'>
                        <h2>Athul Murali T</h2>
                        <div className='download'>
                            Resume
                            <img src={but} alt="error" />
                        </div>
                    </div>
                    <p>I’m a Full-Stack Developer skilled in React, Spring Boot, JavaScript, Python, ETL tools.</p>
                </div>
            </div>
        </div>
    )
}

export default ExpOne