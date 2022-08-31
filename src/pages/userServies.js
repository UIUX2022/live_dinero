import Adminlayout from "../components/layouts/adminLayout";
import ServiesCard from "../components/pages/userServices/servicesCard";
import { Row, Col } from "react-bootstrap";
import AddNewCard from "../components/pages/userServices/addNewCard";
const UserServices = () => {
  return (
    <>
      <Adminlayout pagename="Your All Services ">
        <Row className="justify-content-between">
          <Col md={6} lg={6} xl={4}>
            <ServiesCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ServiesCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <ServiesCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <AddNewCard />
          </Col>
        </Row>
      </Adminlayout>
    </>
  );
};
export default UserServices;
