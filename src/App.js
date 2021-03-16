
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
import ReactPixel from 'react-facebook-pixel';
import {config} from '../src/config';
const advancedMatching = { em: 'abbas.derawall@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init(config.FACEBOOK_ACCOUNTID, advancedMatching, options);

ReactPixel.pageView(); // For tracking page view
//ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
//ReactPixel.trackSingle(config.FACEBOOK_ACCOUNTID, event, data); // For tracking default events.
//ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
//ReactPixel.trackSingleCustom(config.FACEBOOK_ACCOUNTID, event, data); // For tracking custo

const App=() => {

  
  
 useEffect(() => {
  const ReactPixel =  require('react-facebook-pixel');
  ReactPixel.default.init(config.FACEBOOK_ACCOUNTID);
  });

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (window.fbq != null) { 
            
  //       window.fbq('track', 'PageView')
  //     }
  //   }
  // });
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
