import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const StaffDataContext = createContext();

export const useData = () => useContext(StaffDataContext);

export const StaffDataProvider = ({ children }) => {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetchStaffs(); // Initial fetch when component mounts
  }, []);

  const fetchStaffs = async () => {
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

  const updateStaff = async (id, updatedStaffData) => {
    try {
      const response = await APIService.updateStaff(id, updatedStaffData);
      const updatedStaff = response.data; // Assuming API returns the updated staff object
      setStaffs(prevStaffs => prevStaffs.map(staff =>
        staff.id === updatedStaff.id ? updatedStaff : staff
      ));
      return updatedStaff;
    } catch (error) {
      console.error("Error updating staff:", error);
      throw error; // Propagate the error to handle it in the component where updateStaff is called
    }
  };

  return (
    <StaffDataContext.Provider value={{ staffs, fetchStaffs, updateStaff }}>
      {children}
    </StaffDataContext.Provider>
  );
};
