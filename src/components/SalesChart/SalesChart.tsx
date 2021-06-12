import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import api from '../../services/api';

import './styles.scss';

interface SalesData {
  _id:string;
  product: string;
  customer: string;
  price: number;
  date: string;
  description: string;
}

const SalesChart: React.FC = () => {
  const [sales, setSales] = useState([])
  const [chartData, setChartData] = useState<any>()
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    async function getData(){
      await api.get('/sale').then((res)=>{
        const data = res.data;
        setSales(data);
      }).catch(err=>{
        alert(err)
      })
    }
    getData();

    setTimeout(()=>{
      getSalesByMonth();
    },2000)
  },[])
  
  async function getSalesByMonth(){
    const months = [
      "2021-01-01", "2021-02-01", "2021-03-01", "2021-04-01", "2021-05-01", "2021-06-01",
      "2021-07-01", "2021-08-01", "2021-09-01", "2021-10-01", "2021-11-01", "2021-12-01"
    ];

    var salesPerMonth = [];

    var salesJan = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[1]).getMonth());
    });

    var salesFeb = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[2]).getMonth());
    });

    var salesMar = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[3]).getMonth());
    });

    var salesApr = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[4]).getMonth());
    });

    var salesMay = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[5]).getMonth());
    });

    var salesJun = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[6]).getMonth());
    });

    var salesJul = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[7]).getMonth());
    });

    var salesAug = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[8]).getMonth());
    });

    var salesSep = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[9]).getMonth());
    });

    var salesOct = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[10]).getMonth());
    });

    var salesNov = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[11]).getMonth());
    });

    var salesDec = sales.filter((a:SalesData)=>{
      var date = new Date(a.date).getMonth();
      return (date === new Date(months[12]).getMonth());
    });

    salesPerMonth = [
      salesJan, salesFeb, salesMar, salesApr, salesMay, salesJun,
      salesJul, salesAug, salesSep, salesOct, salesNov, salesDec
    ]

    const arraySales = salesPerMonth.map((a)=>{
      return a.length;
    })

    setChartData(arraySales);
    console.log(chartData )
  }

  const months = ["Jan", "Feb", "Mar", "Aprl", "May", "Jun", "Jul", "aug", "Sep", "Oct", "Nov", "Dec"]

  var month = new Date().getMonth();
  console.log(`${month}`)

  const data ={
    labels: months.slice(0, (month)+1),
    datasets: [
      {
        label: "Sales for 2021 (M)",
        data: chartData,
        //estilizando grafico para esse set de dados
        borderColor: ['#87dfee'],
        borderWidth: 3,
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
    },
    scales:{
      yAxes:[{
        ticks:{
          min: 0,
          beginAtZero: true,
          stepSize: 1,
        }
      }]
    }
  }

  return(
    <div className="container">
      <div>
        <h3 onClick={getSalesByMonth}>Sales</h3>
      </div>
      <Line type={options.type} width={920} height={300} data = {data} options={options} />
    </div>
  );
}

export default SalesChart;