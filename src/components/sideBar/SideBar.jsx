import './SideBar.css';
import b1 from '../../assets/buttons/icon1.svg'
import b2 from '../../assets/buttons/icon2.svg'
import b3 from '../../assets/buttons/icon3.svg'
import b4 from '../../assets/buttons/icon4.svg'
import b5 from '../../assets/buttons/icon5.svg'
import b6 from '../../assets/buttons/icon6.svg'
import b7 from '../../assets/buttons/icon7.svg'
import b8 from '../../assets/buttons/icon8.svg'
import t1 from '../../assets/buttons/t1.svg'
// import b from '../../assets/buttons/vector.svg'
const SideBar = () => {
    const do1 = () => {
        console.log("1clicked")
    }
    const do2 = () => {
        console.log("1clicked")
    }
    const do3 = () => {
        console.log("1clicked")
    }
    const do4 = () => {
        console.log("1clicked")
    }
    const do5 = () => {
        console.log("1clicked")
    }
    const do6 = () => {
        console.log("1clicked")
    }
    const do7 = () => {
        console.log("1clicked")
    }
    const do8 = () => {
        console.log("1clicked")
    }
    const do9 = () => {
        console.log("1clicked")
    }
    return (
        <>
            <div className='SideBar__container'>
                <div className='SideBar__container-box'>
                    <div className='SideBar__content1'>
                        <button onClick={do1}>
                            <img src={b1} alt="error" />
                        </button>
                        <div className='SideBar__content2'>
                            <div className='SideBar__content3'>
                                <button onClick={do2}>
                                    <img src={b2} alt="error" />
                                </button>
                                <button onClick={do3}>
                                    <img src={b3} alt="error" />
                                </button>
                                <button onClick={do4}>
                                    <img src={b4} alt="error" />
                                </button>
                                <button onClick={do5}>
                                    <img src={b5} alt="error" />
                                </button>
                                <button onClick={do6}>
                                    <img src={b6} alt="error" />
                                </button>
                            </div>
                            <div className='SideBar__content4'>
                                <button onClick={do7}>
                                    <img src={b7} alt="error" />
                                </button>
                                <button onClick={do8}>
                                    <img src={b8} alt="error" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SideBar__toggle'>
                <button onClick={do9}>
                    <img src={t1} alt="error" />
                </button>
            </div>
        </>
    )
}

export default SideBar