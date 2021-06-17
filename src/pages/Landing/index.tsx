import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Header from '../../components/Header/Header';
import Meta from '../../components/Meta/Meta';
import MetaModal from '../../components/MetaModal/MetaModal';
import Profit from '../../components/Profit/Profit';
import SalesChart from '../../components/SalesChart/SalesChart';
import Stock from '../../components/Stock/Stock';
import { ModalContext } from '../../contexts/ModalContext';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';

interface SalesData {
  _id:string;
  product: string;
  customer: string;
  price: number;
  date: string;
  description: string;
}

const Landing: React.FC = () => {

  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const {
    newMeta
  } = useContext(ModalContext);

  useEffect(()=>{
    api.get('/sale').then((res)=>{
      const data = res.data;
      const priceArray = data.map((data: SalesData) => data.price);
      const profit = priceArray.reduce((a:number, b:number) => a + b, 0)

      setTotalSales(data.length);
      setTotalProfit(profit);

    }).catch(err=>{
      notify('error', 'Unable to fetch data from server!')
    })
  },[])

  return (
    <div className='landingWrapper'>
      <Header title="Dashboard"/>
      <div className='cards'>
        <Profit profit={totalProfit} />
        <Stock totalSales={totalSales} />
        <Meta profit={totalProfit}/>
      </div>
      <SalesChart />
      { newMeta && <MetaModal/> }
    </div>
  );
}

export default Landing;