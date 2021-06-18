import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import ReactLoading from 'react-loading';
import { VscRefresh } from "react-icons/vsc";
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
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function getData(){
      await api.get('/sale').then((res)=>{
        const data = res.data;
        setSales(data);
      }).catch(err=>{
        alert(err)
      })
    }
    getData();
    getSalesByMonth();

    // If no data is avaliable, loading will occur
    if(!sales || !chartData){
      setLoading(true);
      setInterval(()=>{
        setRefresh(!refresh)
      },2000)
    }
    else{
      setLoading(false);
    }

  },[refresh])
  
  async function getSalesByMonth(){
    var Year = new Date().getFullYear().toString();

    const months = [
      `${Year}-01-01`, `${Year}-02-01`, `${Year}-03-01`, `${Year}-04-01`, `${Year}-05-01`, `${Year}-06-01`,
      `${Year}-07-01`, `${Year}-08-01`, `${Year}-09-01`, `${Year}-10-01`, `${Year}-11-01`, `${Year}-12-01`
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
  }

  const months = ["Jan", "Feb", "Mar", "Aprl", "May", "Jun", "Jul", "aug", "Sep", "Oct", "Nov", "Dec"]

  var month = new Date().getMonth();
  // console.log(`${month}`)

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
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Sales'
        },
        min: 0,
        max: 20,
        ticks: {
          // forces step size to be 5 units
          stepSize: 5
        }
      }
    }
  }

  const rotateIconRight = {
    transform: 'rotate(-360deg)',
  }

  // const rotateIconLeft = {
  //   transform: 'rotate(-300deg)',
  // }

  useEffect(()=>{
    getSalesByMonth();
  },[refresh])

  return(
    <div className="chartContainer">
      <div className='chartHeader'>
        <h3>Sales</h3>
      </div>
      <div className='chartContent'>
        { loading ? (
          <ReactLoading type={'bars'} color={'#29b6a3'} height={60} width={60} />
        ) : (
          <Line type={options.type} width={915} height={315} data = {data} options={options} />
        )}
      </div>
    </div>
  );
}

export default SalesChart;