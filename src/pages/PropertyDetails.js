import PropertyDetails from "../components/pages/PropertyDetails";
import Layout from "../components/layouts/mainLayout";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

import "../components/pages/PropertyDetails/PropertyDetails.scss";
const PropertyDetailPage = () => {
  return (
    <>
      <Layout>
        <div className="property_detailPage">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="mt-3">
                  <Breadcrumb.Item href="/">Property Selling</Breadcrumb.Item>
                  <Breadcrumb.Item href="/">Property for Sale</Breadcrumb.Item>
                  <Breadcrumb.Item href="/">Land & Plots</Breadcrumb.Item>
                  <Breadcrumb.Item href="/">
                    Land & Plots in Al Rayyan
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Property detail</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
            <PropertyDetails />
          </Container>
        </div>
      </Layout>
    </>
  );
};
export default PropertyDetailPage;
