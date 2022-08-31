import { Container, Row, Col } from "react-bootstrap";
import { Steps } from "antd";
const Step3 = (props) => {
  const { Step } = Steps;
  return (
    <>
      <Row className="my-5">
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
          <div className="pageTitle text-start">Showcase Your Service</div>
          <form className="serviceForm py-3">
            <h6>Service Image guidelines Upto 10 photos</h6>
            <div>
              <Row>
                <Col md={6} lg={4} xl={3}>
                  <div className="newImgCard mt-3 text-center">
                    <div>
                      <p> Drag & Drop Photo or </p>
                      <button>Browse</button>
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={4} xl={3}>
                  <div className="uploadImgCard mt-3">
                    <img src="/images/cardbg.jpg" alt="Profile" />
                  </div>
                </Col>
                <Col md={6} lg={4} xl={3}>
                  <div className="uploadImgCard mt-3">
                    <img src="/images/cardbg.jpg" alt="Profile" />
                  </div>
                </Col>
                <Col md={6} lg={4} xl={3}>
                  <div className="uploadImgCard mt-3">
                    <img src="/images/cardbg.jpg" alt="Profile" />
                  </div>
                </Col>
                <Col md={6} lg={4} xl={3}>
                  <div className="uploadImgCard mt-3">
                    <img src="/images/cardbg.jpg" alt="Profile" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="text-end mt-5">
              <button
                className="save_Steps"
                onClick={() => props.setActiveStep(3)}
              >
                Save & Continue
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};
export default Step3;
