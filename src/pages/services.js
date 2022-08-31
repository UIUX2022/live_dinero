import ServicesHeader from "../components/pages/servicesViews/ServicesHeader";
import Layout from "../components/layouts/mainLayout";
import ServicesFilter from "../components/pages/servicesViews/servicesFeatures";
import { Container } from "react-bootstrap";
const ServicesPage = () => {
  return (
    <>
      <Layout>
        <Container fluid>
          <div className="px-0 px-lg-5">
            <ServicesHeader />
            <ServicesFilter />
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default ServicesPage;
