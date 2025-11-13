import './SkillThree.css'
import sk1 from '../../assets/langFrame/git.svg' 
import sk2 from '../../assets/langFrame/aws.svg' 
import sk3 from '../../assets/langFrame/docker.svg' 
import sk4 from '../../assets/langFrame/kubernets.svg' 
import sk5 from '../../assets/langFrame/talend.svg' 
import sk6 from '../../assets/langFrame/figma.svg'
import { useRef, useState, useEffect } from 'react';

const SkillThree = () => {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/310;
                const newSize2 = Math.sqrt(area)/70;
                setfontSize1(newSize1);
                setfontSize2(newSize2);
            }
        };
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []); 
    return (
        <div ref={boxRef} className='SkillThree__container'>
            <div className='SkillThree__container-box'>
                <div className='SkillThree__content-box'>
                    <p>Tools & Platform</p>
                </div>
                <div className='SkillThree__img'>
                    <img style={{width: `${fontSize2}rem`}} src = {sk1} alt="error" />
                    <img style={{width: `${fontSize2}rem`}} src = {sk2} alt="error" />
                    <img style={{width: `${fontSize2}rem`}} src = {sk3} alt="error" />
                    <img style={{width: `${fontSize2}rem`}} src = {sk4} alt="error" />
                    <img style={{width: `${fontSize2}rem`}} src = {sk5} alt="error" />
                    <img style={{width: `${fontSize2}rem`}} src = {sk6} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default SkillThree