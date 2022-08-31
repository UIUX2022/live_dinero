import Adminlayout from "../components/layouts/adminLayout";
import UserAddsCard from "../components/pages/userAdds/userAddCard";
import { Row, Col } from "react-bootstrap";
import NewAddsCard from "../components/pages/userAdds/newAddsCard";
import AddNewAdds from "../components/pages/userAdds/createNewAdd";
import { useState } from "react";
const UserAdd = () => {
  return (
    <>
      <Adminlayout>
        <div className="pageTitle">Your All Ads </div>
        <Row className="align-items-center">
          <Col md={6} lg={6} xl={4}>
            <UserAddsCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <UserAddsCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <UserAddsCard />
          </Col>
          <Col md={6} lg={6} xl={4}>
            <UserAddsCard />
          </Col>

          <Col md={6} lg={6} xl={4}></Col>
          <Col md={6} lg={6} xl={4}>
            <NewAddsCard />
          </Col>
        </Row>
      </Adminlayout>
    </>
  );
};
export default UserAdd;
