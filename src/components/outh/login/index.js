import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";
import Img from "../../../img/oathImg.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [passShow, setPassShow] = useState(false);
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
              <Row className="align-items-center">
                <Col md={6}>
                  <h6 className="text-center px-lg-5 px-md-2 px-0">
                    Sign in to continue access your account
                  </h6>
                </Col>
                <Col md={6}>
                  <form className="px-3 ">
                    <Row className="align-items-center">
                      <Col md={12} lg={12}>
                        <div className="login-input mt-3">
                          <label>
                            <Icon icon="carbon:email" inline={true} />
                            Email
                          </label>
                          <input type="email" className="form-control" />
                        </div>
                      </Col>
                      <Col md={12} lg={12}>
                        <div className="login-input mt-3">
                          <label>
                            <Icon icon="bx:lock" inline={true} />
                            Password
                          </label>
                          <input
                            type={passShow ? "text" : "password"}
                            className="form-control"
                          />
                          {passShow ? (
                            <Icon
                              icon="fa-solid:eye"
                              onClick={() => setPassShow(!passShow)}
                            />
                          ) : (
                            <Icon
                              icon="fa-solid:eye-slash"
                              onClick={() => setPassShow(!passShow)}
                            />
                          )}
                        </div>
                      </Col>
                      <Col md={12} lg={12} className=" mt-4">
                        <div className="d-flex justify-content-between">
                          <Link to="/updatepass" className="forgot-link">
                            Forgot Possward
                          </Link>{" "}
                          <div className="text-end">
                            <button className="eng-btn" type="button">
                              LOGIN NOW
                            </button>
                          </div>
                        </div>
                        <p className="signUp-note py-2 text-end">
                          Don’t have an account{" "}
                          <Link to="/register">Create Account</Link>.
                        </p>
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
export default Login;
