import "./heroSlider.scss";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Select } from "antd";
import { Tabs } from "antd";

const { Option } = Select;

const HeroSlider = () => {
  const { TabPane } = Tabs;
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="heroSlider">
      <Container fluid>
        <Row>
          <Col sm={12} className="p-0">
            <div className="heroItem">
              {/* Slider Start */}
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/slider-1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/slider-3.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/slider-2.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              {/* Slider End */}
              <div className="heroContent py-5">
                <div className="heroText py-2 py-md-4">
                  <h2>Buy or sell your property without commission</h2>
                </div>
                {/* Tabs Start */}
                <div className="seacrhTabs">
                  <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Home" key="1">
                      <div className="tabContent">
                        <form className="tabForm">
                          <Row className="align-items-center justify-center-center">
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>

                            <Col md="4" className="text-center">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <button className="w-100">Browse Home</button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </TabPane>
                    <TabPane tab="Buy" key="2">
                    <div className="tabContent">
                        <form className="tabForm">
                          <Row className="align-items-center justify-center-center">
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>

                            <Col md="4" className="text-center">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <button className="w-100">Browse Home</button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </TabPane>
                    <TabPane tab="Sell" key="3">
                    <div className="tabContent">
                        <form className="tabForm">
                          <Row className="align-items-center justify-center-center">
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>
                            <Col md="4">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <h6 className="m-0">Where</h6>
                                <Select
                                  defaultValue="City, Neighborhood or adress"
                                  style={{
                                    width: 120,
                                  }}
                                  className="w-100 mt-2"
                                >
                                  <Option value="jack">Jack</Option>
                                  <Option value="lucy">Lucy</Option>
                                </Select>
                              </div>
                            </Col>

                            <Col md="4" className="text-center">
                              <div className="heroSearch px-2 py-2 py-md-0">
                                <button className="w-100">Browse Home</button>
                              </div>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
                {/* Tabs End */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroSlider;
