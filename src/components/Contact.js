import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import Confetti from "./Confetti";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [phrase, setPhrase] = useState('');

  const form = useRef();



  const formInitialDetails = {
    firstName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        //       setIsSubmitted(true);

    
  
      emailjs.sendForm('service_emk0zld', 'template_6qk8leb', form.current, 'JYekA6RRO_NUM_RsN')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            setIsSubmitted(true);
            alert('Message sent successfully');
      
      e.target.reset();
      const confettiTimer = setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
            
     

      
            
        }, (error) => {
          console.log("message NOT SENT");

            console.log(error.text);
        });
       
    };
    
    //router.push({pathname})
    // e.preventDefault();
    // setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
  

  return (
    <section className="contact" id="connect">
      <Container>
   
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
              
                <form ref={form} onSubmit={handleSubmit}>
                <Row>

                <Col size={12} sm={6} className="px-1">
                <label>Name</label>
                    <input type="text" name="user_name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                <label>Email</label>
                    <input type="email" name="user_email" />
                </Col>
                <Col size={12} className="px-1">
                <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </Col>
             
                </Row>
                 
                </form>
                {isSubmitted && <Confetti show={isSubmitted}/>}
              
                  {/* <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value="Send"  placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row> */}
                {/* </form> */}

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}