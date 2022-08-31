import React from "react";
import "./adminLayout.scss";
import Header from "../../header/mainHeader";
import Topbar from "../../header/topbar";
import AdminSidebar from "../../adminSidebar";
import { Container, Row, Col } from "react-bootstrap";
const Adminlayout = ({ pagename, children }) => {
  return (
    <div>
      <Topbar />
      <Header />
      <Container className="admin_layout">
        <Row>
          <Col className="">
            <div class="adminPanel py-5">
              <AdminSidebar />
              <div className="layoutChild">{children}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Adminlayout;
