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
        <SaleCard item="RTX 3090" price={2900} date="06/06/2021" />
      </div>
    </div>
  );
}

export default Sales;