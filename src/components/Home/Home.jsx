
import React from "react";
import homeLogo from "../../assets/home-main-bg1.png";
import ParticleComponent from "../ParticleComponent";
import Type from "./Type";
import myImg from "../../assets/avatar.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import useDocumentTitle from "../Hooks/useDocumentTitle";
function Home() {
  useDocumentTitle("Home | Mayuresh");
  return (
    <>
      <div className="container-fluid home-section" >
        <ParticleComponent />
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: "15px" }} className="heading-name">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">MAYURESH</strong>
              </h1>
              <div style={{ padding: "49px", textAlign: "left" }}>
                {/* Replace Type with your typewriter component */}
                <span id="typewriter-text">I’m a software Developer!</span>
                <Type />
              </div>
            </div>
            <div className="col-md-5" style={{ paddingBottom: "20px" }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </Tilt>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 home-about-description">
              <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like{" "}
                <i>
                  <b className="purple">Javascript and React.</b>
                </i>
                <br />
                <br />
                My field of interest is building new{" "}
                <i>
                  <b className="purple">Web Technologies and Products</b> and
                  also in areas related to{" "}
                  <b className="purple">Artificial Intelligence.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and{" "}
                <i>
                  <b className="purple">Modern Javascript Libraries</b>
                </i>{" "}
                like <b className="purple">React.js and Next.js</b>.
              </p>
            </div>
            <div className="col-md-4 myAvtar">
              <div>
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 home-about-social mt-2 text-center">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect</span> with me
              </p>
              <ul className="home-about-social-links list-inline">
                <li className="social-icons list-inline-item">
                  <a
                    href="https://github.com/mayuresh1007/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub  size={24} className="mb-1"/>
                  </a>
                </li>
                <li className="social-icons list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/mayuresh-kumbhar/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn size={24} className="mb-1"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
