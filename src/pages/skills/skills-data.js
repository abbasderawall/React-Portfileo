import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_SASS from "../../assets/img/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";

import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";

import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";

import L_PYTHON from "../../assets/img/skills/python.svg";
import L_ASPCore from "../../assets/img/skills/ASPCore.svg";
import L_ASPMVC from "../../assets/img/skills/ASPMVC.svg";
import L_adonet from "../../assets/img/skills/adonet-.jpg"
import L_CSharp from "../../assets/img/skills/CSharp.jpg"

import L_window from "../../assets/img/skills/window.jpg"
import L_Setup from "../../assets/img/skills/setup.png"
import L_VS from "../../assets/img/skills/visual.jpg"
import L_VSCode from "../../assets/img/skills/vscode.png"
import L_MSAzure from "../../assets/img/skills/MSAzure.png"
import L_xml from "../../assets/img/skills/xml-2.png"
import L_AJAX from "../../assets/img/skills/AJAX-Logo.svg";
import L_perforce from "../../assets/img/skills/perforce.webp";
import L_DevOps from "../../assets/img/skills/DevOps.png";
import MicsoftLogo from '../../assets/img/skills/microsoft-logo-svg-vector.svg'


export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    // {
    //   link: "https://sass-lang.com/",
    //   imgAltText: "Sass",
    //   imgSrc: L_SASS,
    //   skillName: "Sass",
    // },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://redux.js.org/",
      imgAltText: "Redux",
      imgSrc: L_REDUX,
      skillName: "Redux",
    },
    {
      link: "https://reacttraining.com/react-router/",
      imgAltText: "React Router",
      imgSrc: L_REACT_ROUTER,
      skillName: "React Router",
    },
    // {
    //   link: "https://material-ui.com/",
    //   imgAltText: "Material-UI",
    //   imgSrc: L_MATERIALUI,
    //   skillName: "Material-UI",
    // },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_REACT_BOOTSTRAP,
      skillName: "React Bootstrap",
    },
    {
      link: "https://styled-components.com/",
      imgAltText: "styled-components",
      imgSrc: L_STYLED_COMPONENTS,
      skillName: "styled-components",
    },
    
  ],
 

  backend: [
    // {
    //   link: "https://nodejs.org/en/",
    //   imgAltText: "ASP.NET Core",
    //   imgSrc: L_NODE_JS,
    //   skillName: "Node.js",
    // },
       {
      link: "https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core",
      imgAltText: "ASP.NET Core",
      imgSrc: L_ASPCore,
      skillName: "ASP.NET Core",
     },
     {
      link: "https://dotnet.microsoft.com/apps/aspnet/mvc",
      imgAltText: "ASP.NET MVC",
      imgSrc: L_ASPMVC,
      skillName: "ASP.NET MVC",
     },
    {
      link: "https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/",
      imgAltText: "ADO.NET",
      imgSrc: L_adonet,
      skillName: "ADO.NET",
    },
    {
      link: "",
      imgAltText: "Window Services",
      imgSrc: L_window,
      skillName: "Window Services",
    },
    {
      link: "https://docs.microsoft.com/en-us/aspnet/core/",
      imgAltText: "Web API",
      imgSrc: L_ASPCore,
      skillName: "Web API",
    },
    {
      link: "",
      imgAltText: "MSI",
      imgSrc: L_Setup,
      skillName: "MSI Setup",
    },
    {
      link: "https://azure.microsoft.com/en-us/",
      imgAltText: "MSAzure",
      imgSrc: L_MSAzure,
      skillName: "MS Azure",
    },
    {
      link: "https://visualstudio.microsoft.com/",
      imgAltText: "Visual Studio",
      imgSrc: L_VS,
      skillName: "Visual Studio",
    },

    {
      link: "https://visualstudio.microsoft.com/",
      imgAltText: "Visual Code",
      imgSrc: L_VSCode,
      skillName: "Visual Code",
    },
  ],
  hostingPlatforms: [
   
    {
      link: "https://azure.microsoft.com/en-us/",
      imgAltText: "MSAzure",
      imgSrc: L_MSAzure,
      skillName: "MS Azure",
    },
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
 
  ],
  programmingLanguages: [
    {
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      imgAltText: "Golang",
      imgSrc: L_CSharp,
      skillName: "C#",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: L_TYPESCRIPT,
      skillName: "TypeScript",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: L_PYTHON,
      skillName: "Python",
    },
    {
      link: "",
      imgAltText: "XML",
      imgSrc: L_xml,
      skillName: "XML",
    },
    {
      link: "",
      imgAltText: "AJAX",
      imgSrc: L_AJAX,
      skillName: "AJAX",
    },

    {
      link: "",
      imgAltText: "SQL",
      imgSrc: L_MSSQL,
      skillName: "SQL",
    },
    
  ],
  framework: [
   
    {
   link: "https://nodejs.org/en/",
  imgAltText: "NodeJs",
   imgSrc: L_NODE_JS,
   skillName: "Node.js",
 },
 {
   link: "https://dotnet.microsoft.com/download/dotnet-framework/",
   imgAltText: ".NET Framework",
   imgSrc: MicsoftLogo,
   skillName: ".NET Framework",
 },
 {
   link: "https://dotnet.microsoft.com/download/dotnet-framework/",
   imgAltText: ".NET CORE",
   imgSrc: MicsoftLogo,
   skillName: ".NET CORE",
 },
 {
   link: "https://dotnet.microsoft.com/download/dotnet-framework/",
   imgAltText: "EntityFramework",
   imgSrc: MicsoftLogo,
   skillName: "EntityFramework",
 },
 {
   link: "https://dotnet.microsoft.com/download/dotnet-framework/",
   imgAltText: "EntityFrameworkCore",
   imgSrc: MicsoftLogo,
   skillName: "EntityFrameworkCore",
 },

],
  databases: [
   
    {
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MONGODB,
      skillName: "MongoDB",
    },
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
    {
      link: "https://azure.microsoft.com/en-us/",
      imgAltText: "DevOps",
      imgSrc: L_DevOps,
      skillName: "DevOps",
    },   
    {
      link: "https://www.perforce.com/",
      imgAltText: "P4",
      imgSrc: L_perforce,
      skillName: "P4",
    },
    
  ],
};