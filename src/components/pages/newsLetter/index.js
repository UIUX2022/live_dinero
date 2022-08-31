import "./newsletter.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
const NewsLetter = () => {
  return (
    <div className="newsletter_section">
      <Container>
        <Row className="align-items-center">
          <Col md={12} lg={6}>
            <p>Don’t miss our update. Subscribe us for more info </p>
          </Col>
          <Col md={12} lg={6}>
            <div className="newsform my-4">
              <form className="newsletter mx-auto ">
                <Icon icon="ic:baseline-email" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control"
                />
                <button>Get Startedd</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NewsLetter;
