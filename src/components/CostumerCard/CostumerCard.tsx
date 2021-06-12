import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import './styles.scss';

interface CostumerData{
  _id: string;
  name: string;
  address: string;
  telephone: string;
  observation?: string;
}

const CostumerCard: React.FC<CostumerData> = ({_id, name, telephone, address, observation}) => {
  return (
    <div className='costumersCard'>
      <div className='bar'/>
      <span>Name: {name}</span>
      <strong>Phone: {telephone}</strong>
      <strong>Address: {address}</strong>
      {observation && <span>Observations: {observation}</span>}
      <div className='icons'>
        <a href=""><AiFillDelete className='deleteSale'/></a>
        <a href={`/RegisterCostumer/${_id}`}><AiFillEdit className='editSale'/></a>
      </div>
    </div>
  );
}

export default CostumerCard;