import { Col } from "react-bootstrap";

export const Project = ({ title, imgUrl, githubUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={githubUrl} target="_blank">
            GitHub
          </a>
          <br />
          {liveUrl && (
            <a href={liveUrl} target="_blank">
              Live URL
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
