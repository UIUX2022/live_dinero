import "./topbar.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeLoader, openLoader} from '../../../redux/actions/authActions'
const Topbar = () => {
  const loader = useSelector((state) => state.authreducers.loader);
  const dispatch = useDispatch();
  return (
    <>
      <button className={loader ? "" : "d-none"} onClick={()=> dispatch(openLoader)}>btn1</button>
      <button className={loader ? "d-none" : ""} onClick={()=> dispatch(closeLoader)}>btn2</button>
      <div className="TopBar py-1">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={8} md={0} className="d-none d-lg-block">
              <div className="topbar-left py-1">
                <ul class="list-inline px-3 m-0">
                  <li class="list-inline-item">
                    <div className="d-flex align-items-center gap-2">
                      <Icon icon="ci:phone" />
                      +221 33 66 22
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div className="d-flex align-items-center gap-2">
                      <Icon icon="fluent:mail-16-filled" />
                      Info@dinero.com
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div className="d-flex align-items-center gap-2">
                      <Icon icon="entypo:location-pin" />
                      Store Locations
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <div className="d-flex align-items-center gap-2">
                      <Icon icon="ep:van" />
                      Track Your Order
                    </div>
                  </li>

                  {/* <li class="list-inline-item">
                  <div className="d-flex align-items-center gap-3">
                    <span>Delivery & Returns</span> <span>Blogs</span>
                  </div>
                </li> */}
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="topbar-right ">
                <Row className="align-items-center">
                  <Col xs={7}>
                    <div className="text-center user-login">
                      <Link to="/login" class="px-2">
                        <Icon icon="ant-design:user-outlined" />
                        Log In
                      </Link>
                      /
                      <Link to="/register" class="px-2">
                        Register
                      </Link>
                    </div>
                  </Col>
                  <Col xs={5} className="text-center">
                    <ul class="list-inline Socail-links-top m-0">
                      <li class="list-inline-item ">
                        <Icon icon="ant-design:instagram-outlined" />
                      </li>
                      <li class="list-inline-item">
                        <Icon icon="ant-design:twitter-outlined" />
                      </li>
                      <li class="list-inline-item">
                        <Icon icon="akar-icons:facebook-fill" />
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Topbar;
