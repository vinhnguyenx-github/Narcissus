import React from 'react';
import './ConfirmOverlay.css';

const ConfirmationOverlay = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
    <div className="confirmation-overlay">
        <div className="confirmation-content">
            <h2>Are you sure you want to delete this?</h2>
            <div className="button-group">
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onClose}>No</button>
            </div>
        </div>
    </div>
    );
};

export default ConfirmationOverlay;
