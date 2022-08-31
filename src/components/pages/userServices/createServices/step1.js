import { Steps } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
const Step1 = (props) => {
  const { Step } = Steps;
  return (
    <>
      <Row className="my-3">
        <Col className="mySteps">
          <Steps size="small" current={props.activeStep} className="px-5">
            <Step title="Overview" />
            <Step title="Description & FAQ" />
            <Step title="Requirement" />
            <Step title="Publish" />
          </Steps>
        </Col>
      </Row>
      <Row>
        <Col>
          <Col>
            <div className="pageTitle text-start">Service Infromation</div>
          </Col>
        </Col>
      </Row>
      <form class="serviceForm">
        <Row>
          <Col className="mt-4" md={12}>
            <input
              type="text"
              placeholder="Service Title"
              className="form-control"
            />
          </Col>
          <Col className="mt-4 my-dropdown" md={6}>
            <select className="form-control">
              <option>Select Services</option>
            </select>
            <Icon icon="gridicons:dropdown" />
          </Col>
          <Col className="mt-4 my-dropdown" md={6}>
            <select className="form-control">
              <option>Select Subservices</option>
            </select>
            <Icon icon="gridicons:dropdown" />
          </Col>
          <Col className="mt-4 my-dropdown" md={6}>
            <select className="form-control">
              <option>Conatct Phone Number</option>
            </select>
            <Icon icon="gridicons:dropdown" />
          </Col>
          <Col className="mt-4" md={6}>
            <Row>
              <Col md={3} xs={4} className="my-dropdown">
                <select className="form-control">
                  <option>+974</option>
                  <option>+973</option>
                  <option>+972</option>
                </select>
                <Icon icon="gridicons:dropdown" />
              </Col>
              <Col md={9} xs={8}>
                <input
                  type="number"
                  placeholder="000 000 00"
                  className="form-control"
                />
              </Col>
            </Row>
          </Col>
          <Col className="text-end mt-5">
            <button
              className="save_Steps"
              onClick={() => props.setActiveStep(1)}
            >
              {" "}
              Save & Continue
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};
export default Step1;
