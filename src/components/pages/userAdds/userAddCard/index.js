import "./userAddCard.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const UserAddsCard = () => {
  return (
    <Link to="/property_details">
      <div className="AddsCardContainer mt-3 mx-1">
        <div className="coverImg">
          <img src="/images/addbg.jpg" alt="cover" />
        </div>
        <div className="cardDetails p-2">
          <h4>1 Kanal House For Sale in zone 4 Doha </h4>
          <div className="roomdetails my-2">
            <div className="roomItams d-flex justify-content-center align-content-center gap-1">
              <Icon icon="cil:room" />
              <p>5</p>
            </div>
            <div className="roomItams d-flex justify-content-center align-content-center gap-1">
              <Icon icon="cil:room" />
              <p>4</p>
            </div>
            <div className="roomItams d-flex justify-content-center align-content-center gap-1">
              <Icon icon="cil:room" />
              <p>1361.25sq</p>
            </div>
          </div>
          <h3>QAR 2,000,000</h3>
          <div className="aboutAdd">Zone 4, Doha Qatar . 10 Min ago</div>
          <div className="addWish">
            <Icon icon="bi:heart" />
          </div>
        </div>
      </div>{" "}
    </Link>
  );
};
export default UserAddsCard;
