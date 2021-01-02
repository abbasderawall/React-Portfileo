import React, { Component } from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactPortfoleo from "../../assets/img/projects/Portfoleo.PNG";
import L_JP from "../../assets/img/projects/JP.PNG";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AspLog from "../../assets/img/skills/asp-net-logo1.svg";
import CSharp from "../../assets/img/skills/CSharp.svg"
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_AJAXLogo from "../../assets/img/skills/AJAX-Logo.svg";
import L_jquery from "../../assets/img/skills/icon_jquery.svg";
import L_ADONET from "../../assets/img/skills/adonet.svg";
import L_logoEntity from "../../assets/img/skills/logoEntity.svg";
import L_Survey from "../../assets/img/projects/Survey.PNG"
import L_School from "../../assets/img/projects/School.PNG"
import L_Quiz from "../../assets/img/projects/Quiz.PNG";
import L_EmialCenter from "../../assets/img/projects/EmialCenter.PNG";


// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";

import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import "../Projects/Project.style.css"
 class Project extends Component {
    render() {
        return (
            <div id="project">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Portfoleo */}
        <ImageEvent
            date="30/12/2020"
            className="text-center"
            text="Portfolio"
            src={L_ReactPortfoleo}
            alt="React Portfoleo"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my Portfolio created with ReactJS, Redux, Material UI, Styled-components, react-tilt, typewriter-effect, react-timeline, and Bootstrap.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          
                          <li>Using React, Redux and Material UI</li>
                          <li>View my projects</li>
                          <li>Professional Experience</li>
                          <li>Download Resume</li>
                          <li>Contact me</li>
                          <li>View my social media profiles</li> 
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                         
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://abbasderawall.github.io/React-Portfileo/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                {/* <UrlButton
                  href="https://github.com/abbasderawall/React-Portfileo/tree/master"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton> */}
              
              </div>
            </div>
          </ImageEvent>

          {/* Project: Survey */}
<ImageEvent
            date="1/01/2021"
            className="text-center"
            text="Employee Terminations Survey (Lee's MarketPlace)"
            src={L_Survey}
            alt="Lee"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><p>Developed employee termination survey for lee's markect place company to collect data from employee that who has resign from his job voluntarily  .
                            </p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
<li> Responsive UI design.</li>
<li> Dynamic Questionair</li>
<li> Admin Creat Questionair</li>
<li> Admin assign Survey to Employee</li>
<li> Admin Review Survey</li>



                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul> 
                         <li> <span className="p-2">
                              <Image
                                src={AspLog}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ASP.NET
                            </span></li>
                            
                         <li><span className="p-2">
                              <Image
                                src={CSharp}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C#.NET
                            </span></li>
                      
                         <li><span className="p-2">
                              <Image
                                src={L_ADONET}
                                alt="ADO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             ADO.NET
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_logoEntity}
                                alt="Entity"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            EntityFramework
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MSSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             MS SQL
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JAVASCRIPT
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_AJAXLogo}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            AJAX
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_jquery}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JQuery
                            </span></li>
                        
                        
                         <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://leesmarketplace.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: Job Posting */}
<ImageEvent
            date="1/03/2017"
            className="text-center"
            text="Job Posting"
            src={L_JP}
            alt="Job Posting"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><p>Steered efforts towards managing Internal job posts for company use, Post jobs, get applications, and hire staff from internal career center and maintain applicant activities. 
                        	Scheduled interview for an applicant, added interview Date Time Reminder in outlook, yahoo, Gmail calendar, Admin/Employer Record Applicant/interviewer answer and Rate them, a job offer to an applicant, etc.
                            Developed a system that enables applicants to create accounts before applying for any jobs. Submit an application with personal and education detail and also attach a Resume.
                            Applicant view submitted applications and maintain profile etc.
                            </p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
<li> Responsive UI design.</li>
<li> Hiring Criteria Definitions</li>
<li> Interview Checklists</li>
<li> Single or Multi-Company Careers Admin Users</li>
<li> Applicant Interview Scheduling</li>
<li> Add interviews to calendar (e.g., Outlook calendar)</li>
<li> Offer Letters</li>
<li> Hiring Metrics Reporting</li>
<li> Internal Candidates</li>
<li>	Employee Referrals</li>
<li>	Convert uploaded resumes to text for easier resume submission/indexing/searching | Display resume uploads for easy viewing without requiring download (e.g., https://crocodoc.com/).</li>
<li>	Testing/Assessment Integrations.</li>
<li>	Candidate groups/tagging for easy searching/filtering</li>
<li>	Shift user uploaded file storage to Azure.</li>
<li>	Widget Code for Positions</li>
<li>	XML files for Job Posting on Indeed & Glassdoor.</li>

                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul> 
                         <li> <span className="p-2">
                              <Image
                                src={AspLog}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ASP.NET
                            </span></li>
                            
                         <li><span className="p-2">
                              <Image
                                src={CSharp}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C#.NET
                            </span></li>
                      
                         <li><span className="p-2">
                              <Image
                                src={L_ADONET}
                                alt="ADO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             ADO.NET
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MSSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             MS SQL
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JAVASCRIPT
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_AJAXLogo}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            AJAX
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_jquery}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JQuery
                            </span></li>
                        
                        
                         <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://www.emcentrix.com/Careers/UserPortal/Jobs.aspx"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          {/* Project: School Administration System */ }
<ImageEvent
    date="1/5/2020"
    className="text-center"
    text="School Administration System"
    src={L_School}
    alt="School Administration System"
