import React from 'react';
import eamiljs from 'emailjs-com';
import './Contact.css';
import contactImg from './../img/contact.jpg';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        eamiljs.sendForm('service_u3usu6p','template_m292snr',e.target,
        'user_sm8Qa80LkYtoyFUJUSB61'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }

    return (
        <div className="contact  component__space" id="Contact">
          <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for web development work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801734796903</strong> or email <strong>sanzidasuchi356@gmail.com</strong></p>
                        </div>
                        <div className="input__box" onSubmit={sendEmail}>
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>  
        </div>
    )
}
