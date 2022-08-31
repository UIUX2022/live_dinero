import Layout from "../components/layouts/mainLayout";
import PropertyListingHeader from "../components/pages/propertylisting/propertylistingHeader";
import { Container, Row, Col, Breadcrumb, Form } from "react-bootstrap";
import { Select, Collapse } from "antd";
import CategoryFilter from "../components/pages/propertylisting/CategoryFilter";
import LocationFilter from "../components/pages/propertylisting/locationFilter";
import Pricefilter from "../components/pages/propertylisting/pricefilter";
import UserAddsCard from "../components/pages/userAdds/userAddCard";
import "../components/pages/propertylisting/propertylisting.scss";
const PropertyListing = () => {
  const { Panel } = Collapse;
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Layout>
      <PropertyListingHeader />
      <Container>
        <div className="Propslisting_breadcrumbs">
          <Row className="align-items-center">
            <Col md={4}>
              <Breadcrumb className="mt-3">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Wall Paint</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col md={8}>
              <div className="service_filter ">
                <div className="filter-bar d-md-flex justify-content-end align-items-center gap-2 mt-3">
                  <p className="mb-2 mb-lg-0 ">Display</p>
                  <Form.Select>
                    <option>50 per page</option>
                    <option>70 per page</option>
                    <option>100 per page</option>
                    <option>Featured</option>
                  </Form.Select>
                </div>
                <div className="filter-bar d-md-flex justify-content-end align-items-center gap-2 mt-3">
                  <p className="mb-2 mb-lg-0 ">Sort By</p>
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
        <div className="props_sales_views py-3">
          <Row>
            <Col lg={3} md={4}>
              <div className="propsSales_filters">
                <Collapse defaultActiveKey={["1", "2", "3", "4"]}>
                  <Panel header="Categories" key="1">
                    <CategoryFilter />
                  </Panel>
                  <Panel header="Locations" key="2">
                    <LocationFilter />
                  </Panel>
                  <Panel header="Price" key="3">
                    <Pricefilter />
                  </Panel>
                </Collapse>
              </div>
            </Col>
            <Col lg={9} md={8}>
              <div className="Props_sale_results">
                <Row>
                  {data.map((data, index) => {
                    return (
                      <Col className="" xl={4} lg={6} md={12} sm={12} key={index}>
                        <UserAddsCard />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};
export default PropertyListing;
