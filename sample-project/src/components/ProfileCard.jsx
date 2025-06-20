import React from 'react'
import '../styles/profileCard.css'

const ProfileCard = ({ name, role, imageUrl, bio }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__image-container">
        <img src={imageUrl} className="profile-card__image" />
      </div>
      <div className="profile-card__content">
        <h2 className="profile-card__name">{name}</h2>
        <h3 className="profile-card__role">{role}</h3>
        <p className="profile-card__bio">{bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard