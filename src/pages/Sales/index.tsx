import React from 'react';
import Header from '../../components/Header/Header';
import SaleCard from '../../components/SaleCard/SaleCard';

import './styles.scss';

const Sales: React.FC = () => {
  return (
    <div className='salesContainer'>
      <Header title="Sales"/>
      <div className='salesList'>
        <SaleCard item="RTX 3090" price={2900} date="06/06/2021" />
      </div>
    </div>
  );
}

export default Sales;