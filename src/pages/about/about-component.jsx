
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.jpg"
import Button from "react-bootstrap/Button";

import './about.style.css';

const About = () => {
    return (
        <div id='about'>
               <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
           <Container>
               <Row className="pt-3 pb-5 align-items-center">

                   <Col xs={12} md={6}>
                       <Row>
                       <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid  />

                       </Row>

                   </Col>
                   <Col xs={12} md={6}>
                       <Row className=" align-items-start p-2 my-details rounded">
                           <p>Hi there! <strong>I am Muhammad Abbas</strong></p>
                           <p>

                           Technically sophisticated Software Engineer + 13 years of experience in the full software development, Web Development, Database Analysis and Design lifecycle – from concept through delivery of next-generation applications and customizable solutions.
Strong professional background creating and devising applications in strong coordination with developer teams, expert in advising junior programmers, consulting with clients, proposing business solutions, troubleshooting, and handling projects.
Expert in advanced development methodologies, Database Analysis & Design, tools and processes contributing to the design and rollout of cutting-edge software applications.
Possess acute knowledge including Software Development Life Cycle (SDLC), architecture, software engineering, implementation, and testing.
Refined communicator can effectively collaborate with colleagues, and management and the ability to translate leadership vision into executable plans for teams to follow.

                           </p>
                           <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1_xEEmRskmFqQl0fieCr3ea9qOuLeW183/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/abbasderawall/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/muhammad-abbas-khan/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://join.skype.com/invite/lMvLAl2I4jB7" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-primary">
                        Skype
                      </Button>
                    </a>
                  </div>
                </Col>
                       </Row>

                   </Col>
               </Row>


           </Container>
        </div>
        </div>
    )
}

export default About
