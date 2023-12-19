import React, { useContext, useState } from 'react';
import './styles.css';
import { Chart as ChartJS,CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement, Title,Tooltip,Legend);
import axios from 'axios';
import { useEffect } from 'react';
import { DataObject } from '../../App';

const LineChart = () => {
  const object=useContext(DataObject);
     const setT= object.setTotal;
    
  const [data, setData]=useState([]);
     useEffect(()=>{
         const fetchData=async ()=>{
             try{
               const responce=await axios.get(`http://localhost:1337/api/campaigns`);
               setData(responce.data.data);
             }catch(error){
               console.log(error);
             }
         }
         fetchData();
     },[]);
     //console.log(data);

     const roomVisited= data.map((ele)=>ele.attributes.roomvisited);
     //console.log(roomVisited);
     const initialValue = 0;
       const tArrived= roomVisited.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
      //console.log(tArrived);
     const roomBooked= data.map(ele=>ele.attributes.roombooked);
     //console.log(roomBooked);
     const tBooked= roomBooked.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    //console.log(tBooked);

    const tCheckin=tArrived-tBooked;
    //console.log(tCheckin)
   
    const datas=async ()=>{ await setT({tArrived:tArrived,tBooked:tBooked,tCheckin:tCheckin})}
   
     //datas();
     useEffect(()=>{
      datas()
    },[tCheckin]);
  //console.log(object.total)
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
  return (
    <div className='chart-container'>

     <Line 
         data={{
            labels,
            datasets: [
              {
                label: 'Room Visited',
                data: roomVisited,
                //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: '#f5a442',
                backgroundColor: '#f5a442',
                tension:0.5,
              },
              {
                label: 'Room Booked',
                data: roomBooked,
                //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235)',
                tension:0.5,
              },
            ],
         }}
         options = {{
            responsive: true,
            plugins: {
              legend: {
                //position: 'top' as const,
                display:true,
                position:"top",
              },
              title: {
                display: true,
                text: 'Campaign Overview',
                font: {size:25},
                color:'#364470',
                fontFamily: `'Signika Negative', sans-serif`,
              },
            },
            scales:{
                x:{
                    grid:{
                        display:false,
                    }
                },
                y:{
                    grid:{
                        display:false,
                    }
                }
            }
        }
          }
     />
    </div>
  )
}

export default LineChart;
