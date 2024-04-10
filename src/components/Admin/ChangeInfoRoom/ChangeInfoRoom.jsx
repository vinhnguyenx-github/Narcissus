import React, { useState } from "react";
import "./ChangeInfoRoom.css";
import { FaXmark } from "react-icons/fa6";

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
    <div className="admin-rooms-overlay">
      <div>a</div>
    </div>
  );
};

export default ChangeInfoRoom;
