import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section class="footer-section py-5 px-xl-5 px-lg-1">
      <Container fluid>
        <Row>
          <Col md={12} lg={3} className="text-lg-center">
            <div class="px-5 px-lg-3">
              <img
                src="/images/whitelogo.png"
                alt="logo"
                className="footerlogo"
              />
              <div className="footerAddress mt-5">
                <p>Doha, Qatar</p>
                <a href="#">Call us : 123-456-7890</a>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className="footer-links mt-3 px-5 px-md-0">
              <h4>Our Products</h4>
              <ul>
                <li>
                  <Link to="/">The Support Suite</Link>
                </li>
                <li>
                  <Link to="/">The Sales Suite</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/"> Guide</Link>
                </li>
                <li>
                  <Link to="/"> Explore</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className="footer-links mt-3 px-5 px-md-0">
              <h4>Our Products</h4>
              <ul>
                <li>
                  <Link to="/">The Support Suite</Link>
                </li>
                <li>
                  <Link to="/">The Sales Suite</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/"> Guide</Link>
                </li>
                <li>
                  <Link to="/"> Explore</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className="footer-links mt-3 px-5 px-md-0">
              <h4>Our Products</h4>
              <ul>
                <li>
                  <Link to="/">The Support Suite</Link>
                </li>
                <li>
                  <Link to="/">The Sales Suite</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/"> Guide</Link>
                </li>
                <li>
                  <Link to="/"> Explore</Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col md={12} lg={3}>
            <div className="footerMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115443.09541843645!2d51.44195675873958!3d25.28414778835866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1655129002179!5m2!1sen!2s"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
