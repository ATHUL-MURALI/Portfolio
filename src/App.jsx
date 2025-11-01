import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import ExpOne from './components/expOne/ExpOne';
import SkillOne from './components/skillOne/SkillOne';
import SkillTwo from './components/skillTwo/SkillTwo';
import EduCert from './components/eduCert/EduCert';

function App() {
  return (
    // <div>
    //   <AboutMe/>
    //   {/* <ExpOne/> */}
    //   {/* <SkillOne/> */}
    // </div>
    <div className='grid-container'>
      <div className='item' style={{gridArea: 'box-1'}}></div>
      <div className='item' style={{gridArea: 'box-2'}}><AboutMe/></div>
      <div className='item' style={{gridArea: 'box-3'}}></div>
      <div className='item' style={{gridArea: 'box-4'}}></div>
      <div className='item' style={{gridArea: 'box-5'}}><ExpOne/></div>
      <div className='item' style={{gridArea: 'box-6'}}><ExpOne/></div>
      <div className='item' style={{gridArea: 'box-7'}}><EduCert/></div>
      <div className='item' style={{gridArea: 'box-8'}}><SkillOne/></div>
      <div className='item' style={{gridArea: 'box-9'}}></div>
      <div className='item' style={{gridArea: 'box-10'}}><SkillTwo/></div>
      <div className='item' style={{gridArea: 'box-11'}}><SkillTwo/></div>
      <div className='item' style={{gridArea: 'box-12'}}></div>
    </div>
  )
}


export default App