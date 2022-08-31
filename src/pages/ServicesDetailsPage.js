
import Layout from "../components/layouts/mainLayout";
import ServicesDetail from "../components/pages/servicesDetails/servicesDetails.js";
import { Container } from "react-bootstrap";
const ServicesDetailsPage = () => {
  return (
    <>
      <Layout>
        <Container fluid className="theme-layout">
          <div className="px-0 px-lg-5">
            <ServicesDetail />
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default ServicesDetailsPage;
