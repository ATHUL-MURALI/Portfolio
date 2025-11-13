import './ExpTwo.css'
import { useRef, useState, useEffect } from 'react';
const ExpTwo = () => {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/200;
                const newSize2 = Math.sqrt(area)/255;
                setfontSize1(newSize1);
                setfontSize2(newSize2);
            }
        };
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []); 
    return (
        <div ref={boxRef} className='ExpTwo__container'>
            <div className='ExpTwo__container-box'>
                <div className='ExpTwo__content-box'>
                    <div className='ExpTwo__heading'>
                        <h2 style={{fontSize: `${fontSize1}rem`}}>Archisans</h2>
                        <p style={{fontSize: `${fontSize2}rem`}}>2025</p>
                    </div>
                    <p style={{fontSize: `${fontSize2}rem`}}>Founding Developer</p>
                </div>
                <div className='ExpTwo__bullet'>
                    <ul style={{fontSize: `${fontSize2}rem`}}>
                        <li>Designed UI/UX in Figma and developed a fully responsive Front-end using React, JavaScript</li>
                        <li>Led a team of 6 developers to deliver project on time</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpTwo