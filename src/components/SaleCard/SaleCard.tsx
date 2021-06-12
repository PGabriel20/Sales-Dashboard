import React from 'react';
import { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ModalContext } from '../../contexts/ModalContext';

import './styles.scss';

interface SaleData{
  _id: string;
  item: string;
  price: number;
  date: string;
  descripton?: string;
}

const SaleCard: React.FC<SaleData> = ({_id, item, price, date, descripton}) => {

  const {
    setIsOpen,
    setId,
    setType
  } = useContext(ModalContext)

  function handleModalData(_id: string, isOpen: boolean, type: string){
    setIsOpen(isOpen);
    setId(_id);
    setType(type)
  }

  return (
    <div className='salesCard'>
      <div className='bar'/>
      <span>Item: {item}</span>
      <strong>Price: ${price}</strong>
      <strong>Date: {date}</strong>
      {descripton && <span>Description: {descripton}</span>}
      <div className='icons'>
        <a href="#"><AiFillDelete className='deleteSale' onClick={()=>{handleModalData(_id, true, 'sales')}}/></a>
        <a href={`/RegisterSale/${_id}`}><AiFillEdit className='editSale'/></a>
      </div>
    </div>
  );
}

export default SaleCard;