import React, { useState, useContext } from "react";
import './GuestTable.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useData } from '../../../provider/guest/GuestDataProvider'
import ConfirmationOverlay from '../ConfirmationOverlay/ConfirmOverlay';
import APIService from '../../../services/APIService';
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import EditBookingOverlay from "../EditBookingsOverlay/EditBookingOverlay"

const GuestTable = () => {
    const { bookings, fetchBookings } = useData();
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [dataToDelete, setDataToDelete] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const { token } = useContext(AuthDataContext);


    const openConfirmOverlay = (id) => {
        setDataToDelete(id);
        setIsConfirmOpen(true);
        document.body.style.overflow = "hidden";
    };
    
    const closeConfirmOverlay = () => {
        setIsConfirmOpen(false);
        document.body.style.overflow = "auto";
    };

    const openEditOverlay = (booking) => {
        setDataToEdit(booking);
        setIsEditOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeEditOverlay = () => {
        setIsEditOpen(false);
        document.body.style.overflow = "auto";
    };

    const handleDelete = () => {
        if (!dataToDelete) return;
    
        APIService.deleteBooking(dataToDelete, token)
        .then(response => {
            console.log("Data deleted successfully:", response.data);
            fetchBookings();
            closeConfirmOverlay();
        })
        .catch(error => {
            console.error("Error deleting:", error);
            closeConfirmOverlay();
        });
    };

    const handleSaveEdit = (updatedBooking) => {
        console.log("Attempting to save edit with booking:", updatedBooking);
        console.log("Token:", token);
    
        APIService.updateBooking(updatedBooking.id, updatedBooking, token)
            .then(response => {
                console.log("Data updated successfully:", response.data);
                fetchBookings();
                closeEditOverlay();
            })
            .catch(error => {
                if (error.response) {
                    console.error("Error response data:", error.response.data);
                    console.error("Error response status:", error.response.status);
                    console.error("Error response headers:", error.response.headers);
                } else {
                    console.error("Error message:", error.message);
                }
                closeEditOverlay();
            });
    };
    

    return (
        <div className="guest-table-container">
            <h2>Guest List</h2>
            <input type="text" placeholder="Search..." className="search-input" />
            <table className="guest-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Room</th>
                    <th>Guest</th>
                    <th>Period</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>
                            <img src={book.room.type.previewImage.image_url} alt="room" className="room-picture" />
                            <p>{book.room.type.name}</p>
                        </td>
                        <td>
                            <p>{book.guest.fullName}</p>
                            <p>{book.guest.email}</p>
                            <p>{book.guest.phone}</p>
                        </td>
                        <td>
                            <p>{book.checkInDate}</p>
                            <p>-</p> 
                            <p>{book.checkOutDate}</p>
                        </td>
                        <td>{book.totalPrice}</td>
                        <td>{book.status}</td>
                        <td>
                            <button className="icon-btn edit-btn" onClick={() => openEditOverlay(book)}>
                                <i className="fas fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button className="icon-btn delete-btn" onClick={() => openConfirmOverlay(book.id)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {isConfirmOpen && (
                <ConfirmationOverlay
                    isOpen={isConfirmOpen}
                    onClose={closeConfirmOverlay}
                    onConfirm={handleDelete}
                />
            )}
            {isEditOpen && (
                <EditBookingOverlay
                    isOpen={isEditOpen}
                    onClose={closeEditOverlay}
                    onSave={handleSaveEdit}
                    booking={dataToEdit}
                />
            )}
        </div>
    );
};

export default GuestTable;
