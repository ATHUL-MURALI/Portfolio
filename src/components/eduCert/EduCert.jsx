import './EduCert.css'
const EduCert = () => {
    return (
        <div className='EduCert__container'>
            <div className='EduCert__container-box'>
                <div className='EduCert__content-box'>
                    <p>Education & Certification</p>
                    <div>
                    <div className='EduCert__content-box1'>
                        <div className='EduCert__heading'>
                            <h2>Bachelor’s Degree  (cgpa: 9.41/10)</h2>
                            <p>2021-25</p>
                        </div>
                        <p>B.tech in Computer Science - Jyothi Engineering Collage</p>
                    </div>
                    <div className='EduCert__content-box1'>
                        <div className='EduCert__heading'>
                            <h2>1st Place at Yukthi 2025</h2>
                            <p>2025</p>
                        </div>
                        <p>Departmental Project Excellence Award (CSE)</p>
                    </div>
                    <div className='EduCert__content-box2'>
                        <div className='EduCert__heading'>
                            <h2>Full-Stack Certificate – ICT Academy of Kerala</h2>
                            <p>2025</p>
                        </div>
                        <p>Full-Stack Developer</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EduCert