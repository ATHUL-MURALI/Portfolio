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
// import t1 from '../../assets/buttons/toggleSwitch.svg'
// import b from '../../assets/buttons/vector.svg'
const SideBar = () => {
    return (
        <>
            <div className='SideBar__container'>
                <div className='SideBar__container-box'>
                    <div className='SideBar__content1'>
                        <img src={b1} alt="error" />
                        <div className='SideBar__content2'>
                            <div className='SideBar__content3'>
                                <img src={b2} alt="error" />
                                <img src={b3} alt="error" />
                                <img src={b4} alt="error" />
                                <img src={b5} alt="error" />
                                <img src={b6} alt="error" />
                            </div>
                            <div className='SideBar__content4'>
                                <img src={b7} alt="error" />
                                <img src={b8} alt="error" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SideBar__toggle'>
                <img src={t1} alt="error" />
            </div>
        </>
    )
}

export default SideBar