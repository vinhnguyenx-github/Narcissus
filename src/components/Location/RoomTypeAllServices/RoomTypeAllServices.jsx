import { Fragment } from "react";
import "./RoomTypeAllServices.css";

const RoomTypeAllServices = ({ isOpen, onClose, children }) => {
  return (
    <Fragment>
      {isOpen && (
        <div className="room-type-all-services">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RoomTypeAllServices;
