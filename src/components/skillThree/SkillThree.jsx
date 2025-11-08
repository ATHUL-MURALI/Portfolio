import './SkillThree.css'
import sk1 from '../../assets/langFrame/git.svg' 
import sk2 from '../../assets/langFrame/aws.svg' 
import sk3 from '../../assets/langFrame/docker.svg' 
import sk4 from '../../assets/langFrame/kubernets.svg' 
import sk5 from '../../assets/langFrame/talend.svg' 
import sk6 from '../../assets/langFrame/figma.svg' 
const SkillThree = () => {
    return (
        <div className='SkillThree__container'>
            <div className='SkillThree__container-box'>
                <div className='SkillThree__content-box'>
                    <p>Tools & Platform</p>
                </div>
                <div className='SkillThree__img'>
                    <img src = {sk1} alt="error" />
                    <img src = {sk2} alt="error" />
                    <img src = {sk3} alt="error" />
                    <img src = {sk4} alt="error" />
                    <img src = {sk5} alt="error" />
                    <img src = {sk6} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default SkillThree