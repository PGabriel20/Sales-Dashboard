import React from 'react';

import './styles.scss';

interface SaleData{
  item: string;
  price: number;
  date: string;
}

const SaleCard: React.FC<SaleData> = ({item, price, date}) => {
  return (
    <div className='salesCard'>
      <div className='bar'/>
      <span>Item: {item}</span>
      <strong>Price: ${price}</strong>
      <strong>Date: {date}</strong>
    </div>
  );
}

export default SaleCard;