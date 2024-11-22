import React from 'react';
import './card.css';

const ProfileCard = ({ name, image, description }) => {
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}`} className="profile-image" />
            <h3 className="profile-name">{name}</h3>
            <p className="profile-description">{description}</p>
        </div>
    );
};

export default ProfileCard;
