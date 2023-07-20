import React from 'react'
import { Container, Row, Col, Tab, Nav, TabContainer, Tabs } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import reactIcon from "../assets/img/react.icon.png";
import nodeIcon from "../assets/img/node.icon.png";
import javaIcon from "../assets/img/javaIcon.png";
import Carousel from 'react-multi-carousel';
import TrackVisibility from 'react-on-screen';
import "react-multi-carousel/lib/styles.css";

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import pythonIcon from "../assets/img/pythonIcon.png";


function SpecificSkill() {

  const languages = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 23 },
      items: 1
    },
    
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



     return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}



 {/* <div>
                      <div className="row">
                          <div className="col-12">
                              <div className="skill-bx wow zoomIn">
                                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                      <div className="item">
                                          <img src={javaIcon} alt="Image" style={{ width: '100px', height: 'auto' }}/>
                                          <h5>Java</h5>
                                      </div>
                                      <div className="item">
                                          <img src={nodeIcon} alt="Image" />
                                          <h5>Node</h5>
                                      </div>
                                      <div className="item">
                                          <img src={reactIcon} alt="Image" />
                                          <h5>React</h5>
                                      </div>
                                      <div className="item">
                                          <img src={pythonIcon} alt="Image" style={{ width: '250px', height: 'auto',  marginTop: '20px' }}/>
                                          <h5>Python</h5>
                                      </div>
                                  </Carousel>
                              </div>
                          </div>
                      </div>
                  </div> */}
                 