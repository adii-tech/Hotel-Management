import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import  profile from '../../assets/profile-pic.png';

const UsersList = () => {
  const [data, setData]=useState([]);
     useEffect(()=>{
         const fetchData=async ()=>{
             try{
               const responce=await axios.get(`http://localhost:1337/api/user-lists`);
               setData(responce.data.data);
             }catch(error){
               console.log(error);
             }
         }
         fetchData();
     },[]);
     //console.log(data);
       return (
    <div className='list-container'>
      <div className='book-list'>
        <h1>Booking List</h1>
      <div className='lis'>
        
        {data&&data.map(ele=>(
        <>
          <div className='ul' key={ele.id}>
         <li className='id'>{ele.id}</li>
         <li><img className='imgr' src={profile}/></li>
         <li className='id'>
          {ele.attributes.name}
          </li>
          <li>
         {ele.attributes.uid}
         </li>
         <li>{ele.attributes.rooms}</li>
         <li>{ele.attributes.sdate}</li>
         <li>{ele.attributes.edate}</li>
         <li>
         <button className='btnr btn'>paid</button>
         </li>
         </div>
         </>)) 
        } 
       
        {/* <div className='ul'>
         <li>1</li>
         <li>
          name
         </li>
         <li>
         8754642
         </li>
         <li>Double</li>
         <li>12/12/21</li>
         <li>07/1/22</li>
         <li>
          <button>paid</button>
         </li>
          </div>
     
          <div className='ul'>
         <li>1</li>
         <li>
          name
         </li>
         <li>
         8754642
         </li>
         <li>Single</li>
         <li>12/12/21</li>
         <li>07/1/22</li>
         <li>
          <button>paid</button>
         </li>
          </div> */}


       </div>
      </div>
    </div>
  )
}

export default UsersList;
