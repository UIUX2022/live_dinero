import { useState } from "react";

import Step1 from "./step1.js";
import Step2 from "./step2.js";
import Step3 from "./step3.js";
import Step4 from "./step4.js";
import Step5 from "./step5.js";
import "./addNewAdds.scss";
const CreateAdds = () => {
  const [activeStep, setActiveStep] = useState(0);
  switch (activeStep) {
    case 0:
      return <Step1 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 1:
      return <Step2 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 2:
      return <Step3 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 3:
      return <Step4 activeStep={activeStep} setActiveStep={setActiveStep} />;
    case 4:
      return <Step5 activeStep={activeStep} setActiveStep={setActiveStep} />;
  }
  return <>Add new</>;
};
export default CreateAdds;
