import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Project } from "./Project";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import projects from "./Projects.json";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Row>
                {projects.map((project, index) => {
                  return <Project key={index} {...project} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
