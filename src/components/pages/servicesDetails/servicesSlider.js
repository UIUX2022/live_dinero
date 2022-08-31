import React from "react";

import { Carousel } from "react-responsive-carousel";
const ServiceSlider = () => {
  return (
    <Carousel
      autoPlay
      showIndicators={false}
      showStatus={false}
      showArrows={false}
    >
      <div>
        <img src="/images/slider-1.jpg" />
      </div>
      <div>
        <img src="/images/slider-2.jpg" />
      </div>
      <div>
        <img src="/images/slider-3.jpg" />
      </div>
      <div>
        <img src="/images/slider-4.jpg" />
      </div>
      <div>
        <img src="/images/slider-2.jpg" />
      </div>
    </Carousel>
  );
};
export default ServiceSlider;
