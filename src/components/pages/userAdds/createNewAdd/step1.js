import { Steps } from "antd";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Radio, Button } from "antd";
import Adminlayout from "../../../layouts/adminLayout";

const Step1 = (props) => {
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
              <div className="pageTitle text-start">Property Type </div>
            </Col>
          </Col>
        </Row>

        <Radio.Group
          defaultValue="z"
          size="large"
          className="w-100 propertyCard"
        >
          <Row>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="a">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="entypo:location" />
                  </div>
                  <div className="pro-Card-Name py-1">Lands & Plots</div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="b">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="fa6-solid:house" />
                  </div>
                  <div className="pro-Card-Name py-1">Houses</div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="c">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="bi:building" />
                  </div>
                  <div className="pro-Card-Name py-1">Apartments & Flats</div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="d">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="clarity:building-solid" />
                  </div>
                  <div className="pro-Card-Name py-1">Offices</div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="e">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="fluent:building-shop-16-filled" />
                  </div>
                  <div className="pro-Card-Name py-1">Shops </div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="f">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="carbon:location-star" />
                  </div>
                  <div className="pro-Card-Name py-1">Commercial Space</div>
                </div>
              </Radio.Button>
            </Col>
            <Col className="mt-3" md={6} lg={3}>
              <Radio.Button value="g">
                <div className="pro-Card w-100 text-center">
                  <div className="pro-Card-icon">
                    <Icon icon="icon-park-twotone:chart-proportion" />
                  </div>
                  <div className="pro-Card-Name py-1">Portion & Floor</div>
                </div>
              </Radio.Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-end">
              <Button
                className="pro-add-btn"
                onClick={() => props.setActiveStep(1)}
              >
                Proceed Next
              </Button>
            </Col>
          </Row>
        </Radio.Group>
     
    </>
  );
};
export default Step1;
