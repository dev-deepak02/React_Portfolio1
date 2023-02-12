import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1izyhce",
      "template_0l2ovfx",
      form.current,
      "hHqUaQ9i_DxAnOqdY"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>deepaksaw7003@gmail.com</h5>
            <a href="mailto:deepaksaw7003@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerFill className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>deepaksaw7003@gmail.com</h5>
            <a
              href="https://www.facebook.com/kumar.deep.1884787"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7631136331</h5>
            <a
              href="http://wa.me/917631136331?text=Hello+there!"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* ----- End of Contact option ----------- */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="number" name="number" placeholder="Your Mobile Number" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
