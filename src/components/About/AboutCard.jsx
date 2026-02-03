import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm <span className="purple">Mayuresh</span> from
            <span className="purple"> Sangli, India</span> with
            <span className="purple"> 4+ years of experience</span> in
            software development.
            <br />
            Currently, I work as a software developer at
            <span className="purple"> samkhya.ai</span> (since May 2025), and previously, I
            contributed my skills at{" "}
            <span className="purple"> Datartinfotech</span> and{" "}
            <span className="purple"> FirstCry.com</span>. I’m deeply passionate
            about technology, continuously learning new skills, and applying
            them to solve real-world problems.
            <br />
            <br />
            Beyond coding, I enjoy engaging in other creative and intellectually
            stimulating activities that keep me inspired!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Audiobooks
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            {/*<li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> 
          <footer className="blockquote-footer">Soumyajit</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
