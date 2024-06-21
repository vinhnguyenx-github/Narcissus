    import React, { useState, useContext } from "react";
    import APIService from "../../../services/APIService";
    import "./AddNewRoom.css";
    import { AuthDataContext } from "../../../provider/auth/AuthProvider";

    const AddNewRoom = () => {
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        const [capacity, setCapacity] = useState("");
        const [previewImage, setPreviewImage] = useState(null);
        const [hotel, setHotel] = useState("");
    
        const handlePreviewFileChange = (event) => {
            const file = event.target.files[0];
            setPreviewImage(file);
        };
    

        const handleHotelChange = (event) => {
            setHotel(event.target.value);
        };

        const { token } = useContext(AuthDataContext); 
        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!hotel) {
                alert("Please select a hotel.");
                return;
            }

            // Create Room Type
            const roomTypeData = {
                name,
                description,
                pricePerNight: price,
                capacity,
            };
    
            try {
                const roomTypeResponse = await APIService.createRoomType(roomTypeData, token);
                const typeId = roomTypeResponse.data.data.id;

                // Upload Preview Image
                if (previewImage) {
                    const formData = new FormData();
                    formData.append("image", previewImage);

                    await APIService.updateRoomImages(typeId, formData, token);
                }

                // Create Room
                const roomData = {
                    hotel_id: hotel,
                    type_id: typeId,
                    status: "available"
                };
                await APIService.createRoom(roomData, token);
                alert("Room created successfully!");
            } catch (error) {
                console.error("Error creating room or room type:", error);
                alert("Failed to create room or room type.");
            }
        };

        return (
            <div className="create-form-container">
                <h2>Create a new room</h2>
                <form onSubmit={handleSubmit} className="create-room-form">
                    <div className="form-row">
                    <label htmlFor="name" className="main-label">Room Name</label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="firstName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                    <label htmlFor="description" className="main-label">Description</label>
                        <div className="input-group">
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                    <label htmlFor="price" className="main-label">Price per night</label>
                        <div className="input-group">
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                    <label htmlFor="capacity" className="main-label">Capacity</label>
                        <div className="input-group">
                            <input
                                type="number"
                                id="capacity"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                    <label htmlFor="hotel" className="main-label">Hotel</label>
                        <div className="input-group">
                            <select id="hotel-id" name="hotel-id" onChange={handleHotelChange} value={hotel}>
                            <option value="" disabled>Select a hotel</option>
                            <option value="1">Số 33 Tức Mặc, phường Cửa Nam</option>
                            <option value="2">Số 84 Lê Duẩn, phường Văn Miếu</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="image" className="image-label">Chọn ảnh Preview
                    <input 
                        type="file" 
                        onChange={handlePreviewFileChange} 
                        accept="image/*" />
                    </label>
                    <div className="preview-container">
                        <div className="preview">
                            {previewImage ? (
                                <img src={URL.createObjectURL(previewImage)} alt="Preview" className="preview-image" />
                            ) : (
                                <div className="default-preview">No preview selected</div>
                            )}
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };

    export default AddNewRoom;
