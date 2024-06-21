import React, { useState, useEffect } from "react";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider.jsx";
import "./RoomGrid.css";
import APIService from "../../../services/APIService.jsx";
import ChangeInfoRoom from "../ChangeInfoRoom/ChangeInfoRoom";

const AdminRoomGrid = () => {
  const { defaultImage } = useRoomData();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [roomData, setRoomData] = useState([]);

  const toggleOverlay = (room) => {
    setIsOpen(!isOpen);
    setSelectedRoom(room);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const fetchRoomData = async () => {
    try {
      const response = await APIService.getTypes();
      setRoomData(response.data);
    } catch (error) {
      console.error("Failed to fetch room data:", error);
    }
  };

  useEffect(() => {
    fetchRoomData();
  }, []);

  return (
    <div className="admin-room-grid">
      {roomData.map((room) => (
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
          onUpdate={fetchRoomData}
          preview_image={defaultImage}
        />
      )}
    </div>
  );
};

export default AdminRoomGrid;
