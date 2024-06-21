import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const GalleryDataContext = createContext();

export const useData = () => useContext(GalleryDataContext);

const imageTypes = ["DINING", "ROOF_TOP_COFFEE", "INTERIOR", "ACCOMMODATIONS"];

export const GalleryDataProvider = ({ children }) => {
  const [imagesLinks, setImagesLinks] = useState([]);
  const [groupedImages, setGroupedImages] = useState({});

  const fetchData = async () => {
    const imagesByType = {};
    try {
      const response = await APIService.getAllImages();
      const { data } = response;
      setImagesLinks(data);

      for (const type of imageTypes) {
        const response = await APIService.getImageByType(type);
        const { data: typeData } = response;
        imagesByType[type] = typeData;
      }
      setGroupedImages(imagesByType);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GalleryDataContext.Provider value={{ imagesLinks, groupedImages, fetchData }}>
      {children}
    </GalleryDataContext.Provider>
  );
};
