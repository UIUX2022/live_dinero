import { Radio, Button, Steps } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Adminlayout from "../../../layouts/adminLayout";
const Step4 = (props) => {
  const { Step } = Steps;
  return (
    <>
        <Row className="my-3">
          <Col className="mySteps">
            <Steps size="small" current={props.activeStep} className="px-1">
              <Step title="Property Type " />
              <Step title="Description & FAQ" />
              <Step title="Requirement" />
              <Step title="Person Detail" />
              <Step />
            </Steps>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col>
              <div className="pageTitle text-start">Your Add Preview </div>
            </Col>
          </Col>
        </Row>
        <div className="your-add-previews propertyCard serviceForm">
          <Row>
            <Col className="mt-3">
              <h5>
                Property Type <span>(Lands & Plots)</span>
              </h5>
            </Col>
          </Row>
          <div className="adds-Imgs">
            <Row>
              <Col md={6} lg={3} className="mt-3">
                <div className="pre-img-items">
                  <img src="/images/add-1.png" alt="pro-img" />
                </div>
              </Col>
              <Col md={6} lg={3} className="mt-3">
                <div className="pre-img-items">
                  <img src="/images/add-2.png" alt="pro-img" />
                </div>
              </Col>
              <Col md={6} lg={3} className="mt-3">
                <div className="pre-img-items">
                  <img src="/images/add-3.png" alt="pro-img" />
                </div>
              </Col>
              <Col md={6} lg={3} className="mt-3">
                <div className="pre-img-items">
                  <img src="/images/add-1.png" alt="pro-img" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="other-adds-details">
            <Row>
              <Col md={12} className="mt-4">
                <input
                  type="text"
                  placeholder="Full Name "
                  className="form-control"
                  value=" Kanal Plot For Sale in zone 4 Doha "
                />
              </Col>
              <Col md={6} className="mt-4 my-dropdown">
                <select className="form-control">
                  <option>Commercial Plots</option>
                </select>
                <Icon icon="gridicons:dropdown" />
              </Col>
              <Col md={6} className="mt-4 my-dropdown">
                <select className="form-control">
                  <option>Corner Plot</option>
                </select>
                <Icon icon="gridicons:dropdown" />
              </Col>
              <Col md={6} className="mt-4 my-dropdown">
                <select className="form-control">
                  <option>Kanal</option>
                </select>
                <Icon icon="gridicons:dropdown" />
              </Col>
              <Col md={6} className="mt-4">
                <input
                  type="text"
                  placeholder="Full Name "
                  className="form-control"
                  value=" 1 kanal"
                />
              </Col>
              <Col md={12} className="mt-4">
                <div className="servicede">
                  <h3>Property Description</h3>
                  <textarea
                    placeholder="Describe your service here..."
                    className="form-control"
                    rows="5"
                  >
                    I will make the painters paint your logo/image or text on
                    building wall and send this amazing image to you in high
                    resolution printable jpeg image. The picture on the wall is
                    digitally created. You can use this picture on your Facebook
                    pages, website, blog for advertise or boost your business.
                  </textarea>
                </div>
              </Col>
            </Row>
          </div>
          <div className="profile-views mt-4">
            <h4>Review your details</h4>
            <div className="per-details d-block d-md-flex align-items-center ">
              <div className="profile-img p-2">
                <img src="/images/userProfile.png" alt="profile" />
              </div>
              <Row className=" profile-detail-form">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Full Name "
                    className="form-control"
                  />
                </Col>
                <Col className="mt-4 my-dropdown" md={12}>
                  <select className="form-control">
                    <option>location</option>
                  </select>
                  <Icon icon="gridicons:dropdown" />
                </Col>
                <Col className="mt-4 my-dropdown" md={2}>
                  <select className="form-control">
                    <option>+974</option>
                  </select>
                  <Icon icon="gridicons:dropdown" />
                </Col>
                <Col className="mt-4 my-dropdown" md={5}>
                  <input
                    type="text"
                    placeholder="0000 0000"
                    className="form-control"
                  />
                </Col>
                <Col className="mt-4 my-dropdown" md={5}>
                  <input
                    type="text"
                    placeholder="Price"
                    className="form-control"
                  />
                </Col>
              </Row>
            </div>
          </div>
          <Row className="mt-5">
            <Col className="text-end">
              <Button
                className="pro-add-btn"
                onClick={() => props.setActiveStep(4)}
              >
                Publish Now
              </Button>
            </Col>
          </Row>
        </div>
    </>
  );
};
export default Step4;
