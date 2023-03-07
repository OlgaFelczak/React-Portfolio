import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from "../assets/img/nav-icon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2>Olga Felczak</h2>
          </Col>
          <Col
            size={12}
            sm={6}
            style={{ paddingTop: 16 }}
            className="text-center text-sm-end"
          >
            <div className="social-icon">
              <a href="https://linkedin.com/in/olga-felczak" target="_blank">
                <img src={navIcon1} alt="Linkedin Icon" />
              </a>
              <a href="https://github.com/OlgaFelczak" target="_blank">
                <img src={navIcon2} alt="Github Icon" />
              </a>
              <a
                href="../resume/Olga-Felczak-Resume.pdf"
                download="Olga_Felczak_Resume.pdf"
              >
                <img src={navIcon3} alt="Download Icon" />
              </a>
              <a href="mailto:ofelczak@gmail.com">
                <img src={navIcon4} alt="Email Icon" />
              </a>

            </div>
            <p>
              Copyright 2022. All Rights Reserved, Icons by
              <a target="_blank" href="https://icons8.com">
                Icons8
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
