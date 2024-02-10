import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import CSS file

// EditableField component
const EditableField = ({ label, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleSave = () => {
    onChange(tempValue);
    setIsEditing(false);
  };

  return (
    <div className="editable-field">
      <label>{label}:</label>
      {isEditing ? (
        <div>
          <input type="text" value={tempValue} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

// Profile component
const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: 30,
    dob: '1992-01-01',
    contact: '123-456-7890'
  });

  const handleAgeChange = (newAge) => {
    setUserData({ ...userData, age: newAge });
  };

  const handleDobChange = (newDob) => {
    setUserData({ ...userData, dob: newDob });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2>Profile</h2>
      <div>
        <EditableField label="Name" value={userData.name} />
        <EditableField label="Age" value={userData.age} onChange={handleAgeChange} />
        <EditableField label="Date of Birth" value={userData.dob} onChange={handleDobChange} />
        <EditableField label="Contact" value={userData.contact} />
      </div>
    </div>
  );
};

export default Profile;
