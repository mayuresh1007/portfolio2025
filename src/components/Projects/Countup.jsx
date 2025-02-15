import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

export const Countup = () => {
  const countUpRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 2,
    end: 30,
    duration: 3,
    // onEnd: () => reset(),
  });

//   if (inView) {
//     start();
//   }
  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <Container fluid ref={ref} className="d-flex flex-column align-items-center justify-content-center text-center w-100">
      {/* <Row className="justify-content-center mb-3">
        <Col xs={12} className="fw-bold fs-4 purple">Project Completed Till Date</Col>
      </Row> */}
      <Row className="justify-content-center">
        <Col xs={12} md={12} className="countup display-4 fw-bold rounded " >
          <span ref={countUpRef} />+
        </Col>
      </Row>
    </Container>
  );
};
