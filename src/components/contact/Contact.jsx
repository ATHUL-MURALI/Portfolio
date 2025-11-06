import './Contact.css'
import pf from '../../assets/portf/leetcode.svg'
const Contact = () => {
    return (
        <div className='Contact__container'>
            <div className='Contact__container_in'>
                <div className='Contact__container_inside'>
                    <div className='Contact__container-box'>
                        <div className='Contact__content'>
                            <div className='Contact__boxbox'>
                                <img src={pf} alt="error" />
                                <h1 id='s10'>Palakkad, Kerala, India</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf} alt="error" />
                                <h1 id='s10'>Open to work</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf} alt="error" />
                                <h1 id='s10'>+91-8848687421</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf} alt="error" />
                                <h1 id='s10'>APJ Abdul Kalam Technological University</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf} alt="error" />
                                <h1 id='s10'>athul.t.murali@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Contact__button_box'>
                    <div className='Contact__button'>
                        <img src={pf} alt="error" />
                        <h1>Email Me</h1>
                    </div>
                    <div className='Contact__button'>
                        <img src={pf} alt="error" />
                        <h1>WhatsApp Me</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact