import React from 'react';
import Header from '../../components/Header/Header';
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
        <div className='notes'>
          <h4>Notas</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <SalesChart />
    </div>
  );
}

export default Landing;