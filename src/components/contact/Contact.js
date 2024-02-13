import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () =>{

    const form = useRef();
        
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xr9y46r', 'template_087twrm', form.current, 'DwOLjlywv15YPkV4l')
        
        e.target.reset()
    };

    return(
        <section id='contact'>
            <h5>Contacto</h5>
            <h2>Contáctame</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>zeltzin.rom96@gmail.com</h5>
                        <a target='blank'  href="mailto:zeltzin.rom96@gmail.com">Enviar Mensaje</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>yaki-romero</h5>
                        <a target='blank' href="https://www.linkedin.com/in/yaki-romero/">Enviar Mensaje</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>5620278424</h5>
                        <a target='blank' href="https://api.whatsapp.com/send?phone=+5620278424">Enviar Mensaje</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;