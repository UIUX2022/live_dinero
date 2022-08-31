import React from "react";
import "./featureService.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
const FeatureServices = () => {
  return (
    <section className="feactureServies mt-4">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={12} xl={10}>
            <h2>Featured Service Providers...</h2>
            <div className="featureCard-block my-2">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="cil:paint" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Wall Paint</h3>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="ic:baseline-architecture" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Architecture</h3>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="ic:outline-roofing" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Roof Sealing</h3>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="akar-icons:map" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Map Maker</h3>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="map:electrician" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Electrician</h3>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2 mt-2">
                  <div className="featureCard text-end">
                    <div>
                      <div className="card-icon">
                        <Icon icon="material-symbols:carpenter-outline-sharp" />
                      </div>
                    </div>
                    <h3 className="mt-3 pt-2 text-center">Carpenter</h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default FeatureServices;
