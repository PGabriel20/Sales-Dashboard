import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
      <div className='icons'>
        <a href="/RegisterSale/123">TESTE</a>
        <AiFillDelete />
        <AiFillEdit />
      </div>
    </div>
  );
}

export default SaleCard;