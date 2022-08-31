import PropertySalesHeader from "../components/pages/propertySales/propertySalesHeader";
import FeaturedPropSales from "../components/pages/propertySales/featuredPropSale";
import PapularPropSales from "../components/pages/propertySales/papularPropSale";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layouts/mainLayout";
import "../components/pages/propertySales/propertySales.scss";
const PropertySales = () => {
  return (
    <>
      <Layout>
        <PropertySalesHeader />
        <div className="propertySalesBody py-4">
          <Container>
            <Row>
              <Col>
                <FeaturedPropSales />
              </Col>
            </Row>
            <Row>
              <Col>
                <PapularPropSales />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};
export default PropertySales;
