import { Slider, Switch } from "antd";
import React, { useState } from "react";
const Pricefilter = () => {
  return (
    <>
      <Slider range defaultValue={[20, 50]} tooltipVisible/>
    </>
  );
};
export default Pricefilter;
