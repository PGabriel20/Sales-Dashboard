import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { ModalContext } from '../../contexts/ModalContext';

import './styles.scss';

interface CostumerData{
  _id: string;
  name: string;
  address: string;
  telephone: string;
  observation?: string;
}

const CostumerCard: React.FC<CostumerData> = ({_id, name, telephone, address, observation}) => {

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
    <div className='costumersCard'>
      <div className='bar'/>
      <span>Name: {name}</span>
      <strong>Phone: {telephone}</strong>
      <strong>Address: {address}</strong>
      <div className='icons'>
        <a href="#"><AiFillDelete className='deleteSale' onClick={()=>{handleModalData(_id, true, 'customers')}}/></a>
        <a href={`/RegisterCostumer/${_id}`}><AiFillEdit className='editSale'/></a>
      </div>
    </div>
  );
}

export default CostumerCard;