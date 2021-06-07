import React from 'react';

import './styles.scss';

interface SaleData{
  item: string;
  price: number;
  date: string;
  descripton?: string;
}

const SaleCard: React.FC<SaleData> = ({item, price, date, descripton}) => {
  return (
    <div className='salesCard'>
      <div className='bar'/>
      <span>Item: {item}</span>
      <strong>Price: ${price}</strong>
      <strong>Date: {date}</strong>
      {descripton && <span>Description: {descripton}</span>}
    </div>
  );
}

export default SaleCard;