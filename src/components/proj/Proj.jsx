import './Proj.css'
import pj from '../../assets/portf/leetcode.svg'
const Proj = () => {
  return (
    <div className='Proj__container'>
      <div className='Proj__container-box'>
        <div className='Proj__content-box'>
          <p>Cognizant</p>
          <p>2024-2025</p>
        </div>
        <div className='Proj__projects'>
          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>Mass Domain Avilability Search</h2>
              <p>B.tech in Computer Science - Jyothi Engineering Collage,B.tech in </p>
            </div>
            <div className='Proj__probutton'>
              <p>button1</p>
              <p>button2</p>
            </div>
          </div>
          <div className='Proj__project'>
            <div className='Proj__image'>
              <img src={pj} alt="error" />
            </div>
            <div className='Proj__disc'>
              <h2>hi</h2>
              <p>hiiiiiiiiiiiiiiii</p>
            </div>
            <div className='Proj__probutton'>
              <p>button1</p>
              <p>button2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proj