import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../ParticleComponent";
import ak from "../../assets/Projects/ak.png";
import chatbot from "../../assets/Projects/chatbot.png";
import portfolio from "../../assets/Projects/portfolio.png";
import news from "../../assets/Projects/news.png";
import todo from "../../assets/Projects/todo.png";
import ecom from "../../assets/Projects/ecom.png";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import { Countup } from "./Countup";

function Projects() {
  useDocumentTitle("Projects | Mayuresh");
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Countup/>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="The News app Samachar"
              description="News app Global News Coverage: Access to a vast array of global news sources. Bharat News Coverage: In-depth reporting on Indian news, culture, and politics. Personalized News Feed: Tailored content based on user preferences. Search Functionality with Debouncing."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://samachars.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chat bot on own data | RAG"
              description="Chat bot which is trained of the own data that will give any answers based on uploaded data"
              demoLink="https://genairag-442507.el.r.appspot.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="e-commerce clone"
              description="Creating an e-commerce website clone app project typically involves replicating the features and functionality of an existing e-commerce platform, often with some customizations."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://ecomm-clonee.netlify.app/products"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal portfolio app"
              description="Experience innovation at its finest with my Web Dev Portfolio app, meticulously crafted using the dynamic capabilities of React.js and the sleek design principles of Tailwind CSS. This interactive platform showcases my journey in web development, featuring a collection of diverse projects that highlight my proficiency in creating captivating user interfaces and seamless functionality."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://mayuresh1007.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ak}
              isBlog={false}
              title="MakeUp Artist website"
              description="Designed, developed, and launched a dynamic and visually captivating makeup artist website, GlamourVue, to showcase a diverse range of makeup artistry services and foster client engagement. Leveraged a user-centric approach to create an immersive online platform that highlighted the fusion of creativity and technical skill in the realm of beauty enhancement."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://akshatakumbhar98.github.io/akshatakumbhar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Basic utility app"
              description="Todo is a powerful and intuitive todo app designed to help you seamlessly organize your life, boost productivity, and manage tasks with ease. With its sleek and user-friendly interface, TaskMinder empowers you to stay on top of your commitments, prioritize effectively, and achieve your goals, all while eliminating the clutter and stress of daily life."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://mayuresh1007.github.io/todos/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Youtube clone | Video streaming app"
              description="Introducing our ReactTube app, a cutting-edge YouTube clone developed using React.js, powered by the YouTube Public API v3, and enhanced with the sleek styling of Tailwind CSS. With ReactTube, users can dive into an immersive video streaming experience akin to YouTube, exploring an extensive library of content seamlessly fetched from the YouTube API."
              ghLink="https://github.com/mayuresh1007/Youtube-clone-react"
              
            />
          </Col> */}
          
        </Row>
      </Container>
      
    </Container>
  );
}

export default Projects;
