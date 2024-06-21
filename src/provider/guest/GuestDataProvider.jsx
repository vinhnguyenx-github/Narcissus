import React, { createContext, useContext, useState, useEffect } from "react";
import APIService from "../../services/APIService";

const BookingDataContext = createContext();

export const useData = () => useContext(BookingDataContext);

export const BookingDataProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    const fetchBookings = async () => {
        try {
        const response = await APIService.getAllBooking();
        const { data } = response;
        if (Array.isArray(data)) {
            setBookings(data);
        } else {
            console.error("Data received from API is not an array:", data);
        }
        } catch (error) {
        console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <BookingDataContext.Provider value={{ bookings, fetchBookings }}>
        {children}
        </BookingDataContext.Provider>
    );
};
