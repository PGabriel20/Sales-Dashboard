import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import './styles.scss';

interface CostumerData{
  name: string;
  address: string;
  telephone: string;
  observation?: string;
}

const CostumerCard: React.FC<CostumerData> = ({name, telephone, address, observation}) => {
  return (
    <div className='salesCard'>
      <div className='bar'/>
      <span>Name: {name}</span>
      <strong>Phone: {telephone}</strong>
      <strong>Address: {address}</strong>
      {observation && <span>Observations: {observation}</span>}
      <div className='icons'>
        <a href="" ><AiFillDelete className='deleteSale'/></a>
        <a href=""><AiFillEdit className='editSale'/></a>
      </div>
    </div>
  );
}

export default CostumerCard;