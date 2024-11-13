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



function Successchart() {

    const [appointments, setAppointment] = useState([])
    const [Success, setsuccess] = useState('')
    const [unsuccess, setUnseccess] = useState('')
    const [emptyappointss, setemptyappointss] = useState(0)
    const total_appointment = JSON.parse(sessionStorage.getItem('totalappointment'))
    console.log(total_appointment);
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
        let success = 350
        let cancel = 35
        let successrate = Math.ceil(success/total_appointment * 100) 
        console.log(successrate)
        let unsuccessrate = 100 - successrate


    
        for (let i = 0; i < appointments.length; i++) {
          if (appointments[i].appointment_status === success) {
            success += 1
          }
         else if (appointments[i].appointment_status === cancel) {
          cancel += 1
          }
          
        }
        setsuccess(successrate)
        setUnseccess(unsuccessrate)
    
      }

    const data = {
        labels: ['Success', 'Cancel'],
        datasets: [
            { data: [Success , unsuccess], 
             backgroundColor: ['#FFA500', '#C0C0C0'], 
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
            callbacks: { label: function(tooltipItem) { 
              const value = tooltipItem.raw;
               return `${tooltipItem.label}: ${value}%`; 
              } 
            }
      
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

export default Successchart;
