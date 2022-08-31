import { Container, Row, Col } from "react-bootstrap";
import { Steps } from "antd";
import { Icon } from "@iconify/react";
const Step4 = (props) => {
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
          <div className="pageTitle text-start">Service Description</div>
          <form className="serviceForm">
            <div className="serviceCover my-2">
              <img src="/images/wallpaintbg.jpg" />
            </div>
            <Row>
              <Col className="mt-4" md={12}>
                <input
                  type="text"
                  placeholder="Service Title"
                  className="form-control"
                  readonly
                />
              </Col>
              <Col className="mt-4 my-dropdown" md={6}>
                <select className="form-control" readonly>
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
            </Row>
            <div className="servicede mt-3">
              <h3>Service Description</h3>
              <textarea
                placeholder="Describe your service here..."
                className="form-control"
                rows="8"
                readonly
              >
                I will make the painters paint your logo/image or text on
                building wall and send this amazing image to you in high
                resolution printable jpeg image. The picture on the wall is
                digitally created. You can use this picture on your Facebook
                pages, website, blog for advertise or boost your business.
              </textarea>
            </div>
            <Row>
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
            <div className="text-end mt-5">
              <button
                className="save_Steps"
                onClick={() => props.setNewItems(false)}
              >
                Publish
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  );
};
export default Step4;
