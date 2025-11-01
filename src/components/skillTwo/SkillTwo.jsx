import './SkillTwo.css'
import sk from '../../assets/langFrame/html5.svg' 
const skillTwo = () => {
    return (
        <div className='SkillTwo__container'>
            <div className='SkillTwo__container-box'>
                <div className='SkillTwo__content-box'>
                    <p>Languages & Frameworks</p>
                </div>
                <div className='SkillTwo__img'>
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

export default skillTwo