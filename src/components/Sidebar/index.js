import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import './index.css'; // Import CSS file for styling

function Sidebar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Sidebar Toggle Button */}
      <button className="toggle-btn" onClick={() => { toggleSidebar(); setIsOpen(!isOpen) }}>
        {isOpen ? (
          // Expanded state - Displaying only the icon when expanded
          <span className="expand">Dmart</span>
        ) : (
          // Collapsed state - Displaying icons with names
          <button className="collapse colur">D</button>
        )}
      </button>

      {/* Sidebar Items */}
      <div className="sidebar-items">
        {isOpen ? (
          <>
            {/* Expanded state sidebar items with icons and names */}
            <div className="mass top">
                <div>
                
                  <p><span className="icon"><CiSearch /></span> Search</p>
                  <p><span className="icon"><IoVideocamOutline /></span> View video</p>
                  <p><span className="icon"><IoChatbubbleEllipsesOutline /></span> Chat</p>
                  <p><span className="icon"><FaRegComment /></span> Comment</p>
                  <p><span className="icon"><CiShoppingCart /></span> Cart</p>
                  <p><span className="icon"><RiShoppingBagLine /></span> Bag</p>
                  <p><span className="icon"><IoMdHelpCircleOutline /></span> Help</p>
                  <p><span className="icon"><AiFillDollarCircle /></span> View Amount</p>
                </div>
            </div>
            {/* Add more sidebar items here */}
            <div className="mass bottom">
                <p><span className="icon"><CiSettings /></span> Setting</p>
            </div>
          </>
        ) : (
          // Collapsed state - Only icons are displayed
          <>
          <div className="mass top">
            <div>
              <span className="icon"><CiSearch /></span><br/>
              <span className="icon"><IoVideocamOutline /></span><br/>
              <span className="icon"><IoChatbubbleEllipsesOutline /></span><br/>
              <span className="icon"><FaRegComment /></span><br/>
              <span className="icon"><CiShoppingCart /></span><br/>
              <span className="icon"><RiShoppingBagLine /></span><br/>
              <span className="icon"><IoMdHelpCircleOutline /></span><br/>
              <span className="icon"><AiFillDollarCircle /></span><br/>
            </div>
          </div>
          {/* Add more sidebar icons here */}
          <div className="mass bottom">
            <span className="icon"><CiSettings /></span><br/>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

