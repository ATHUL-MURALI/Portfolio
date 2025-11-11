import './Proj.css'
import pj from '../../assets/portf/leetcode.svg'
import pj1 from '../../assets/projects/archisans.svg'
import pj2 from '../../assets/projects/data-storage.svg'
import pj3 from '../../assets/projects/shirt.svg'
import pj4 from '../../assets/projects/Jump.png'
import pj5 from '../../assets/projects/internet.svg'
const Proj = () => {
  const do1 = () => {
    window.open("https://archisans.com", "_blank");
  }
  const do2 = () => {
    window.open("https://github.com/ATHUL-MURALI/Hospital-Management-System-Talend.git", "_blank");
  }
  const do3 = () => {
    window.open("https://github.com/ATHUL-MURALI/E-Commerce-Advanced.git", "_blank");
  }
  const do4 = () => {
    window.open("https://nexusretro.netlify.app/", "_blank");
  }
  const do5 = () => {
    window.open("https://github.com/ATHUL-MURALI/Nexus-Event.git", "_blank");
  }
  const do6 = () => {
    window.open("https://github.com/ATHUL-MURALI/Domain-Search.git", "_blank");
  }
  const do7 = () => {
    window.open("https://www.linkedin.com/in/athul-murali-t/", "_blank");
  }
  return (
    <div className='Proj__container'>
      <div className='Proj__container-box'>
        <div className='Proj__content-box'>
          <p>Projects</p>
          {/* <p>View All</p> */}
        </div>
        <div className='Proj__projects'>




          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj1} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2> Archisans (Freelance)</h2>
              <p>An on-demand web platform to book architects, artisans, and skilled construction professionals</p>
            </div>
            <div className='Proj__probutton'>
              <button onClick={do1}>
                <div className='Proj__probutton1'>
                  <img src={pj} alt="error" />
                  <h3>Live</h3>
                </div>
              </button>
            </div>
          </div>

          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj2} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>Hospital Management System (Cognizant)</h2>
              <p>A hospital management system built with Java and ETL workflows for efficient data integration and analysis</p>
            </div>
            <div className='Proj__probutton'>
              <button onClick={do2}>
                <div className='Proj__probutton2'>
                  <img src={pj} alt="error" />
                  <h3>Github</h3>
                </div>
              </button>
            </div>
          </div>

          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj3} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>GenAI 3D Visualizer</h2>
              <p>AI-powered 3D product visualizer using React and Spring Boot for VITON & custom outfit generation</p>
            </div>
            <div className='Proj__probutton'>
              <button onClick={do3}>
                <div className='Proj__probutton2'>
                  <img src={pj} alt="error" />
                  <h3>Github</h3>
                </div>
              </button>
            </div>
          </div>

          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj4} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>NEXUS-EVENT (NASA Hackathon24)</h2>
              <p>A WebGL-based solar system simulation game built with Unity and C# featuring realistic rocket and planetary physics</p>
            </div>
            <div className='Proj__probutton'>
              <button onClick={do4}>
                <div className='Proj__probutton1'>
                  <img src={pj} alt="error" />
                  <h3>Live</h3>
                </div>
              </button>
              <button onClick={do5}>
                <div className='Proj__probutton2'>
                  <img src={pj} alt="error" />
                  <h3>Github</h3>
                </div>
              </button>
            </div>
          </div>

          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj5} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>Mass Domain Availability Search</h2>
              <p>A Python-based tool using DNS & WHOIS to generate and analyze available domain names with meanings</p>
            </div>
            <div className='Proj__probutton'>
              <button onClick={do6}>
                <div className='Proj__probutton2'>
                  <img src={pj} alt="error" />
                  <h3>Github</h3>
                </div>
              </button>
            </div>
          </div>






        </div>
      </div>
    </div>
  )
}

export default Proj