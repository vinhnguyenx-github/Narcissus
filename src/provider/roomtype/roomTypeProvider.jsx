import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const RoomDataContext = createContext();

export const useRoomData = () => useContext(RoomDataContext);

export const RoomDataProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [defaultImage, setDefaultImage] = useState({});

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

  useEffect(() => {
    const fetchImagesForRooms = async () => {
      const imageRequests = rooms.map(async (room) => {
        try {
          if (room) {
            const response = await APIService.getImageUrl(room.id);
            const url = response.data;
            return { id: room.id, url };
          }
        } catch (error) {
          console.error(
            "Failed to fetch image URL for room with id",
            room.id,
            ":",
            error
          );
          return null;
        }
      });
  
      const images = await Promise.all(imageRequests);
      const filteredImages = images.filter((image) => image !== null);
      const imageMap = filteredImages.reduce((acc, curr) => {
        acc[curr.id] = curr.url;
        return acc;
      }, {});
  
      setDefaultImage(imageMap);
    };
  
    fetchImagesForRooms();
  }, [rooms]);

  return (
    <RoomDataContext.Provider value={{ rooms, defaultImage }}>
      {children}
    </RoomDataContext.Provider>
  );
};
