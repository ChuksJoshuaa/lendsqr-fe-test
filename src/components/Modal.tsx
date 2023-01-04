import { AiOutlineEye } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";
import { FiUserX } from "react-icons/fi";
import { Link } from "react-router-dom";

interface ModalProps {
  chosenUser: string;
}

const Modal = ({ chosenUser }: ModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal-container-head">
        <div className="modal-container-head-body">
          <Link to={`/single-user/${chosenUser}`} className="modal-head">
            <AiOutlineEye className="modal-icon" />
            <h3>View Details</h3>
          </Link>
          <div className="modal-head">
            <FiUserX className="modal-icon" />
            <h3>Blacklist User</h3>
          </div>
          <div className="modal-head">
            <BiUserCheck className="modal-icon" />
            <h3>Activate User</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
