import "./profileUpdate.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
const PofileUpdate = () => {
  const [oldpass, setOldPass] = useState(false);
  const [newpass, setNewPass] = useState(false);
  const [confirmpass, setConfirmPass] = useState(false);
  return (
    <>
      <Container fluid className="py-3 profileUpdate">
        <Row>
          <Col md={12}>
            <div className="pageTitle text-start">General Information</div>
          </Col>
          <Col md="2">
            <div className="profilePic">
              <img src="/images/profilelg.jpg" alt="prfilePic" />
              <button className="removeProfile mt-3  py-1">Remove Photo</button>
            </div>
          </Col>
          <Col md="10">
            <form className="profile_form ">
              <Row>
                <Col md={12} className=" mt-4">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Full name"
                  />
                </Col>
                <Col md={12} className=" mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </Col>
                <Col md={6} className="text-start mt-4">
                  <label>Gender</label>
                  <select className="form-control ">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Col>
                <Col md={6} className="text-start mt-4">
                  <label>DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="date"
                  />
                </Col>
                <Col md={12} className="text-start mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="About"
                  />
                </Col>
                <div className="form-submit  mt-4 text-end">
                  <button>Save Changes</button>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="pageTitle text-start">Password Update</div>
            <form className="changePassword profile_form">
              <Row>
                <Col md={4} className="mt-4 input-col">
                  <input
                    type={oldpass ? "text" : "password"}
                    className="form-control"
                    placeholder="Old password"
                  />
                  {oldpass ? (
                    <Icon
                      icon="akar-icons:eye-open"
                      inline={true}
                      onClick={() => setOldPass(!oldpass)}
                    />
                  ) : (
                    <Icon
                      icon="clarity:eye-hide-line"
                      inline={true}
                      onClick={() => setOldPass(!oldpass)}
                    />
                  )}
                </Col>
                <Col md={4} className="mt-4 input-col">
                  <input
                    type={newpass ? "text" : "password"}
                    className="form-control"
                    placeholder="New password"
                  />
                  {newpass ? (
                    <Icon
                      icon="akar-icons:eye-open"
                      inline={true}
                      onClick={() => setNewPass(!newpass)}
                    />
                  ) : (
                    <Icon
                      icon="clarity:eye-hide-line"
                      inline={true}
                      onClick={() => setNewPass(!newpass)}
                    />
                  )}
                </Col>

                <Col md={4} className="mt-4 input-col">
                  <input
                    type={confirmpass ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm password"
                  />

                  {confirmpass ? (
                    <Icon
                      icon="akar-icons:eye-open"
                      inline={true}
                      onClick={() => setConfirmPass(!confirmpass)}
                    />
                  ) : (
                    <Icon
                      icon="clarity:eye-hide-line"
                      inline={true}
                      onClick={() => setConfirmPass(!confirmpass)}
                    />
                  )}
                </Col>
                <div className="form-submit  mt-4 text-end">
                  <button>Save Changes</button>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PofileUpdate;
