import "./newAddCard.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const NewAddsCard = (props) => {
  return (
    <>
      <Link to="/create_adds">
        <div className="AddnewCard mt-3">
          <div>
            <Icon icon="carbon:add-alt" onClick={() => props.setAddNew(true)} />
            <p>Create New Add</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default NewAddsCard;
