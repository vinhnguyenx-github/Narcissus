import React, { useState, useEffect } from 'react';
import differenceInDays from 'date-fns/differenceInDays';
import { useRoomData } from '../../../provider/roomtype/roomTypeProvider';
import "./EditBookingOverlay.css"

const EditBookingOverlay = ({ isOpen, onClose, onSave, booking }) => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [status, setStatus] = useState('');
    const [room, setRoom] = useState('');
    const { fetchFilteredRooms, filteredRooms } = useRoomData();
    const [price, setPrice] = useState(0); // Room price

    useEffect(() => {
        fetchFilteredRooms(); // Fetch filtered data when component mounts
    }, []);

    useEffect(() => {   
        if (booking) {
            setCheckInDate(booking.checkInDate);
            setCheckOutDate(booking.checkOutDate);
            setStatus(booking.status);
            setTotalPrice(booking.totalPrice);
            setRoom(booking.room.id);
            const selectedRoom = filteredRooms.find(r => r.id === booking.room.id);
            setPrice(selectedRoom ? selectedRoom.price : 0);
        }
    }, [booking, filteredRooms]);

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const lengthOfStay = differenceInDays(new Date(checkOutDate), new Date(checkInDate));
            const newTotalPrice = lengthOfStay * price;
            setTotalPrice(newTotalPrice);
        }
    }, [checkInDate, checkOutDate, price]);

    const handleSave = () => {
        onSave({
            ...booking,
            checkInDate,
            checkOutDate,
            status,
            room: room,
            totalPrice
        });
    };

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="overlay-content">
                <h2>Edit Booking</h2>
                <label>
                    Check-In Date:
                    <input 
                        type="date" 
                        value={checkInDate} 
                        onChange={(e) => setCheckInDate(e.target.value)} 
                    />
                </label>
                <label>
                    Check-Out Date:
                    <input 
                        type="date" 
                        value={checkOutDate} 
                        onChange={(e) => setCheckOutDate(e.target.value)} 
                    />
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="booked">Booked</option>
                        <option value="paid">Paid</option>
                        <option value="checkedIn">Checked In</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="checkedOut">Checked Out</option>
                    </select>
                </label>
                <label>
                    Room:
                    <select value={room} onChange={(e) => {
                        const selectedRoomId = parseInt(e.target.value);
                        const selectedRoom = filteredRooms.find(r => r.id === selectedRoomId);
                        setRoom(selectedRoomId);
                        setPrice(selectedRoom ? selectedRoom.rate : 0);
                    }}>
                        {filteredRooms.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </label>
                <div className="total-price" style={{ textAlign: "right" }}>
                    <p>
                    {new Intl.NumberFormat("en").format(price)} VND x {differenceInDays(new Date(checkOutDate), new Date(checkInDate))} đêm
                    </p>
                    <p>{new Intl.NumberFormat("en").format(totalPrice)} VND</p>
                </div>
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditBookingOverlay;
