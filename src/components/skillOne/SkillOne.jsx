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
import { useRef, useState, useEffect } from 'react';

const skillOne = () => {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/310;
                const newSize2 = Math.sqrt(area)/90;
                setfontSize1(newSize1);
                setfontSize2(newSize2);
            }
        };
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []); 
    return (
        <div ref={boxRef} className='SkillOne__container'>
            <div className='SkillOne__container-box'>
                <div className='SkillOne__content-box'>
                    <p>Languages & Frameworks</p>
                </div>
                <div className='SkillOne__img'>
                    <div className='row-1'>
                        <img style={{width: `${fontSize2}rem`}} src={sk1} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk2} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk3} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk4} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk5} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk6} alt="error" />
                    </div>
                    <div className='row-2'>
                        <img style={{width: `${fontSize2}rem`}} src={sk7} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk8} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk9} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} src={sk10} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} id='hidden' src={sk1} alt="error" />
                        <img style={{width: `${fontSize2}rem`}} id='hidden' src={sk1} alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skillOne