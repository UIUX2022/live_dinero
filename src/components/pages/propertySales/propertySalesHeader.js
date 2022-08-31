import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Slider } from "antd";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const PropertySalesHeader = () => {
  return (
    <>
      <div className="property_sale_header py-5">
        <Container className="pt-3">
          <Row>
            <Col md={5} className="h-100 pt-3">
              <div className="Search_property py-3">
                <h4>Search Properties For Buy & Sell </h4>

                <div className="custom-select-field pt-4">
                  <label className="">
                    <Icon icon="gis:search-home" /> &nbsp; Property
                  </label>
                  <select name="cars" id="cars" className="w-100">
                    <option value="volvo">Lands & Plots</option>
                    <option value="saab">Houses</option>
                    <option value="mercedes">Apartment & Flats</option>
                    <option value="audi">Offices</option>
                    <option value="audi">Shops</option>
                    <option value="audi">Commercials Space</option>
                    <option value="audi">Portion & Floor</option>
                  </select>
                </div>
                <div className="custom-select-field pt-4">
                  <label className="">
                    <Icon icon="carbon:location-filled" />
                    &nbsp; Location
                  </label>
                  <select name="cars" id="cars" className="w-100">
                    <option value="volvo">Al Shamal</option>
                    <option value="saab">Al Khor</option>
                    <option value="mercedes">Al Shahaniya</option>
                    <option value="audi">Umm salal</option>
                    <option value="audi">Al Daayen</option>
                  </select>
                </div>
                <div className="pt-2">
                  <h6 className="text-end">Square Feet</h6>
                </div>
                <Row>
                  <Col md={12} lg={6}>
                    <div className="custom-select-field pt-4">
                      <label className="">
                        <Icon icon="fa-solid:search-location" /> &nbsp; Area Min
                      </label>
                      <input
                        type="text"
                        className="custom_input w-100"
                        value="5.062"
                      />
                    </div>
                  </Col>
                  <Col md={12} lg={6}>
                    <div className="custom-select-field pt-4">
                      <label className="">
                        <Icon icon="fa-solid:search-location" /> &nbsp; Area Min
                      </label>
                      <input
                        type="text"
                        className="custom_input w-100"
                        value="1364.25"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="area_range">
                  <Slider
                    range
                    defaultValue={[0, 5000]}
                    step={50}
                    mix={0}
                    max={5000}
                  />
                </div>
                <div className="search-btn pt-3">
                  <button className="w-100 py-2">Search</button>
                </div>
              </div>
            </Col>
            <Col md={7} className="h-100 pt-3">
              <div className="browse_properties pt-3 pb-5">
                <h4>Browse Properties </h4>
                <Row>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center ">
                        <div className="pro-Card-icon">
                          <Icon icon="entypo:location" />
                        </div>
                        <div className="pro-Card-Name py-1">Lands & Plots</div>
                      </div>
                    </Link>
                  </Col>

                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center ">
                        <div className="pro-Card-icon">
                          <Icon icon="fa6-solid:house" />
                        </div>
                        <div className="pro-Card-Name py-1">Houses</div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center ">
                        <div className="pro-Card-icon">
                          <Icon icon="bi:building" />
                        </div>
                        <div className="pro-Card-Name py-1">
                          Apartments & Flats
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center">
                        <div className="pro-Card-icon">
                          <Icon icon="clarity:building-solid" />
                        </div>
                        <div className="pro-Card-Name py-1">Offices</div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center ">
                        <div className="pro-Card-icon">
                          <Icon icon="fluent:building-shop-16-filled" />
                        </div>
                        <div className="pro-Card-Name py-1">Shops </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center">
                        <div className="pro-Card-icon">
                          <Icon icon="carbon:location-star" />
                        </div>
                        <div className="pro-Card-Name py-1">
                          Commercial Space
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={6} lg={3} className="mt-3">
                    <Link to="/property_listing">
                      <div className="pro-Card w-100 text-center ">
                        <div className="pro-Card-icon">
                          <Icon icon="icon-park-twotone:chart-proportion" />
                        </div>
                        <div className="pro-Card-Name py-1">
                          Portion & Floor
                        </div>
                      </div>
                    </Link>
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
export default PropertySalesHeader;
