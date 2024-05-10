import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const StaffDataContext = createContext();

export const useData = () => useContext(StaffDataContext);

export const StaffDataProvider = ({ children }) => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getAllStaff();
        const { data } = response;
        if (Array.isArray(data)) {
            setStaffs(data);
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
    <StaffDataContext.Provider value={{ staffs }}>
      {children}
    </StaffDataContext.Provider>
  );
};
