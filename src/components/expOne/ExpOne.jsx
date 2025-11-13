import './ExpOne.css'
import { useRef, useState, useEffect } from 'react';

const ExpOne = () => {
    const boxRef = useRef(null);
    const [fontSize1, setfontSize1] = useState(1.375);
    const [fontSize2, setfontSize2] = useState(0.875);
    useEffect(() => {
        const updateFontSize = () => {
            if (boxRef.current) {
                const { offsetWidth: w, offsetHeight: h } = boxRef.current;
                const area = w * h;
                const newSize1 = Math.sqrt(area)/310;
                const newSize2 = Math.sqrt(area)/385;
                setfontSize1(newSize1);
                setfontSize2(newSize2);
            }
        };
        updateFontSize();
        window.addEventListener("resize", updateFontSize);
        return () => window.removeEventListener("resize", updateFontSize);
    }, []); 
    return (
        <div ref={boxRef} className='ExpOne__container'>
            <div className='ExpOne__container-box'>
                <div className='ExpOne__content-box'>
                    <div className='ExpOne__heading'>
                        <h2 style={{fontSize: `${fontSize1}rem`}}>Cognizant</h2>
                        <p style={{fontSize: `${fontSize2}rem`}}>Dec 24-Mar 25</p>
                    </div>
                    <p style={{fontSize: `${fontSize2}rem`}}>Data Analyst</p>
                </div>
                <div className='ExpOne__bullet'>
                    <ul style={{fontSize: `${fontSize2}rem`}}>
                        <li>Developed ETL (Extract, Transform, Load) pipelines using Talend Open Studio (Java) to integrate and manage hospital data</li>
                        <li>Achieved 99.5% data accuracy in patient reports by implementing data validation rules in Talend</li>
                        <li>Enhanced data reporting efficiency by 40% through optimized ETL workflows</li>
                        <li>Developed MySQL schemas and queries for efficient hospital data managemen</li>
                        <li>Implemented Snowflake schema models to support efficient hospital data warehousing and analytics</li>
                        <li>Created interactive dashboards for hospital performance metrics</li>                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpOne