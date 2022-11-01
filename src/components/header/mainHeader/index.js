import "./mainHeader.scss";
import { Container, Row, Col, NavDropdown } from "react-bootstrap";
import { Button, Dropdown, Menu, Space } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu
          </a>
        ),
      },
    ]}
  />
);

const admin = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <Link rel="noopener noreferrer" to="/user_services">
            User Services
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link rel="noopener noreferrer" to="/user_adds">
            User Adds
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu
          </a>
        ),
      },
    ]}
  />
);

/*
|====================================================================================
| Main component start here
|====================================================================================
*/
const MainHeader = () => {
  return (
    <div className="MainHeader px-0 px-xl-5">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={6} lg={1}>
            <div className="main-log mx-lg-auto">
              <Link to="/">
                <img src="/images/Group.png" alt="logo" class=" p-2" />
              </Link>
            </div>
          </Col>
          <Col xs={6} lg={11} className="py-1 ">
            <div className="d-none d-lg-block">
              <div className="main-manu ">
                <div className="main-item active">
                  <NavDropdown
                    title="Buy in Doha Central"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link to="/"> demo 1</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/">demo 2</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">demo 3 </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="main-item">
                  <Link to="/services">Services</Link>
                </div>
                <div className="main-item">
                  <Link to="/property_sales">Property Selling</Link>
                </div>
                <div className="main-item">
                  <Link to="/"> Shop</Link>
                </div>
                <div className="main-item header-sidebar-icons">
                  <div className="header-right">
                    <button className="btn1">Enquiry Now</button>
                    <button className="btn2">Post Property</button>
                    <div className="d-none d-md-block">
                      <Space direction="vertical">
                        <Space wrap>
                          <Dropdown overlay={menu} placement="bottom">
                            <Button className="mx-2">
                              <div className="color-icon">
                                <Icon icon="bx:user-circle" />
                              </div>
                              <Icon icon="akar-icons:chevron-down" />
                            </Button>
                          </Dropdown>
                        </Space>
                      </Space>
                    </div>
                    <div className="d-none d-md-block">
                      <Space direction="vertical">
                        <Space wrap>
                          <Dropdown overlay={admin} placement="bottom">
                            <Button className="mx-2">
                              <div className="color-icon">
                                <Icon icon="bx:user-circle" />
                              </div>

                              <Icon icon="akar-icons:chevron-down" />
                            </Button>
                          </Dropdown>
                        </Space>
                      </Space>
                    </div>

                    <Icon icon="bx:menu-alt-left" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile_menu_icon d-block d-lg-none text-end">
              <Icon icon="heroicons-solid:menu-alt-3"  />
            </div>
          </Col>

          {/* <Col md={5} className="header-sidebar-icons"></Col> */}
          <Col
            md={12}
            lg={5}
            className="header-sidebar-icons mx-auto py-1"
          ></Col>
        </Row>
      </Container>
    </div>
  );
};
export default MainHeader;
