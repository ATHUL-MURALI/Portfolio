import './SkillTwo.css'
import sk1 from '../../assets/langFrame/spring-boot.svg' 
import sk2 from '../../assets/langFrame/java.svg' 
import sk3 from '../../assets/langFrame/postgresql.svg' 
import sk4 from '../../assets/langFrame/aws.svg' 
import sk5 from '../../assets/langFrame/mysql.svg' 
import { useRef, useState, useEffect } from 'react';

const skillTwo = () => {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/152;
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
        <div ref={boxRef} className='SkillTwo__container'>
            <div className='SkillTwo__container-box'>
                <div className='SkillTwo__content-box'>
                    <p style={{fontSize: `${fontSize1}rem`}}>Backend & Database</p>
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