import React from 'react';
import Profit from '../../components/Profit/Profit';
import SalesChart from '../../components/SalesChart/SalesChart';

import './styles.scss';

const Landing: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Profit />
      <SalesChart />
    </div>
  );
}

export default Landing;