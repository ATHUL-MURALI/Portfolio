import './SkillOne.css'
import sk from '../../assets/langFrame/html5.svg' 
const skillOne = () => {
    return (
        <div className='SkillOne__container'>
            <div className='SkillOne__container-box'>
                <div className='SkillOne__content-box'>
                    <p>Languages & Frameworks</p>
                </div>
                <div className='SkillOne__img'>
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                    <img src = {sk} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default skillOne