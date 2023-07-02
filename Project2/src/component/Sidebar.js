import React, { useState } from 'react';
import logo from'../img/insight-05 1.png'
import {MdSearch} from 'react-icons/md'
import { FaEnvelope , FaBell,FaUser  } from 'react-icons/fa';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"Trang chủ",
            icon:<FaTh/>
        },
        {
            path:"/quanlive",
            name:"Quản lí vé",
            icon:<FaUserAlt/>
        },
        {
            path:"/doisoatve",
            name:"Đổi soát vé",
            icon:<FaRegChartBar/>
        },
        {
            path:"/caidat",
            name:"Cài đặt",
            icon:<FaCommentAlt/>
        },
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
               <img src={logo}/>
               <div className='search'>
                    
                    <MdSearch className='iconsearch'/>
                    <input className='search2' type='text'  placeholder="Search"></input>
                   </div>
                   <FaEnvelope className='iconmail' size={30}/>
                   <FaBell  className='iconbell' size={30} />
                   <FaUser className='iconuser' size={30}/>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;