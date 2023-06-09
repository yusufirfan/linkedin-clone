import React from "react";
import LinkedinLogo from '../../../assets/linkedinLogo.png';
import {FaSearch,FaHome, FaUserAlt, FaBriefcase,FaBell } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const goToRoute = (par) => {
    navigate(par)
  }
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedIn" />
      <div className="tb-icons">
        <FaSearch size={25} className="tb-icon"/> 
        <FaHome size={30} className="tb-icon" onClick={()=>{goToRoute('/home')}}/>
        <FaUserAlt size={25} className="tb-icon" onClick={()=>{goToRoute('/profile')}}/>
        <FaBriefcase size={25} className="tb-icon"/>
        <AiFillMessage size={25} className="tb-icon"/>
        <FaBell size={25} className="tb-icon"/>
      </div>
    </div>
  );
}
