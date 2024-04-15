import React, { useState, useEffect } from "react";
import APIService from "../../../services/APIService";
import "./RoomGrid.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const AdminRoomGrid = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  return (
    <div className="admin-room-grid">
      {rooms.map((room) => (
        <>
          <Button onClick={onOpen} className="admin-item-button">
            Chỉnh sửa phòng {room.name}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size="md">
            <ModalOverlay />
            <ModalBody>Hello World</ModalBody>
          </Modal>
        </>
      ))}
    </div>
  );
};

export default AdminRoomGrid;
