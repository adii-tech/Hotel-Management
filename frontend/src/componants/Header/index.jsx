import React from 'react';
import './styles.css';
import { userData } from '../../helper/index';
import {BellOutlined, DownOutlined} from '@ant-design/icons';
import  profile from '../../assets/profile-pic.png'

const Header = () => {
    const { username } = userData();
  return (
    <div className='header'>
  
        <div className='name'>
         <h1><span style={{'font-family':`'Archivo', sans-serif`}}>Wlcome, </span>{username}!</h1>
         <p> Don't forget to check your activity</p>
        </div>

        <div className='name-2'>
          <div className='bell'>
          <BellOutlined type="message" style={{ fontSize: '2vw', color: '#7d7e80'}} theme="outlined"/>
            </div>
          <div className='div'>
            <div className='iname'>
               <p className='n'>
                {username}
                </p> 
                <p className='p'>
                    Owner
                </p>
            </div>
                <div>
                 <img className='imgr' src={profile}/>
                </div>
          </div>

            <div> 
                <DownOutlined />   
            </div>  
        </div>

    </div>
  )
}

export default Header;
