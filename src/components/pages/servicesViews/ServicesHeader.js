import React from "react";
import "./servicesViews.scss";
const ServicesHeader = () => {
  return (
    <>
      <div className="service_header_section">
        <div className="service_header_img">
          <img src="/images/wall-paint.png" alt="header-bg" />
        </div>
        <div className="services_header_content d-flex justify-content-center align-items-center">
          <div>
            <h2>House / Wall Paint</h2>
            <h6>Thousands of talented Painters in one place.</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesHeader;
