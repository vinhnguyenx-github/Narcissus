import React, { useState } from "react";
import "./ChangeInfoRoom.css";
import { FaXmark } from "react-icons/fa6";
import photo from "../../../assets/Admin/image.png";

const ChangeInfoRoom = ({ room, onClose }) => {
  // State for input values
  const [name, setName] = useState(room.name);
  const [description, setDescription] = useState(room.description);
  const [pricePerNight, setPricePerNight] = useState(room.pricePerNight);
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="admin-gallery-overlay">
      <div className="admin-overlay-content">
        <h2>Chỉnh sửa phòng {room.name}</h2>
        <form action="">
          <div className="admin-form-left">
            <input
              type="text"
              name=""
              id=""
              value={name} // Use state for value
              className="room-type-input"
              onChange={(e) => setName(e.target.value)} // Handle change
            />
            <textarea
              rows="6"
              name=""
              id=""
              value={description} // Use state for value
              className="room-type-input"
              onChange={(e) => setDescription(e.target.value)} // Handle change
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Giá một đêm: "
              value={pricePerNight} // Use state for value
              className="room-type-input"
              onChange={(e) => setPricePerNight(e.target.value)} // Handle change
            />
            <button type="submit" className="submit-admin-form-btn">
              Xác Nhận
            </button>
          </div>
          <div className="admin-form-right">
            <div className="admin-photo-input">
              <input
                type="file"
                name="photo"
                accept="image/*"
                className="file-upload"
                id=""
                onChange={handleChange}
              />
              <img src={file} className="uploaded-photo" />
            </div>
          </div>
        </form>
        <button onClick={onClose} className="admin-form-close-btn">
          <FaXmark size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChangeInfoRoom;
