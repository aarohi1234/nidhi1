import React from "react";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Contact.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
export default function Contact() {
  function handleSubmit(e) {
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }

  return (
    <div className="contactContainer" id="contact">
      <h1 className="headingC">Let's Connect</h1>
      <hr className="lineC" />
      <p className="paraC">
        Get in touch with me through below links and build something together.{" "}
      </p>

      <div className="formBox">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          action="https://getform.io/f/e427252e-2c4c-45ba-a1f4-b1a3c9879201"
          className="Form"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="inputBox"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="inputBox"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            required
            className="textArea"
          ></textarea>

          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
      </div>

      <div className="cBox">
        <div className="commonCBox">
          <a
            href="https://www.linkedin.com/in/nidhi1234/"
            target="_blank"
            rel="noreferrer"
            f
          >
            <AiFillLinkedin className="iconss" />
          </a>
          <p>
            <a
              href="https://www.linkedin.com/in/nidhi1234/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <TbExternalLink />
            </a>
          </p>
        </div>
        <div className="commonCBox">
          <a
            href="https://github.com/aarohi1234"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="iconss" />
          </a>
          <p>
            <a
              href="https://github.com/aarohi1234"
              target="_blank"
              rel="noreferrer"
            >
              Github <TbExternalLink />
            </a>
          </p>
        </div>
        <div className="commonCBox">
          <AiOutlineMail className="iconss" />
          <p>nidhiaarohi123@gmail.com</p>
        </div>
        <div className="commonCBox">
          <AiOutlineWhatsApp className="iconss" />
        
          <p>6299754449</p>
        </div>
      </div>
    </div>
  );
}