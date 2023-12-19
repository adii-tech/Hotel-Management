import React, { useEffect } from 'react';
import logo from '../../assets/new-moon.png';
import { AppstoreFilled, CalendarOutlined, FileTextOutlined, HeartOutlined, LogoutOutlined, MailOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  function logout(){
    
    navigate("/logout");
    console.log("clicked")
  }
  return (
    <aside className='aside'>
        <ul className='icons'>
            <li><img className='logo' src={logo}/></li>
            <li><AppstoreFilled type="message" style={{ fontSize: '1.8vw'}} theme="outlined"/></li>
            <li><PieChartOutlined type="message" style={{ fontSize: '1.6vw', color: '#7d7e80'}} theme="outlined"/></li>
            <li><HeartOutlined type="message" style={{ fontSize: '1.6vw', color: '#7d7e80'}} theme="outlined"/></li>
            <li><FileTextOutlined type="message" style={{ fontSize: '1.6vw', color: '#7d7e80'}} theme="outlined"/></li>
            <li><CalendarOutlined type="message" style={{ fontSize: '1.6vw', color: '#7d7e80'}} theme="outlined"/></li>
            <li><MailOutlined type="message" style={{ fontSize: '1.6vw',color: '#7d7e80'}} theme="outlined"/></li>
            <li><SettingOutlined type="message" style={{ fontSize: '1.6vw',color: '#7d7e80'}} theme="outlined"/></li>
            <li onClick={logout}><LogoutOutlined  type="message" style={{ fontSize: '1.6vw',color: '#7d7e80'}} theme="outlined"/></li>
        </ul>
    </aside>
  )
}

export default SideBar;
