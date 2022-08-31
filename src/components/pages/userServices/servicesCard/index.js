import { Icon } from "@iconify/react";
import "./servicesCard.scss";
const Services = () => {
  return (
    <>
      <div className="servicesCard mt-4">
        <div className="coverImg">
          <img src="/images/cardbg.jpg" alt="cover" />
        </div>
        <div className="cardDetails pb-2">
          <div className="cardProfile px-3">
            <img src="/images/cardpro.jpg" alt="profile" />
            <h2>Sufian</h2>
          </div>
          <div className="cardBtns px-3 mt-3">
            <button className="phonebtn">
              <Icon icon="charm:phone" />
              PHONE
            </button>
            <button className="whatsappbtn">
              <Icon icon="fa-brands:whatsapp" />
            </button>
          </div>
        </div>
        <div className="shareIcon">
          <Icon icon="clarity:share-line" />
        </div>
      </div>
    </>
  );
};
export default Services;
