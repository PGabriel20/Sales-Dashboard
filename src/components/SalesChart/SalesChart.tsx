import React from 'react';
import { Line } from "react-chartjs-2";

import './styles.scss';

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
        data: [65, 59, 10, 81, 56, 55],
        //estilizando grafico para esse set de dados
        borderColor: ['#2481e5'],
        backgroundColor: ['#252b3c'],
        pointBackgroundColor: '#3333',
        pointBorderColor: ['rgba(255, 206, 86, 0.2)'],
        borderWidth: 3,
      },
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Grafico de Linhas'
    },
    scales: {
      yAxes: [
        {
          ticks: {
           beginAtZero: true
          }
        }
      ]
    },
    responsive: false,
  }

  return(
    <div>
      Vendas por mês
      <Line type={'line'} width={550} height={220} data = {data} options={options} />
    </div>
  );
}

export default SalesChart;