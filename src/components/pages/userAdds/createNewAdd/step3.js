import { Button, Steps } from "antd";
import { Row, Col } from "react-bootstrap";
import Adminlayout from "../../../layouts/adminLayout";
const Step3 = (props) => {
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
              <div className="pageTitle text-start">Property Detail </div>
            </Col>
          </Col>
        </Row>
        <div className="propertyCard serviceForm">
          <Row>
            <Col md={6} lg={3} className="mt-4">
              <div className="Add-proImgs text-center">
                <div>
                  <h6>Drag & Drop Photos or </h6>
                  <span>Browse</span>
                  <h6> Upto 20 Photos</h6>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mt-4">
              <div className="Add-proImgs-item">
                <img src="/images/add-1.png" alt="pro-img" />
              </div>
            </Col>
            <Col md={6} lg={3} className="mt-4">
              <div className="Add-proImgs-item">
                <img src="/images/add-2.png" alt="pro-img" />
              </div>
            </Col>
            <Col md={6} lg={3} className="mt-4">
              <div className="Add-proImgs-item">
                <img src="/images/add-3.png" alt="pro-img" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="mt-4">
              <div className="servicede">
                <h3>Property Description</h3>
                <textarea
                  placeholder="Describe your service here..."
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-end">
              <Button
                className="pro-add-btn"
                onClick={() => props.setActiveStep(3)}
              >
                Proceed Next
              </Button>
            </Col>
          </Row>
        </div>
    </>
  );
};
export default Step3;
