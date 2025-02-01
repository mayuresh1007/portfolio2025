import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container-fluid footer py-4">
      <div className="row">
        <div className="col-md-4 text-center my-3 mb-md-0 footer-copywright">
          <h6 className="text-light">Designed and Developed by Mayuresh</h6>
        </div>
        <div className="col-md-4 text-center my-3 mb-md-0 footer-copywright">
          <h6 className="text-light">Copyright © {year} Mayuresh</h6>
        </div>
        <div className="col-md-4 text-center footer-body">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mx-2">
              <a
                href="https://github.com/mayuresh1007/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaGithub size={20} />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a
                href="https://www.linkedin.com/in/mayuresh-kumbhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a
                href="mailto:codewithmayuresh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaEnvelope size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;



// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Mayuresh</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} Mayuresh</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/mayuresh1007/"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <AiFillGithub size={20} />
//               </a>
//             </li>
//             {/* <li className="social-icons">
//               <a
//                 href="https://twitter.com/Soumyajit4419"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiOutlineTwitter />
//               </a>
//             </li> */}
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/mayuresh-kumbhar/"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <FaLinkedinIn size={20} />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="mailto:codewithmayuresh@gmail.com"
//                 style={{ color: "white" }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <FaEnvelope size={20} />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;
