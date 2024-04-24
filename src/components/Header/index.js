import React from 'react';
import { SlCalender } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

import './index.css';

function Header({ isSidebarOpen }) {
  return (
    <div className={`sidebar-header ${isSidebarOpen ? 'shift' : ''}`}>
      <div className="header-content">
        {/* Name and Description */}
        <div className="name-description">
          <h2>Good Afternoon, Akshay</h2>
          <p>You are subscribed to Retail Plan</p>
        </div>
        {/* Day, Date, Time, Notification Icons */}
        <div className="notification-icons">
          <span><SlCalender />Today,</span>
          <span>14 February</span>
          <span><IoMdTime /> 16:40</span>
          <span className="notification-icon"><IoMdNotificationsOutline /></span>
        </div>
      </div>
      {/* Adding hanging div containers below the header content */}
      <div className="header-hanging-container">
        <div className="hanging-div">
          <h3>My Saved Library 1</h3>
          <p className="mass">dd-mm-yyyy</p>
        </div>
        <div className="hanging-div">
          <h3>My Saved Library 2</h3>
          <p className="mass">dd-mm-yyyy</p>
        </div>
        <div className="hanging-div">
          <h3>My Saved Library 3</h3>
          <p className="mass">dd-mm-yyyy</p>
        </div>
        <div className="hanging-div">
          <h3>My Saved Library 4</h3>
          <p className="mass">dd-mm-yyyy</p>
        </div>
        <div className="hanging-div">
          <h3>My Saved Library 5</h3>
          <p className="mass">dd-mm-yyyy</p>
        </div>
      </div>
      </div>
  );
}

export default Header;

