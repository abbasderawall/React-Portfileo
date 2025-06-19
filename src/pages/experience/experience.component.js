import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_EMClogo from "../../assets/img/experience/EMClogo.svg";
import L_logofamz from "../../assets/img/experience/logofamz.svg";
import L_logoDIT from "../../assets/img/experience/logoDIT.svg"
import Tilt from "react-tilt";
import "./experience.style.css";
import("react-facebook-pixel");

export class Experience extends Component {
  
    render() {
        return (
            <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            
            {/* Experience 1 - Welbee */}
            <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <a className="text-dark text-decoration-none" href="https://welbee.co.uk/" target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" className="img-resize" src="https://welbee.co.uk/wp-content/uploads/2025/01/Welbee-New-Logo-copy.png" alt="Welbee logo" />
                            </a>
                      
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Tech Lead - Senior Full-Stack Developer</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          <br />
                          <strong>Languages & Technologies:</strong> .NET Core APIs, React JS,Next JS, AWS Cloud, GCP, BigQuery, DataForm, MySQL, Microservices
                          <br />
                          <strong>Duration:</strong> March 2021 - Present
                          <br/>
                          <strong>Location:</strong> Liverpool, UK (Remote)
                          <br/>
                          <strong> Description </strong>
                          <ul className="text-left">
                            <li>Developed and maintained the company's technical infrastructure and products, performing additional relevant duties as agreed with the Company leadership team to meet business needs.
                            </li>
                            <li><strong>Production Application Management:</strong> Worked on Welbee's production app and products running on a day-to-day basis and led the work to enhance and develop the products.
                            </li>
                            <li><strong>Technical Leadership:</strong> Led development initiatives and provided technical guidance to the development team while ensuring high-quality deliverables.
                            </li>
                            <li><strong>Cloud Infrastructure:</strong> Managed and optimized AWS cloud infrastructure to ensure scalability and performance of applications.
                            </li>
                            <li><strong>Microservices Architecture:</strong> Designed and implemented microservices-based solutions to improve system modularity and maintainability.
                            </li>
                          </ul>
                          
                          
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </Container>
            </Jumbotron>

            {/* Experience 2 - Emcentrix */}
            <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <a className="text-dark text-decoration-none" href="https://www.emcentrix.com/" target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" className="img-resize" src={L_EMClogo} alt="Emcentrix logo" />
                            </a>
                      
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
            {/* Experience 3 - Famz Solutions */}
            <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <a className="text-dark text-decoration-none" href="http://www.famzsolutions.com/" target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" className="img-resize" src={L_logofamz} alt="Emcentrix logo" />
                            </a>
                      
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Software Engineer</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                          <br />
                          <strong>Languages & Technologies:</strong> ASP.NET, WebForm, DOTNET, C#, MS-SQL, ADO.NET, JavaScript,JQuery 
                          <br />
                          <strong>Duration:</strong> Jan 2013 - April 2013
                          <br/>
                          <strong> Description </strong>
                          <ul className="text-left">
                            <li>Conceptualized, developed and integrated new system and software, resulting in increasing efficiency record-keeping, higher
productivity as well as accuracy and effectiveness.
                            </li>
                            <li><strong>Application Designing & Development:</strong> Designed and tested applications enabling organizations and individuals to work
effectively. Consulted with clients, writing code, solving compatibility issues, updating development process records,
eliminating technical problems, and collaborating with the development team.
                            </li>

  

                            <li><strong>Testing Modules: </strong>  Directed all functions and activities associated with compliance to resource requirements for Testing &
Quality Assurance to ensure appropriate balance between tactical and strategic demands.
                            </li>
                            <li><strong>Database Analysis & Design: </strong> Competed technical challenges related to the test cases and test scripts derived from the
system documentation and technical functional specifications.
                            </li>

                           
                            
      
                          </ul>
                          
                          
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </Container>
            </Jumbotron>


              {/* Experience 4 - Dera IT Solutions */}
              <Jumbotron className="jumbo-style">
              <Container>
                <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                    <a className="text-dark text-decoration-none" href="http://deraitsolutions.com/" target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" className="img-resize" src={L_logoDIT} alt="Emcentrix logo" />
                            </a>
                      
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Jr.Software Engineer</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                          <br />
                          <strong>Languages & Technologies:</strong> ASP.NET, WebForm, DOTNET, C#, MS-SQL, ADO.NET, JavaScript,JQuery 
                          <br />
                          <strong>Duration:</strong> December 2011 - December 2012
                          <br/>
                          <strong> Description </strong>
                          <ul className="text-left">
                            <li>Designed and implemented software systems; updated software systems, making improvement suggestions, collaborated with
analysts and designers, testing applications, writing training manuals, and making sure projects accomplished in time and within
budget.

                            </li>
                            <li><strong>Application Designing & Development:</strong> Designed and developed new applications and all Peripheral processes.

                            </li>

  

                            <li><strong>Learn new technologies: </strong>   Acquired and utilized knowledge of emerging technologies to utilize in engineering.

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
