import './SkillOne.css'
import sk1 from '../../assets/langFrame/html5.svg'
import sk2 from '../../assets/langFrame/css3.svg'
import sk3 from '../../assets/langFrame/javascript.svg'
import sk4 from '../../assets/langFrame/react.svg'
import sk5 from '../../assets/langFrame/vite.svg'
import sk6 from '../../assets/langFrame/spring-boot.svg'
import sk7 from '../../assets/langFrame/java.svg'
import sk8 from '../../assets/langFrame/python.svg'
import sk9 from '../../assets/langFrame/c.svg'
import sk10 from '../../assets/langFrame/unity.svg'
const skillOne = () => {
    return (
        <div className='SkillOne__container'>
            <div className='SkillOne__container-box'>
                <div className='SkillOne__content-box'>
                    <p>Languages & Frameworks</p>
                </div>
                <div className='SkillOne__img'>
                    <div className='row-1'>
                        <img src={sk1} alt="error" />
                        <img src={sk2} alt="error" />
                        <img src={sk3} alt="error" />
                        <img src={sk4} alt="error" />
                        <img src={sk5} alt="error" />
                        <img src={sk6} alt="error" />
                    </div>
                    <div className='row-2'>
                        <img src={sk7} alt="error" />
                        <img src={sk8} alt="error" />
                        <img src={sk9} alt="error" />
                        <img src={sk10} alt="error" />
                        <img id='hidden' src={sk1} alt="error" />
                        <img id='hidden' src={sk1} alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skillOne