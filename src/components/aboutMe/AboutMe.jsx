import './AboutMe.css'
import myImg from '../../assets/athulPic.png'
import but from '../../assets/buttons/button.svg'
import { useState, useEffect, useRef } from "react";
function AboutMe() {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/170;
                const newSize2 = Math.sqrt(area)/280;
                setfontSize1(newSize1);
                setfontSize2(newSize2);
            }
        };
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []); 


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
        <div ref={boxRef} className='AboutMe__container'>
            <div className='AboutMe__container-box'>
                <div className='AboutMe__image-box'>
                    <img src={myImg} alt="img not found" />
                </div>
                <div className='AboutMe__content-box'>
                    <div className='AboutMe__name-resume'>
                        <h2 style={{fontSize : `${fontSize1}rem`}}>Athul Murali T</h2>
                        <div>
                            <button onClick={do1} className='AboutMe__download'>
                                <p id='downloadR'>Resume</p>
                                <img src={but} alt="error" />
                            </button>
                        </div>
                    </div>
                    <p style={{fontSize : `${fontSize2}rem`}}>I’m a Full-Stack Developer skilled in React, Spring Boot, JavaScript, Python, ETL tools.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe