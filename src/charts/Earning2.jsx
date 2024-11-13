import React, { useEffect,useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';


// Register the necessary components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);



function Earningchart2() {

    const [appointments, setAppointment] = useState([])



    useEffect(()=>{
        axios.get(`http://localhost:4000/appointment/670f6b7f5dd2d1013924ab7d`)
        .then((res) => {
            console.log(res.data.result);   
            setAppointment(res.data.result);
        });
    },[])

    const data = {
        labels:[2018,2019,2020,2021,2022,2023,2024],
        datasets: [
          {
            label: 'Earning',
            data: [45*800, 55*800, 38*900, 61*900,55*1000,70*1200, (49+appointments.length) *1200],
            borderColor: '#002aff8f',
            backgroundColor: '#002aff8f',
            borderWidth: 4,
            fill: true, // Enables area filling
            tension: 0.4, // Creates the curve effect
            pointRadius:0,
          },
        ],
      };
      
      const options = {
        responsive: true,
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
              display: true, // Hide ticks for x-axis
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
              display: true, // Hide ticks for y-axis
            },
          },
        },
      };


    return(
  <>
    <Line data={data} options={options} />
  </>
  )
}

export default Earningchart2;
