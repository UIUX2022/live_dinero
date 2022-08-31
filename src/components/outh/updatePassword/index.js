import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../../img/oathImg.png";
import { Link } from 'react-router-dom';
const UpdatePass = () => {
  const [hidePass, setHidePass] = useState(false);
  const [newHidePass, setNewHidePass] = useState(false);
  return (
    <div class="registerPage">
      <div class="registerPageDiv pt-4">
      <Link className="backtoHome" to="/">
            <Icon icon="ep:close-bold" />
          </Link>
        <Container>
          <Row>
            <Col>
              <h2 className="px-3 ">Welcome To Dinero</h2>
              <p className="px-3 pt-2 m-0">*All fields are required </p>
              <Row className="align-items-center mt-5">
                <Col md={6}>
                  <h6 className="text-center px-lg-5 px-md-2 px-0">
                    Update your forgot password
                  </h6>
                </Col>
                <Col md={6}>
                  <form className="px-3 ">
                    <Row className="align-items-center">
                      <Col md={12} lg={12}>
                        <div className="login-input mt-3">
                          <label>
                            <Icon icon="bx:lock" inline={true} />
                            Password
                          </label>
                          <input
                            type={hidePass ? "text" : "password"}
                            className="form-control"
                          />
                          {hidePass ? (
                            <Icon
                              icon="akar-icons:eye-open"
                              inline={true}
                              onClick={() => setHidePass(!hidePass)}
                            />
                          ) : (
                            <Icon
                              icon="clarity:eye-hide-line"
                              inline={true}
                              onClick={() => setHidePass(!hidePass)}
                            />
                          )}
                        </div>
                      </Col>
                      <Col md={12} lg={12}>
                        <div className="login-input mt-3">
                          <label>
                            <Icon icon="bx:lock" inline={true} />
                            Confirm Password
                          </label>
                          <input
                            type={newHidePass ? "email" : "password"}
                            className="form-control"
                          />
                          {newHidePass ? (
                            <Icon
                              icon="akar-icons:eye-open"
                              inline={true}
                              onClick={() => setNewHidePass(!newHidePass)}
                            />
                          ) : (
                            <Icon
                              icon="clarity:eye-hide-line"
                              inline={true}
                              onClick={() => setNewHidePass(!newHidePass)}
                            />
                          )}
                        </div>
                      </Col>

                      <Col md={12} lg={12} className=" mt-4">
                        <div className="text-end">
                          <button className="eng-btn" type="button">
                            LOGIN NOW
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="outhImg pt-4 pt-md-0">
                <img src={Img} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default UpdatePass;
