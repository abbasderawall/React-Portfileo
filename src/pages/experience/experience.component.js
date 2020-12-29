
import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_EMClogo from "../../assets/img/experience/EMClogo.svg";
import Tilt from "react-tilt";
import "./experience.style.css";

export class Experience extends Component {
    render() {
        return (
            <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                      <Card.Img variant="top" className="img-resize" src={L_EMClogo} alt="Emcentrix logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Senior Software Engineer</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                          <br />
                          <strong>Languages & Technologies:</strong> ASP.NET Core, ASP.NET MVC, WebForm,DOTNET, EntityFramework, React JS, C#, MS-SQL, JavaScript,JQuery 
                          <br />
                          <strong>Duration:</strong> May 2013 - Present
                          <br/>
                          <strong> Description </strong>
                          <ul className="text-left">
                            <li>Guide modernization and service-level enhancement initiatives spanning multiple facets of information systems, including data center operations, database analysis, application/web designing and development and technical documentation.
                            </li>
                            <li><strong>Application Designing & Development:</strong> Achieved high application performance and customer appreciation by performing system administration tasks like developing shell scripts that solved frequent application hangs. 
                            </li>

                            <li><strong>Web Development: </strong> Evaluated code validity and design to adhere industry standards and compatibility with browsers, search engines, devices, operating systems, and crafted supporting code for web applications & websites.
                            </li>

                            <li><strong>Testing Modules: </strong> Utilized skill assessment to perform responsibilities of a QA analysis such as creating test plans for modules, test cases, as well as performed functional, regression, and integration of different application.
                            </li>
                            <li><strong>Database Analysis & Design: </strong> Maintained data storage and access by designing physical databases, determine changes in database by studying project requirements; identifying database characteristics, such as location, and access method.
                            </li>

                            <li><strong>Project Documentation:</strong> Confirmed project requirements by studying user requirements; conferring with others on project team. Maintains client confidence and protects operations by keeping information confidential.
                            </li>
                            
      
                          </ul>
                          
                          
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </Container>
            </Jumbotron>
          </div>
        )
    }
}

export default Experience
