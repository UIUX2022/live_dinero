import "./servicesDetails.scss";
import { Row, Col, Breadcrumb, Form } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Icon } from "@iconify/react";
import ServicesSlider from "./servicesSlider";
const ServicesDetail = () => {
  return (
    <>
      <div className="service_detail_head">
        <Row>
          <Col className="my-3">
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Wall paint</Breadcrumb.Item>
              <Breadcrumb.Item>service Provider</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="header-img">
              <img src="/images/wall-paint.png" alt="serice_head" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="services_details_body ">
        <Row>
          <Col md="8" className="my-4">
            <div className="service_pro_details p-3 d-flex align-items-center gap-3">
              <div className="servies_pro_img">
                <img src="/images/profilelg.jpg" alt="pro_img" />
              </div>
              <div className="servies_name">
                <h3>Abu Sufian</h3>
                <h4>Top Level</h4>
              </div>
            </div>
            <div className="services_slider mt-3">
              <div className="">
                <ServicesSlider />
              </div>
              <div className="px-2">
                <h3>About My Profile </h3>
                <p>
                  I will make the painters paint your logo/image or text on
                  building wall and send this amazing image to you in high
                  resolution printable jpeg image. The picture on the wall is
                  digitally created. You can use this picture on your Facebook
                  pages, website, blog for advertise or boost your business.
                </p>
              </div>
            </div>
          </Col>
          <Col md="4" className="my-4">
            <div className="service_contact_info">
              <div className="service_contact_card p-3">
                <p>Contact Information</p>
                <button className="w-100 py-2">CONTACT FOR inquiry</button>
              </div>
            </div>
            <div className="services-Prolinks py-2">
              <a className="phone-items py-2">
                <Icon icon="carbon:phone-voice" />
                &nbsp; Phone
              </a>
              <a className="Whatsapp-items py-2">
                <Icon icon="bi:whatsapp" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ServicesDetail;
