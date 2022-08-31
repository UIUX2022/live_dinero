import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img from "../../../img/oathImg.png";
import { Icon } from "@iconify/react";
const Enquire = () => {
  return (
    <>
      <div class="registerPage">
        <div class="registerPageDiv pt-4">
          <Link className="backtoHome" to="/">
            <Icon icon="ep:close-bold" />
          </Link>
          <Container>
            <Row>
              <Col>
                <h2 className="px-3 ">Register Your Interest</h2>
                <p className="px-3 pt-2 m-0">*All fields are required </p>
                <form className="px-3 ">
                  <Row className="align-items-center">
                    <Col md={12} lg={6}>
                      <div className="login-input mt-3 ">
                        <label>
                          <Icon icon="codicon:tools" inline={true} />
                          Services
                        </label>
                        <select className="form-control">
                          <option class="theme-options">Flat Rent</option>
                          <option class="theme-options">2</option>
                          <option class="theme-options">3</option>
                          <option class="theme-options">4</option>
                          <option class="theme-options">5</option>
                        </select>
                        <Icon icon="ant-design:down-outlined" inline={true} />
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="login-input mt-3 ">
                        <label>
                          <Icon icon="clarity:user-line" inline={true} />
                          Pronoun
                        </label>
                        <select className="form-control">
                          <option class="theme-options">Mr.</option>
                          <option class="theme-options">2</option>
                          <option class="theme-options">3</option>
                          <option class="theme-options">4</option>
                          <option class="theme-options">5</option>
                        </select>
                        <Icon icon="ant-design:down-outlined" inline={true} />
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="login-input mt-3 ">
                        <label>
                          <Icon icon="clarity:user-line" inline={true} />
                          First Name
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="login-input mt-3 ">
                        <label>
                          <Icon icon="clarity:user-line" inline={true} />
                          Last Name
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <Row>
                        <Col md={3}>
                          <div className="login-input mt-3 ">
                            <label>
                              <Icon icon="bx:world" inline={true} />
                              Code
                            </label>
                            <select className="form-control">
                              <option class="theme-options">+974 </option>
                              <option class="theme-options">2</option>
                              <option class="theme-options">3</option>
                              <option class="theme-options">4</option>
                              <option class="theme-options">5</option>
                            </select>
                            <Icon
                              icon="ant-design:down-outlined"
                              inline={true}
                            />
                          </div>
                        </Col>
                        <Col md={9}>
                          <div className="login-input mt-3 ">
                            <label>
                              <Icon icon="charm:phone" inline={true} />
                              Phone Number
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col md={12} lg={6}>
                      <div className="login-input mt-3 ">
                        <label>
                          <Icon icon="carbon:email" inline={true} />
                          Email
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </Col>
                    <Col md={12} lg={6} className="py-3 mt-0 ">
                      <div className="my-checkBox">
                        <input type="checkbox" />
                        <label for="vehicle1 px-3" className="checkLabek px-3">
                          I ‘ve read agree to the <a href="#">Privacy Policy</a>
                        </label>
                      </div>
                      <div className="my-checkBox">
                        <input type="checkbox" />
                        <label for="vehicle1 px-3" className="px-3 checkLabek ">
                          I’d like to hear about news and offers
                        </label>
                      </div>
                    </Col>
                    <Col md={12} lg={6} className=" mt-4">
                      <div className="text-end">
                        <button className="eng-btn" type="button">
                          ENQUIRE NOW
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="outhImg pt-4 pt-md-0">
                        <img src={Img} alt="img" />
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Enquire;
