import React, { useRef, useEffect, useState, useContext } from 'react';
import './AddImageOverlay.css';
import APIService from '../../../services/APIService';
import { AuthDataContext } from '../../../provider/auth/AuthProvider';

const AddImageOverlay = ({ isOpen, onClose, onAddImage }) => {
    if (!isOpen) return null;
    const contentRef = useRef(null);
    const { token } = useContext(AuthDataContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedType, setSelectedType] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Đọc và hiển thị trước ảnh
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setUploadStatus('Please select an image file.');
            return;
        }
        if (!selectedType) {
            setUploadStatus('Please select an image type.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('type', selectedType);

        APIService.uploadImage(formData, token)
            .then(response => {
                setUploadStatus('Image uploaded successfully.');
                onAddImage(response.data.imageLink);
            })
            .catch(error => {
                setUploadStatus('Failed to upload image.');
                console.error('Error uploading image:', error);
            });
    };

    return (
    <div className="overlay">
        <div className="overlay-content" ref={contentRef}>
        <h2>Add New Image</h2>
        <form>
            <div className="form-group">
            <label htmlFor="image-type">Image Type <span style={{ color: 'red' }}>*</span>: </label>
                <select id="image-type" name="image-type" onChange={handleTypeChange} value={selectedType}>
                <option value="">Select Image Type</option>
                <option value="INTERIOR">Interior</option>
                <option value="ACCOMMODATIONS">Accommodations</option>
                <option value="DINING">Dining</option>
                <option value="ROOF_TOP_COFFEE">Roof Top Coffee</option>
                <option value="COMMON_AREAS">Common Areas</option>
                </select>
            </div>
            <label htmlFor="image">Chọn ảnh <span style={{ color: 'red' }}>*</span>: <input type="file" onChange={handleFileChange} accept="image/*" />
            </label>
            <div className="preview-container">
                <div className="preview">
                    {previewImage ? (
                    <img src={previewImage} alt="Preview" className="preview-image" />
                    ) : (
                    <div className="default-preview"></div>
                    )}
                </div>
            </div>
            <button type="button" onClick={handleUpload}>Upload Image</button>
            <div className='upload-status'>{uploadStatus}</div>
        </form>
        </div>
    </div>
    );
};

export default AddImageOverlay;
