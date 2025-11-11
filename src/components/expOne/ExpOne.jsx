import './ExpOne.css'

const ExpOne = () => {
    return (
        <div className='ExpOne__container'>
            <div className='ExpOne__container-box'>
                <div className='ExpOne__content-box'>
                    <div className='ExpOne__heading'>
                        <h2>Cognizant</h2>
                        <p>2024-2025</p>
                    </div>
                    <p>Data Analyst</p>
                </div>
                <div className='ExpOne__bullet'>
                    <ul>
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