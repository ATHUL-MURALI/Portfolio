import './Port.css'
import pf1 from '../../assets/portf/Linkdin.svg' 
import pf2 from '../../assets/portf/github.svg' 
import pf3 from '../../assets/portf/stack-overflow.svg' 
import pf4 from '../../assets/portf/instagram.svg' 
// import pf4 from '../../assets/portf/leetcode.svg' 
const Port = () => {
    const do1 = () => {
        window.open("https://www.linkedin.com/in/athul-murali-t/", "_blank");
    }
    const do2 = () => {
        window.open("https://github.com/ATHUL-MURALI", "_blank");
    }
    const do3 = () => {
        window.open("https://stackoverflow.com/users/31841091/athul-murali-t", "_blank");
    }
    const do4 = () => {
        window.open("https://www.instagram.com/_atxul", "_blank");
    }
    // const do4 = () => {
    //     window.open("https://leetcode.com/u/ATHUL-MURALI-T/", "_blank");
    // }
    return (
        <div className='Port__container'>
            <div className='Port__container-box'>
                <div className='Port__heading'>
                    <p>Portfolio</p>
                </div>
                <div className='Port__content'>
                    <button id='min-con' onClick={do1}>
                    <div className='Port__boxbox'>
                        <img src = {pf1} alt="error" />
                        <h1>Linkdin</h1>
                    </div>
                    </button>
                    <button id='min-con' onClick={do2}>
                    <div className='Port__boxbox'>
                        <img src = {pf2} alt="error" />
                        <h1>Github</h1>
                    </div>
                    </button>
                    <button id='min-con' onClick={do3}>
                    <div className='Port__boxbox'>
                        <img src = {pf3} alt="error" />
                        <h1>Stack Overflow</h1>
                    </div>
                    </button>
                    <button id='min-con' onClick={do4}>
                    <div className='Port__boxbox'>
                        <img src = {pf4} alt="error" />
                        {/* <h1>LeetCode</h1> */}
                        <h1>Instagram</h1>
                    </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Port