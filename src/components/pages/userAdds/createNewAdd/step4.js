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
              <div className="pageTitle text-start">Your Details </div>
            </Col>
          </Col>
        </Row>
        <form className="propertyCard serviceForm">
          <div className="per-details d-block d-lg-flex align-items-center">
            <div className="profile-img p-2">
              <img src="/images/userProfile.png" alt="profile" />
              <div className="changeImg text-center mt-3 py-1">
                Remove Photo
              </div>
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
              <Col className="mt-4 my-dropdown" lg={4} xl={2} >
                <select className="form-control">
                  <option>+974</option>
                </select>
                <Icon icon="gridicons:dropdown" />
              </Col>
              <Col className="mt-4 my-dropdown" lg={8} xl={5}>
                <input
                  type="text"
                  placeholder="0000 0000"
                  className="form-control"
                />
              </Col>
              <Col className="mt-4 my-dropdown" xl={5}>
                <input
                  type="text"
                  placeholder="Price"
                  className="form-control"
                />
              </Col>
            </Row>
          </div>

          <div className="number-options d-flex mt-4 justify-content-between align-items-center">
            <p>Show my phone number in ads</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <Row className="mt-5">
            <Col className="text-end">
              <Button
                className="pro-add-btn"
                onClick={() => props.setActiveStep(4)}
              >
                Ad Preview
              </Button>
            </Col>
          </Row>
        </form>
    </>
  );
};
export default Step4;
