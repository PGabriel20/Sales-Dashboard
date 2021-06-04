import React from 'react';
import SalesChart from '../../components/SalesChart/SalesChart';

import './styles.scss';

const Landing: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <SalesChart />
    </div>
  );
}

export default Landing;