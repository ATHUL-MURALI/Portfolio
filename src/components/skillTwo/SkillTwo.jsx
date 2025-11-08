import './SkillTwo.css'
import sk1 from '../../assets/langFrame/spring-boot.svg' 
import sk2 from '../../assets/langFrame/java.svg' 
import sk3 from '../../assets/langFrame/postgresql.svg' 
import sk4 from '../../assets/langFrame/aws.svg' 
import sk5 from '../../assets/langFrame/mysql.svg' 
const skillTwo = () => {
    return (
        <div className='SkillTwo__container'>
            <div className='SkillTwo__container-box'>
                <div className='SkillTwo__content-box'>
                    <p>Backend & Database</p>
                </div>
                <div className='SkillTwo__img'>
                    <img src = {sk1} alt="error" />
                    <img src = {sk2} alt="error" />
                    <img src = {sk3} alt="error" />
                    <img src = {sk4} alt="error" />
                    <img src = {sk5} alt="error" />
                    <img id='hidden' src = {sk5} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default skillTwo