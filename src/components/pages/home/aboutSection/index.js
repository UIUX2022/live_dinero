import "./aboutSection.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
const AboutSection = () => {
  return (
    <section className="aboutSection py-lg-5 py-3">
      <Container>
        <Row className="justify-content-center ">
          <Col xl={12}>
            <Row>
              <Col lg={5}>
                <div className="about_imgs d-flex justify-content-center align-items-center gap-3">
                  <div>
                    <img src="/images/aboutS1.png" alt="img" />
                  </div>
                  <div>
                    <img src="/images/aboutS2.png" alt="img" />
                    <div className="about-logoDiv mt-3 p-4">
                      <Icon icon="clarity:home-line" />
                      <div className="about_div1"></div>
                      <div className="about_div2"></div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={2}></Col>
              <Col lg={5} className="py-lg-5 py-2">
                <h6 className="section-subH">About</h6>
                <h2 className="section-H">Residential Development</h2>
                <p className="section-para">
                  The sky was cloudless and of a deep dark blue the spectacle
                  before us was indeed sublime. The sky was cloudless and of a
                  deep dark blue the spectacle before us was indeed sublime.
                </p>
                <button className="section-btn"> Learn More </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutSection;
