import React from 'react';
import Header from '../../components/Header/Header';
import Meta from '../../components/Meta/Meta';
import Profit from '../../components/Profit/Profit';
import SalesChart from '../../components/SalesChart/SalesChart';
import Stock from '../../components/Stock';

import './styles.scss';

const Landing: React.FC = () => {
  return (
    <div className='landingWrapper'>
      <Header title="Dashboard"/>
      <div className='cards'>
        <Profit />
        <Stock />
        <Meta />
      </div>
      <SalesChart />
    </div>
  );
}

export default Landing;