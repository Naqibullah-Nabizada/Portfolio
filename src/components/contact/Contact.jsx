import { GREEN } from "../../helpers/colors";

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from "react-toastify";

import './contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iia5rkd', 'template_ikjuu0k', form.current, 'hTazGD9-DeFzSa5sa')
            .then((result) => {
                if (result.status === 200) {
                    toast.success("Message send successfully.");
                }else{
                    toast.error("Try again");
                }
            });
        e.target.reset();
    };

    return (
        <section className="container my-3 my-md-5" id="contact">
            <h4 className="text-center mt-5 mb-2 my-md-5" style={{ color: GREEN }}>Contact Me</h4>
            <div className="col-12 col-md-10 offset-md-1 d-md-flex justify-content-md-around">

                <div className="col-10 offset-1 col-md-3 offset-md-0 d-md-flex flex-md-column">

                    <div className="card shadow-lg">
                        <MdOutlineEmail className="fs-2 text-white" />
                        <div className="card-title text-center mt-2">
                            <h6 className="card-text text-white">Email</h6>
                            <p className="text-white">Naqibullah1400@gmail.com</p>
                            <a href="mailto:naqibullah1400@gmail.com">Send email</a>
                        </div>
                    </div>

                    <div className="card shadow-lg">
                        <RiMessengerLine className="text-white fs-2" />
                        <div className="card-title text-center mt-2">
                            <h6 className="card-text text-white">Messenager</h6>
                            <p className="text-white">Naqibullah Nabizada</p>
                            <a href="https://m.me/Naqibullah.Nabizada" target={"_blank"} rel="noreferrer">Send message</a>
                        </div>
                    </div>

                    <div className="card shadow-lg">
                        <ImWhatsapp className="text-white fs-2" />
                        <div className="card-title text-center mt-2">
                            <h6 className="card-text text-white">Whatsapp</h6>
                            <p className="text-white">+93765066001</p>
                            <a href="https://api.whatsapp.com/send?phone=+93765066001" target={"_blank"} rel="noreferrer">Send message</a>
                        </div>
                    </div>
                </div>

                <div className="col-10 offset-1 col-md-7 my-auto">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your FullName" className="form-control mb-3" required />
                        <input type="email" name="email" placeholder="Your Email" className="form-control mb-3" required />
                        <textarea rows="10" name="message" placeholder="Your Message" className="form-control mb-3" required></textarea>
                        <input type="submit" value="Send" className="btn btn-primary d-block" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;