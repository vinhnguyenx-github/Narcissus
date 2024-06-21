import React, { useState } from "react";
import APIService from "../../../services/APIService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./RegisterForm.css";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [roles, setRoles] = useState([]);
    const [hotelId, setHotelId] = useState(1);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleRoleChange = (e) => {
        const value = e.target.value;
        setRoles((prevRoles) =>
            prevRoles.includes(value)
                ? prevRoles.filter((role) => role !== value)
                : [...prevRoles, value]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            firstName,
            lastName,
            phone,
            rolesName: roles,
            hotel_id: hotelId,
        };

        try {
            await APIService.register(user);
            setMessage("Registration successful!");
            setMessageType("success");
        } catch (error) {
            setMessage("Registration failed. Please try again.");
            setMessageType("error");
            console.error("Registration failed:", error);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="register-form-container">
            <h2>Create a new account</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-row">
                    <label htmlFor="name" className="main-label">Name</label>
                    <div className="input-group">
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <label htmlFor="firstName" className="sub-label">First Name</label>
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <label htmlFor="lastName" className="sub-label">Last Name</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <div className="password-container">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hotelId">Hotel</label>
                    <select
                        id="hotelId"
                        value={hotelId}
                        onChange={(e) => setHotelId(Number(e.target.value))}
                        required
                    >
                        <option value={1}>1 - Số 33 ngõ Tức Mặc</option>
                        <option value={2}>2 - Số 84 Lê Duẩn</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="roles">Roles</label>
                </div>
                <div className="form-group">
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="STAFF"
                                checked={roles.includes("STAFF")}
                                onChange={handleRoleChange}
                            />
                            Staff
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="ADMIN"
                                checked={roles.includes("ADMIN")}
                                onChange={handleRoleChange}
                            />
                            Admin
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="MANAGER"
                                checked={roles.includes("MANAGER")}
                                onChange={handleRoleChange}
                            />
                            Manager
                        </label>
                    </div>
                </div>
                <button type="submit" className="register-button">Register</button>
                {message && (
                    <div className={`message ${messageType}`}>{message}</div>
                )}
            </form>
        </div>
    );
};

export default RegisterForm;
