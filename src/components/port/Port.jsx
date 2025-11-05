import './Port.css'
import pf from '../../assets/portf/leetcode.svg' 
const Port = () => {
    return (
        <div className='Port__container'>
            <div className='Port__container-box'>
                <div className='Port__heading'>
                    <p>Languages & Frameworks</p>
                </div>
                <div className='Port__content'>
                    <div className='Port__boxbox'>
                        <img src = {pf} alt="error" />
                        <h1>Linkdin</h1>
                    </div>
                    <div className='Port__boxbox'>
                        <img src = {pf} alt="error" />
                        <h1>Github</h1>
                    </div>
                    <div className='Port__boxbox'>
                        <img src = {pf} alt="error" />
                        <h1>Stack Overflow</h1>
                    </div>
                    <div className='Port__boxbox'>
                        <img src = {pf} alt="error" />
                        <h1>LeetCode</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Port