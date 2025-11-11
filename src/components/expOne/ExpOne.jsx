import { useState, useEffect, useRef } from 'react';
import './ExpOne.css';

const ExpOne = () => {
  const [isSmall, setIsSmall] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setIsSmall(ref.current.offsetWidth < 150);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='ExpOne__container' ref={ref}>
      <div className='ExpOne__container-box'>
        <div className='ExpOne__content-box'>
          <div className='ExpOne__heading'>
            <h2>Cognizant</h2>
            <p>2024-2025</p>
          </div>
          <p>Data Analyst</p>
        </div>
        <div className='ExpOne__bullet'>
          {isSmall ? (
            <ul>
              <li>Built ETL pipelines in Talend (Java) for hospital data integration</li>
              <li>Improved report accuracy to 99.5%</li>
              <li>Optimized ETL workflows (+40% efficiency)</li>
              <li>Designed MySQL schemas and Snowflake models</li>
            </ul>
          ) : (
            <ul>
              <li>Developed ETL (Extract, Transform, Load) pipelines using Talend Open Studio (Java) to integrate and manage hospital data</li>
              <li>Achieved 99.5% data accuracy in patient reports by implementing data validation rules in Talend</li>
              <li>Enhanced data reporting efficiency by 40% through optimized ETL workflows</li>
              <li>Developed MySQL schemas and queries for efficient hospital data management</li>
              <li>Implemented Snowflake schema models to support efficient hospital data warehousing and analytics</li>
              <li>Created interactive dashboards for hospital performance metrics</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpOne;
