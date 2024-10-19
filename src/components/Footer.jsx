import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { forwardRef } from 'react';


const Footer = forwardRef ((props,ref) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_67jnrae", "template_v2qnmlb", form.current, {
        publicKey: "lSZze6r-1SD-8hyuw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true);  
          form.current.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
};
  return (
    <>
      <div className="container border" ref={ref} id="Contact">
        <h5>
          I'd love if you reached out to me.Even it's just to say 'Hey!'.Don't
          hesitate! Drop me a line and I'II get back to you ASAP!
        </h5>
        <p>Write me a Message</p>

        <form ref={form} onSubmit={sendEmail} >
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <input name="user_name" type="text" className="form-control" placeholder="Enter your name" fdprocessedid="oj5ab3h"/>
            <input name="user_email" type="email" className="form-control" placeholder="Enter your email" fdprocessedid="oj5ab3h"/>
            <textarea name="message" className="form-control row-5" placeholder="Enter you message"/>
            <button className="btn btn-primary" type="submit" value="send"fdprocessedid="ykg5ln">
              {messageSent ? "Sent!" : "Send"}
            </button>
          </div>
        </form>
        {messageSent && <p className="mt-2 text-success">Message sent successfully!</p>}
      </div>
      <center style={{marginLeft:"40%"}}>
        <ul
          className="nav justify
    -content-center border-bottom pb-3 mb-3 "
        >
          <h3 style={{ color: "rgba(0,0,0,0.6)" }}>
            <marquee behavior="20" direction="left" width="100%" style={{marginTop:"10px"}}>
              This website is created by Aditya Verma.
            </marquee>
          </h3>
        </ul>
      </center>
    </>
  );
});
export default Footer;
