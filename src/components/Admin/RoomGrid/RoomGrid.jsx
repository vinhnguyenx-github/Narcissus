import React, { useState, useEffect } from "react";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider.jsx";
import "./RoomGrid.css";
import ChangeInfoRoom from "../ChangeInfoRoom/ChangeInfoRoom";

const AdminRoomGrid = () => {
  const { rooms, defaultImage } = useRoomData();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOverlay = (room) => {
    setIsOpen(!isOpen);
    setSelectedRoom(room);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="admin-room-grid">
      {rooms.map((room) => (
        <button
          key={room.id}
          className="admin-item-button"
          onClick={() => toggleOverlay(room)}
        >
          Chỉnh sửa phòng {room.name}
        </button>
      ))}
      {isOpen && selectedRoom && (
        <ChangeInfoRoom
          isOpen={isOpen}
          onClose={toggleOverlay}
          room={selectedRoom}
          preview_image={defaultImage}
        ></ChangeInfoRoom>
      )}
    </div>
  );
};

export default AdminRoomGrid;
