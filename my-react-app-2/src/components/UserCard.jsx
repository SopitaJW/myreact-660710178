import React from 'react';
import sawako from './Sawako.jpg';

const Avatar = () => (
    <img 
        src={sawako}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '90px',
            height: '90px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#A8BBA3', margin: '10px 0' }}>
        Sopita Jengsiwong
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '13px' }}>
    รหัสนักศึกษา : 660710178 <br/>
    ชื่อ-สกุล : โสภิตา เจ็งศรีวงศ์  <br/>   
    คณะวิทยาศาสตร์ สาขา IT 💻  
    </p>
);

const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;