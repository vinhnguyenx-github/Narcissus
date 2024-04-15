import React, { Fragment, useState, useEffect, useRef } from "react";
import "./ChangeInfoRoom.css";

const ChangeInfoRoom = ({ room, isOpen, onClose, preview_image }) => {
  const [roomName, setRoomName] = useState(room.name);
  const [roomDescription, setRoomDescription] = useState(room.description);
  const [roomPrice, setRoomPrice] = useState(room.pricePerNight);
  const imageRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImagechange = (event) => {
    event.target.files[0];
    setImage(event.target.files[0]);
  };

  // Update state when room prop changes
  useEffect(() => {
    setRoomName(room.name);
    setRoomDescription(room.description);
    setRoomPrice(room.pricePerNight);
  }, [room.name, room.description, room.pricePerNight]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setRoomName(value);
        break;
      case "description":
        setRoomDescription(value);
        break;
      case "price":
        setRoomPrice(value);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      {isOpen && room && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            <h2>{room.name}</h2>
            <form action="">
              <div className="room-form-row">
                <label>Tên Phòng: </label>
                <input
                  type="text"
                  name="name"
                  value={roomName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="room-form-row">
                <label>Mô tả Phòng: </label>
                <textarea
                  name="description"
                  value={roomDescription}
                  onChange={handleInputChange}
                  rows={5}
                ></textarea>
              </div>
              <div className="room-form-row">
                <label>Giá: </label>
                <input
                  type="number"
                  name="price"
                  value={roomPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div className="room-form-image">
                <label style={{ color: "black" }}>Chỉnh sửa ảnh preview</label>
                <div className="image-area" onClick={handleImageClick}>
                  {image ? (
                    <img src={URL.createObjectURL(image)} />
                  ) : (
                    <img src={preview_image[room.id]} />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    style={{ display: "none" }}
                    onChange={handleImagechange}
                  />
                </div>
              </div>
              <button className="save-form-btn" type="submit">
                Lưu
              </button>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ChangeInfoRoom;
