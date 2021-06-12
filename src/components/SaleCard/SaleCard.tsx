import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import './styles.scss';

interface SaleData{
  _id: string;
  item: string;
  price: number;
  date: string;
  descripton?: string;
}

const SaleCard: React.FC<SaleData> = ({_id, item, price, date, descripton}) => {
  return (
    <div className='salesCard'>
      <div className='bar'/>
      <span>Item: {item}</span>
      <strong>Price: ${price}</strong>
      <strong>Date: {date}</strong>
      {descripton && <span>Description: {descripton}</span>}
      <div className='icons'>
        <a href="#"><AiFillDelete className='deleteSale'/></a>
        <a href={`/RegisterSale/${_id}`}><AiFillEdit className='editSale'/></a>
      </div>
    </div>
  );
}

export default SaleCard;