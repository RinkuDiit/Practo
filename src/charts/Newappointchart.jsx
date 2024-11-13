import React, { useEffect,useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';


// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend, Filler);



function Newappointchart() {

    const [appointments, setAppointment] = useState([])
    const [todayappointss, settodayAppointments] = useState(0)
    const [emptyappointss, setemptyappointss] = useState(0)
    console.log(emptyappointss);
    const today2 = new Date().toISOString().split("T")[0];





    useEffect(()=>{
        axios.get(`http://localhost:4000/appointment/670f6b7f5dd2d1013924ab7d`)
        .then((res) => {
            console.log(res.data.result);   
            setAppointment(res.data.result);
        });
    },[])

    useEffect(() => {
        checktodayappoint(); 
        }, [appointments]);
    
      const checktodayappoint = () => {
        
        let todayAppointments = 0
    
        for (let i = 0; i < appointments.length; i++) {
          if (appointments[i].appointment_date.date === today2) {
            todayAppointments += 1
          }
        }
    
        settodayAppointments(todayAppointments)
        setemptyappointss(4-todayAppointments)
      }

    const data = {
        labels: ['Booked', 'Empty'],
        datasets: [
            { data: [todayappointss, emptyappointss], // Initial dummy data 
             backgroundColor: ['#0b7e93d6', '#C0C0C0'], // Orange and Gray 
             hoverBackgroundColor: ['#FFA500', '#C0C0C0'],
             },
             ],

      };
      
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
      
          },
        },
        scales: {
          x: {
            title: {
              display: false, // Hide title for x-axis
            },
            grid: {
              display: false, // Remove grid lines for x-axis
            },
            ticks: {
              display: false, // Hide ticks for x-axis
            },
          },
          y: {
            title: {
              display: false, // Hide title for y-axis
            },
            beginAtZero: true,
            grid: {
              display: false, // Remove grid lines for y-axis
            },
            ticks: {
              display: false, // Hide ticks for y-axis
            },
          },
        },
      };


    return(
  <>
    <Doughnut data={data} options={options} />
  </>
  )
}

export default Newappointchart;
