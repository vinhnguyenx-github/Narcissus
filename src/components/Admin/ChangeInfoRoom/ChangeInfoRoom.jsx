import React, { Fragment, useState, useEffect, useRef, useContext } from "react";
import APIService from "../../../services/APIService";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import "./ChangeInfoRoom.css";

const ChangeInfoRoom = ({ room, isOpen, onClose, onUpdate, preview_image }) => {
  const [roomName, setRoomName] = useState(room.name);
  const [roomDescription, setRoomDescription] = useState(room.description);
  const [roomPrice, setRoomPrice] = useState(room.pricePerNight);
  const [roomCapacity, setRoomCapacity] = useState(room.capacity);
  const imageRef = useRef(null);
  const [image, setImage] = useState("");
  const { token } = useContext(AuthDataContext);

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    setRoomName(room.name);
    setRoomDescription(room.description);
    setRoomPrice(room.pricePerNight);
    setRoomCapacity(room.capacity);
  }, [room.name, room.description, room.pricePerNight, room.capacity]);

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
      case "capacity":
        setRoomCapacity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedRoom = {
      name: roomName,
      description: roomDescription,
      pricePerNight: roomPrice,
      capacity: roomCapacity,
    };

    try {
      await APIService.updateRoom(room.id, updatedRoom, token);
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await APIService.updateRoomImages(room.id, formData, token);
      }

      alert("Room updated successfully!");
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Failed to update room:", error);
      alert("Failed to update room. Please try again.");
    }
  };

  return (
    <Fragment>
      {isOpen && room && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container" style={{ paddingTop: "20px" }}>
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            <h2>{room.name}</h2>
            <form onSubmit={handleSubmit}>
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
              <div className="room-form-row">
                <label>Kích cỡ: </label>
                <input
                  type="number"
                  name="capacity"
                  value={roomCapacity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="room-form-image">
                <label style={{ color: "black" }}>Chỉnh sửa ảnh preview
                <span></span>
                </label>
                <div className="image-area" onClick={handleImageClick}>
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="Preview" />
                  ) : (
                    <img src={preview_image[room.id]} alt="Preview" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
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
