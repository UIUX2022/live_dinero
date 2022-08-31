import { Row, Col, Breadcrumb, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import ServiesCard from "../../../components/pages/userServices/servicesCard";
const ServicesFilter = () => {
  const CarData = [
    {
      name: "Oil Paint Art",
      img: "/images/service_1.jpg",
    },
    {
      name: "Spray Painting",
      img: "/images/service_2.png",
    },
    {
      name: "Charcoal Paint",
      img: "/images/service_3.jpg",
    },
    {
      name: "Glass Painting",
      img: "/images/service_4.jpg",
    },
    {
      name: "Water Color Paint",
      img: "/images/service_5.jpg",
    },
    {
      name: "Water Color Paint",
      img: "/images/service_1.jpg",
    },
    {
      name: "Acrylic Wall Paint             ",
      img: "/images/service_2.png",
    },
    {
      name: "Graffiti",
      img: "/images/service_3.jpg",
    },
    {
      name: "Glass Painting",
      img: "/images/service_4.jpg",
    },
    {
      name: "Water Color Paint",
      img: "/images/service_5.jpg",
    },
    {
      name: "Water Color Paint",
      img: "/images/service_1.jpg",
    },
    {
      name: "Acrylic Wall Paint             ",
      img: "/images/service_2.png",
    },
  ];
  return (
    <>
      <div className="filter-bar my-3">
        <Row className="align-items-center">
          <Col xs={5}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item>Wall Paint</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col xs={7}>
            <div className="service_filter ">
              <div className="filter-bar d-flex justify-content-end align-items-center gap-2">
                <p className="mb-0">Sort By</p>
                <Form.Select>
                  <option>DEFAULT</option>
                  <option>Top</option>
                  <option>All</option>
                  <option>Featured</option>
                </Form.Select>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="service_types">
        <Row>
          {CarData.map((data, index) => {
            const { name, img } = data;
            return (
              <Col
                xs={6}
                md={4}
                lg={3}
                xl={2}
                className="mb-3 pr-0"
                key={index}
              >
                <Link to="/services">
                  <div className="service_card">
                    <img src={img} alt="card-img" />
                    <div className="service_card_details">
                      <h6>{name}</h6>
                    </div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="user_service_card">
        <Row>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Link to="/service_details">
              <ServiesCard />
            </Link>
          </Col>
          
        </Row>
      </div>
    </>
  );
};
export default ServicesFilter;
