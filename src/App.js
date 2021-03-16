
import './App.css';
//Components
import React, { useEffect } from "react";
import Mynavbar from './components/navbar/navbar.component'
import MyCarousel from './components/carousel.components/my-carousel.compnent'
import TitleMessage from './components/title-message/title-message.compnent';
import ScrollDwon from './components/scroll-down/scroll-dwon.component';
import About from './pages/about/about-component';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import bgImages from './assets/img/parallex/background.webp';
import TechnicalSkills from './pages/skills/TechnicalSkills';
import Experience from './pages/experience/experience.component';
import Project from './components/Projects/Project.Component';
import FooterPanel from './components/footer/footer.component';
import ContactMe from './pages/contact/contact.form.component';



const App=() => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) { 
        window.fbq('init', '489527475541294');    
        window.fbq('track', 'PageView')
      }
    }
  });
  return (
    <div className="App" style={{ position: "relative" }}>
       
     <Mynavbar/>
     
     <MyCarousel />
     <TitleMessage />
     <ScrollDwon />
     <div>
        <Parallax
          blur={{ min: -1000, max: 1000 }}
          bgImage={bgImages}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
              <About/>
              </Fade>
            </Container>
          </div>
        </Parallax>

       
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TechnicalSkills/>
        </Slide>
      </Container>
    
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience/>
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Project />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactMe />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
     
    </div>
  );
}

export default App;
