import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const GalleryDataProvider = ({ children }) => {
  const [imagesLinks, setImagesLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getAllImages();
        const { data } = response;
        if (Array.isArray(data)) {
          setImagesLinks(data);
        } else {
          console.error("Data received from API is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ imagesLinks }}>
      {children}
    </DataContext.Provider>
  );
};
