import React from 'react';
import './Notification.css'

const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
