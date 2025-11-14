import './Contact.css'
import pf1 from '../../assets/contact/loc.svg'
import pf2 from '../../assets/contact/clock.svg'
import pf3 from '../../assets/contact/phone.svg'
import pf4 from '../../assets/contact/edu.svg'
import pf5 from '../../assets/contact/email.svg'
import pf6 from '../../assets/contact/whatsapp.svg'
const Contact = () => {
    const do1 = () => {
        const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=athul.t.murali@gmail.com&su=Hello%20Athul&body=Hi%20Athul,%0D%0A%0D%0AI'd%20like%20to%20connect%20regarding...";
        const mailtoUrl = "mailto:athul.t.murali@gmail.com?subject=Hello%20Athul&body=Hi%20Athul,%0D%0A%0D%0AI'd%20like%20to%20connect%20regarding...";

        try {
            window.open(gmailUrl, "_blank");
        } catch {
            window.location.href = mailtoUrl;
        }
    };



    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };



    const do2 = () => {
        const phoneNumber = "918848687421"
        const message = encodeURIComponent("Hi Athul!")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    }
    return (
        <div className='Contact__container'>
            <div className='Contact__container_in'>
                <div className='Contact__container_inside'>
                    <div className='Contact__container-box'>
                        <div className='Contact__content'>
                            <div className='Contact__boxbox'>
                                <img src={pf1} alt="error" onClick={() => copyToClipboard("Palakkad, Kerala, India")}/>
                                <h1>Palakkad, Kerala, India</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf2} alt="error" onClick={() => copyToClipboard("Open to work")}/>
                                <h1>Open to work</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf3} alt="error" onClick={() => copyToClipboard("+91-8848687421")}/>
                                <h1>+91-8848687421</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf4} alt="error" onClick={() => copyToClipboard("APJ Abdul Kalam Technological University")}/>
                                <h1>APJ Abdul Kalam Technological University</h1>
                            </div>
                            <div className='Contact__boxbox'>
                                <img src={pf5} alt="error" onClick={() => copyToClipboard("athul.t.murali@gmail.com")}/>
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
                    <button onClick={do2}>
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