import React from 'react'
import './App.css'
import ProfileCard from './components/profileCard.jsx'
import profileImage1 from './assets/profileImage1.jpg'
import profileImage2 from './assets/profileImage2.jpg'
import profileImage3 from './assets/profileImage3.jpg'

function App() {
  const profiles = [
    {
      name: "bindhu",
      role: "Frontend Developer",
      imageUrl: profileImage1,
      bio: "Passionate about creating beautiful and intuitive user interfaces with React and modern CSS."
    },
    {
      name: "shree",
      role: "UX Designer",
      imageUrl: profileImage2,
      bio: "Experienced designer focused on creating user-centered experiences that solve real problems."
    },
    {
      name: "priya",
      role: "UX Designer",
      imageUrl: profileImage3,
      bio: "Experienced designer focused on creating user-centered experiences that solve real problems."
    }
  ]

  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            imageUrl={profile.imageUrl}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  )
}

export default App