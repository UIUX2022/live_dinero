import "./addservices.scss";
import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";


const AddServices = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  switch (activeStep) {
    case 0:
      return <Step1 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 1:
      return <Step2 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 2:
      return <Step3 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 3:
      return (
        <Step4
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setNewItems={props.setNewItems}
        />
      );
    
  }
};
export default AddServices;
