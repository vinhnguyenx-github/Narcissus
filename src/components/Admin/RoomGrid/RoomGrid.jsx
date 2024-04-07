import React, { useState, useEffect } from "react";
import APIService from "../../../services/APIService";
import "./RoomGrid.css";
import ChangeInfoRoom from "../ChangeInfoRoom/ChangeInfoRoom";

const AdminRoomGrid = () => {
  const [rooms, setRooms] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getTypes();
        const { data } = response;
        if (Array.isArray(data)) {
          setRooms(data);
        } else {
          console.error("Data received from API is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch room data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRoomClick = (room) => {
    if (!showOverlay) {
      setSelectedRoom(room);
      setShowOverlay(true);
    }
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setSelectedRoom(null);
  };

  return (
    <div className="admin-room-grid">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="admin-room-item"
          onClick={() => handleRoomClick(room)}
        >
          <p>Chỉnh sửa ảnh phòng {room.name} cơ sở ?</p>
        </div>
      ))}

      {showOverlay && (
        <ChangeInfoRoom room={selectedRoom} onClose={handleOverlayClose} />
      )}
    </div>
  );
};

export default AdminRoomGrid;
