import { Button, Steps } from "antd";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Adminlayout from "../../../layouts/adminLayout";
const Step2 = (props) => {
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
        <form className="serviceForm propertyCard">
          <Row>
            <Col className="mt-4" md={12}>
              <input
                type="text"
                placeholder="Property Title"
                className="form-control"
              />
            </Col>
            <Col className="mt-4 my-dropdown" md={6}>
              <select className="form-control">
                <option>Select Property Type</option>
              </select>
              <Icon icon="gridicons:dropdown" />
            </Col>
            <Col className="mt-4 my-dropdown" md={6}>
              <select className="form-control">
                <option>Select Features</option>
              </select>
              <Icon icon="gridicons:dropdown" />
            </Col>
            <Col className="mt-4 my-dropdown" md={6}>
              <select className="form-control">
                <option>Select Area Unit</option>
              </select>
              <Icon icon="gridicons:dropdown" />
            </Col>
            <Col className="mt-4" md={6}>
              <input
                type="text"
                placeholder="Area Unit"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-end">
              <Button
                className="pro-add-btn"
                onClick={() => props.setActiveStep(2)}
              >
                Proceed Next
              </Button>
            </Col>
          </Row>
        </form>
    </>
  );
};
export default Step2;
