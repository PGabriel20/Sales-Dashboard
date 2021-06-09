import React from 'react';
import { Line } from "react-chartjs-2";

import './styles.scss';


interface SalesData{
  
}

const SalesChart: React.FC = () => {
 
  const data ={
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun"      
    ],
    datasets: [
      {
        label: "sales for 2021 (M)",
        data: [22, 35, 20, 40, 30, 35],
        //estilizando grafico para esse set de dados
        borderColor: ['#87dfee'],
        borderWidth: 5,
        borderRadius: 5,
        backgroundColor: ['#252b3c'],
        pointBackgroundColor: '#3333',
        pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
        pointBorderRadius: 5,
        tension: 0.3
      },
    ]
  }

  const options = {
    type: 'line',
    responsive: false,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }

  return(
    <div className="container">
      <div>
        <h3>Sales</h3>
      </div>
      <Line type={options.type} width={620} height={300} data = {data} options={options} />
    </div>
  );
}

export default SalesChart;