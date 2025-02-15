

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const cursorRef = useRef(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    // Ensure cursor moves only if ref is available
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        <div className="custom-cursor" ref={cursorRef}></div>
        {/* Ensure Preloader doesn't break on undefined load */}
        {load && <Preloader load={load} />}
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;


// import React, { useState, useEffect, useRef } from "react";
// import Preloader from "./components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// // import Resume from "./components/Resume/ResumeNew";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
// import ScrollToTop from "./components/ScrollToTop";
// // import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       const cursor = cursorRef.current;

//       if (cursor) {
//         cursor.style.left = `${clientX}px`;
//         cursor.style.top = `${clientY}px`;
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <div>
//         <div className="custom-cursor" ref={cursorRef}></div>
//         <Preloader load={load} />
//         <div className="App" id={load ? "no-scroll" : "scroll"}>
//           <Navbar />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/project" element={<Projects />} />
//             <Route path="/about" element={<About />} />
//             {/* <Route path="/resume" element={<Resume />} /> */}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
