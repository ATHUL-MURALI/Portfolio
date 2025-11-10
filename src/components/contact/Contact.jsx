import './Contact.css'
import pf1 from '../../assets/contact/location.svg'
import pf2 from '../../assets/contact/clock.svg'
import pf3 from '../../assets/contact/phone.svg'
import pf4 from '../../assets/contact/edu.svg'
import pf5 from '../../assets/contact/email.svg'
import pf6 from '../../assets/contact/whatsapp.svg'
const Contact = () => {
    const do1 = () => {
        console.log("1clicked")
    }
    return (
        <div className='Contact__container'>
            <div className='Contact__container_in'>
                <div className='Contact__container_inside'>
                    <div className='Contact__container-box'>
                        <div className='Contact__content'>
                            <div className='Contact__boxbox'>
                                <img src={pf1} alt="error" />
                                <h1>Palakkad, Kerala, India</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf2} alt="error" />
                                <h1>Open to work</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf3} alt="error" />
                                <h1>+91-8848687421</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf4} alt="error" />
                                <h1>APJ Abdul Kalam Technological University</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf5} alt="error" />
                                <h1>athul.t.murali@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Contact__button_box'>
                    <button onClick={do1}>
                        <div className='Contact__button'>
                            <img src={pf5} alt="error" />
                            <h1>Email Me</h1>
                        </div>
                    </button>
                    <button onClick={do1}>
                        <div className='Contact__button'>
                            <img src={pf6} alt="error" />
                            <h1>WhatsApp <span className="optional">Me</span></h1>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact