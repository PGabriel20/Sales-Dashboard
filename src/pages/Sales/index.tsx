import React from 'react';
import SaleCard from '../../components/SaleCard/SaleCard';

import './styles.scss';

const Sales: React.FC = () => {
  return (
    <div className='salesContainer'>
      <header>
        <h1>Sales</h1>
      </header>
      <div className='salesList'>
        <SaleCard />
      </div>
    </div>
  );
}

export default Sales;