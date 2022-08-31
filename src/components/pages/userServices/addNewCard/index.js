import "./addNewCard.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const AddNewCard = ({ setNewItems }) => {
  return (
    <Link to="/create_services">
      <div className="addNewCard mt-4">
        <div className="CardItems text-center">
          <Icon icon="carbon:add-alt" onClick={() => setNewItems(true)} />
          <h5>Create New Service</h5>
        </div>
      </div>
    </Link>
  );
};
export default AddNewCard;
