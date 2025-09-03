import React from 'react';
import './Clock.css'; 

const Clock = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('th-TH');
    const dateString = now.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    return (
        <div className="clock-card">
            <h3 className="clock-title">🕐 เวลาปัจจุบัน</h3>
            <p className="clock-date">{dateString}</p>
            <p className="clock-time">{timeString}</p>
        </div>
    );
};

export default Clock;