>
    <div className="d-flex justify-content-between flex-column mt-1">
        <div>
            <Accordion>
                <Card>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                    >
                        PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong><p>Developed a Applicant Tracking system for mypartnersolutions school administration, they are using ATS to posting a job on their own site as well as on other recruiting sites i.e Indeed, glassdoor to hring school staff,and also managing school staff etc.  
                            </p>
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                                <li> Applicant Taracking System.</li>
                                <li> Payroll & Time sheet Attendence.</li>
                                <li> Onboarding & Hiring Process.</li>
                                <li> New Hire Wellcome Letter</li>
                                <li> Benefits.</li>
                                <li> Off Boarding.</li>
                                <li> Responsive UI design.</li>
                                <li> Hiring Criteria Definitions</li>
                                <li> Interview Checklists</li>
                                <li> Single or Multi-School Careers Admin Users</li>
                                <li> Applicant Interview Scheduling</li>
                                <li> Add interviews to calendar (e.g., Outlook calendar)</li>
                                <li> Offer Letters</li>
                                <li> Hiring Metrics Reporting</li>
                                <li> Internal Candidates</li>
                                <li>Employee Referrals</li>
                                <li>Convert uploaded resumes to text for easier resume submission/indexing/searching | Display resume uploads for easy viewing without requiring download (e.g., https://crocodoc.com/).</li>
                                <li>Testing/Assessment Integrations.</li>
                                <li>Candidate groups/tagging for easy searching/filtering</li>
                                <li>Shift user uploaded file storage to Azure.</li>
                                <li>Widget Code for Positions</li>
                                <li>XML files for Job Posting on Indeed & Glassdoor as well.</li>

                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                                <li> <span className="p-2">
                                    <Image
                                        src={AspLog}
                                        alt="AspLog"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                              ASP.NET
                            </span></li>

                                <li><span className="p-2">
                                    <Image
                                        src={CSharp}
                                        alt="AspLog"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                              C#.NET
                            </span></li>

                                <li><span className="p-2">
                                    <Image
                                        src={L_ADONET}
                                        alt="ADO"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                             ADO.NET
                            </span></li>

                                <li><span className="p-2">
                                    <Image
                                        src={L_MSSQL}
                                        alt="MSSQL"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                             MS SQL
                            </span></li>
                                <li><span className="p-2">
                                    <Image
                                        src={L_JAVASCRIPT}
                                        alt="JavaScript"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                            JAVASCRIPT
                            </span></li>
                                <li><span className="p-2">
                                    <Image
                                        src={L_AJAXLogo}
                                        alt="AJAXLogo"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                            AJAX
                            </span></li>
                                <li><span className="p-2">
                                    <Image
                                        src={L_jquery}
                                        alt="AJAXLogo"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                            JQuery
                            </span></li>


                                <li>
                                    <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                              HTML5
                            </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                              CSS3
                            </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                        <Image
                                            src={L_BOOTSTRAP4}
                                            alt="Bootstrap 4"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                              Bootstrap 4
                            </span>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
        <div className="d-flex justify-content-between flex-nowrap text-center">
            <UrlButton
                href="https://hr-mepconnect.com/index.asp"
                target="_blank"
            >
                SEE LIVE
                </UrlButton>
        </div>
    </div>
</ImageEvent>

<ImageEvent
            date="1/02/2019"
            className="text-center"
            text="Test & Quiz Center"
            src={L_Quiz}
            alt="Lee"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><p>Developed a quiz module for the applicant recruitment process, internal hiring process, and also for employee performance measurement.
                            </p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
<li> Responsive UI design.</li>
<li> Dynamic Questionair</li>
<li> Multiple Choice Qustions' Answers</li>
<li> single Choice Qustions' Answers</li>
<li> True/False Qustions' Answers</li>
<li> Open endded Qustions' Answers</li>



                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul> 
                         <li> <span className="p-2">
                              <Image
                                src={AspLog}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ASP.NET
                            </span></li>
                            
                         <li><span className="p-2">
                              <Image
                                src={CSharp}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C#.NET
                            </span></li>
                      
                         <li><span className="p-2">
                              <Image
                                src={L_ADONET}
                                alt="ADO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             ADO.NET
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_logoEntity}
                                alt="Entity"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            EntityFramework
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MSSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             MS SQL
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JAVASCRIPT
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_AJAXLogo}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            AJAX
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_jquery}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JQuery
                            </span></li>
                        
                        
                         <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://emcentrix.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="24/04/2018"
            className="text-center"
            text="Email Center"
            src={L_EmialCenter}
            alt="Lee"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong><p>Developed an Email Center module for Employer/ Manager can manage and create multiple templates with attachment file send to employees for different jobs are assignment purpose. And also 
Created  windows service for the client to automatically emails alert in batch processing to employees, Employer and
managers if he/she or perform different activities (Task management, hire notes, etc.)
                            </p>
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
<li> Responsive UI design.</li>
<li> Windows Service for batch Processing</li>
<li> Multiple Tempaltes</li>
<li> Attachment of multiple files</li>
<li> Single & Multi send option</li>
<li> Email log repoting</li>



                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul> 
                         <li> <span className="p-2">
                              <Image
                                src={AspLog}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ASP.NET
                            </span></li>
                            
                         <li><span className="p-2">
                              <Image
                                src={CSharp}
                                alt="AspLog"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              C#.NET
                            </span></li>
                      
                         <li><span className="p-2">
                              <Image
                                src={L_ADONET}
                                alt="ADO"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             ADO.NET
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_logoEntity}
                                alt="Entity"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            EntityFramework
                            </span></li>

                            <li><span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MSSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             MS SQL
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JAVASCRIPT
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_AJAXLogo}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            AJAX
                            </span></li>
                            <li><span className="p-2">
                              <Image
                                src={L_jquery}
                                alt="AJAXLogo"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                            JQuery
                            </span></li>
                        
                        
                         <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://emcentrix.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          


        </Events>
      </Timeline>
    </div>
        )
    }
}

export default Project
