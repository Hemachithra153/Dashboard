import React from 'react';
import './Header.css'; 
import UserImg from './assets/user.jpg'
import BellIcon from './assets/bell.jpg'
import Drop from './assets/dropdown.jpg'
import Search from './assets/search.jpg'

const Header = () => {
  return (
    <div className="heading">
      <div className="breadcrumb">
        <span>Home</span> &gt; <span><b>Dashboard V2</b></span>
      </div>
      <div className="header-actions">
        <input type="text" placeholder="Search anything..." className="search-bar" />
        <img className="search-icon" src={Search}></img>
        <div className="user-profile">
            <div><img className="Drop-Down" src={Drop}></img></div>
          <div className="notification-icon"><img className="Bell-Btn" src={BellIcon}></img></div>
          <div className="user-icon"><img src={UserImg}></img></div>
          <div><h4>User Account</h4></div>
        </div>
        </div>
    </div>
  );
};

export default Header;


