
import './App.css';
//Components
import React from "react";
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

const App=() => {
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
    </div>
  );
}

export default App;
