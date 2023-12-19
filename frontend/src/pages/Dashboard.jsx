import React, { useContext } from 'react';
import SideBar from '../componants/SideBar';
import Header from '../componants/Header';
import Cards from '../componants/Cards';
import StaffSchedule from '../componants/StaffSchedule';
import LineChart from '../componants/LineChart';
import UsersList from '../componants/UsersList';
import { HomeFilled, LeftSquareFilled, RightSquareFilled } from '@ant-design/icons';
import { DataObject } from '../App';


const Dashboard = () => {
  const object=useContext(DataObject);
  const obj=object.total;
  console.log(obj);

  return (
      <>
      <SideBar />
      <Header />
      <div className='main'>

        <div className='section1'>
      <div className='card-collection'>
      <Cards name= 'Total Arrived' number={obj.tArrived} element={<LeftSquareFilled type="message" style={{ fontSize: '6.5vw', color: '#64f58b'}} theme="outlined"/>}/>
      <Cards name= 'Total Booked' number={obj.tBooked} element={<HomeFilled type="message" style={{ fontSize: '6.5vw', color: '#e2ed9a'}} theme="outlined"/>}/>
      <Cards name= 'Total Check in' number={obj.tCheckin} element={<RightSquareFilled type="message" style={{ fontSize: '6.5vw', color: '#83aaf2'}} theme="outlined"/>}/>
      </div>

      <div className='line-chart'>
        <LineChart />
      </div>
      <div className='list'>
         <UsersList />
      </div>
        </div>

        <div className='section2'>
            <StaffSchedule />
        </div>

      </div>
      </>
  )
}

export default Dashboard;
