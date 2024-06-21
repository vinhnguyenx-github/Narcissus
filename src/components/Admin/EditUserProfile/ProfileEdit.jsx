import React, { useState, useContext } from 'react';
import APIService from '../../../services/APIService';
import './ProfileEdit.css';
import { AuthDataContext } from '../../../provider/auth/AuthProvider';

const ProfileEdit = ({ staff, onProfileUpdate }) => {
    const predefinedRoles = ['ADMIN', 'MANAGER', 'STAFF'];
    const { token } = useContext(AuthDataContext);
    const [formData, setFormData] = useState({
        firstName: staff.firstName,
        lastName: staff.lastName,
        email: staff.email,
        phone: staff.phone,
        roles: staff.roles.map(role => role.name)
    });
    const [isUpdating, setIsUpdating] = useState(false); // State to track update status

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'roles') {
            // Handle checkbox state without directly mutating state
            if (checked) {
                setFormData(prevState => ({
                    ...prevState,
                    roles: [...prevState.roles, value],
                }));
            } else {
                setFormData(prevState => ({
                    ...prevState,
                    roles: prevState.roles.filter(role => role !== value),
                }));
            }
        } else {
            // Update other form fields normally
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true); // Set update status to true during submission
        try {
            const updatedStaff = await APIService.updateStaff(staff.id, formData, token);
            onProfileUpdate(updatedStaff.data); // Notify parent component (StaffTable) of the update
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                alert('Failed to update profile. Please check your permissions.');
            } else if (error.request) {
                alert('No response received from server. Please try again later.');
            } else {
                console.error('Request setup error:', error.message);
                alert('Error setting up request. Please try again.');
            }
        } finally {
            setIsUpdating(false); // Reset update status regardless of success or failure
        }
    };

    return (
        <form className="profile-edit-form" onSubmit={handleSubmit}>
            <h2>Profile</h2>
            <div className="form-row">
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Phone
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>Roles</label>
            <div className="checkbox-group">
                {predefinedRoles.map(role => (
                    <label key={role} className="checkbox-label">
                        {role}
                    </label>
                ))}
            </div>
            <button type="submit" disabled={isUpdating}>Update Profile</button>
        </form>
    );
};

export default ProfileEdit;
