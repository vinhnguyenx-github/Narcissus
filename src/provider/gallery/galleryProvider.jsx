import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const GalleryDataContext = createContext();

export const useData = () => useContext(GalleryDataContext);

const imageTypes = ["DINING", "ROOF_TOP_COFFEE", "INTERIOR", "ACCOMMODATIONS"];

export const GalleryDataProvider = ({ children }) => {
  const [imagesLinks, setImagesLinks] = useState([]);
  const [groupedImages, setGroupedImages] = useState({});

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

  useEffect(() => {
    const fetchData = async () => {
      const imagesByType = {};
      try {
        for (const type of imageTypes) {
          const response = await APIService.getImageByType(type);
          const { data } = response;
          if (Array.isArray(data)) {
            imagesByType[type] = data;
          } else {
            console.error(`Data received from API for ${type} is not an array:`, data);
          }
        }
        setGroupedImages(imagesByType);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <GalleryDataContext.Provider value={{ imagesLinks, groupedImages }}>
      {children}
    </GalleryDataContext.Provider>
  );
};
