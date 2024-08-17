import React from 'react';
import { useState } from 'react';
import './Dashboard.css';
import RefreshIcon from './assets/refresh.jpg'
import MenuIcon from './assets/menu-btn.png'
import CloudImg from './assets/cloudAcc.jpg'
import RiskImg from './assets/risk.png'
import NameImg from './assets/namespace.png'
import workImg from './assets/workload.jpg'
import riskAssess from './assets/riskasses.png'
import imageRisk from './assets/imagerisk.jpg'
import wrong from './assets/wrong_icon.jpg'


const Dashboard = () => {
  return (
    <div className="dashboard">
        <div className="controls">
            <div><h1>CNAPP Dashboard</h1></div>
        <div className="control-btn">
        <button className="add-widget">Add Widget +</button>
        <button className="refresh"><img src={RefreshIcon}></img></button>
        <button className="menu"><img src={MenuIcon}></img></button>
        <div className="time-selector">
          <button>Last 2 days ▼</button>
        </div>
      </div>
      </div>

      <div className="header">
        <h2>CSPM Executive Dashboard</h2>
      </div>
      <div className="widgets">
        <div className="widget">
          <h3>Cloud Accounts</h3>
          <div className="widget-content">
          <img className="widget-pictures" src={CloudImg} alt='cloud'/>
          <img className="wrongIcon1"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget">
          <h3>Cloud Account Risk Assessment</h3>
          <div className="widget-content">
          <img className="widget-pictures" src={RiskImg} alt='cloud'/> 
          <img className="wrongIcon2"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget empty">
          <button className="add-widget-button">+ Add Widget</button>
        </div>
      </div>
      <div className="header">
        <h2>CWPP Dashboard</h2>
      </div>
      <div className="widgets" >
      
        <div className="widget">
          <h3>Top 5 Namespace Specific alerts</h3>
          <div className="widget-content"> 
          <img className="widget-pictures" src={NameImg} alt='cloud'/>
          <img className="wrongIcon3"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget">
          <h3>Workload Alerts</h3>
          <div className="widget-content">
          <img className="widget-pictures" src={workImg} alt='cloud'/>
          <img className="wrongIcon4"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget empty">
          <button className="add-widget-button">+ Add Widget</button>
        </div>
      </div>
      <div className="header">
        <h2>Registry Scan</h2>
      </div>
      <div className="widgets">
        <div className="widget">
          <h3>Image Risk Assessment</h3>
          <div className="widget-content">
            <img className="widget-pictures" src={riskAssess} alt='cloud'/>
           <img className="wrongIcon5"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget">
          <h3>Image Security Issues</h3>
          <div className="widget-content">
          <img className="widget-pictures" src={imageRisk} alt='cloud'/>
          <img className="wrongIcon6"  src={wrong} alt='close'/>
          </div>
        </div>
        <div className="widget empty">
          <button className="add-widget-button">+ Add Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
