import React from 'react';
import { useContext } from 'react';
import { FaRegTrashAlt, FaTimes } from "react-icons/fa";
import { ModalContext } from '../../contexts/ModalContext';
import api from '../../services/api';

import './styles.scss';

const Modal:React.FC = () => {

  const {
    setIsOpen, setDeleted,
    type, id
  } = useContext(ModalContext);

  async function handleDelete(){
    // since the modal can be used to delete both customers and sales
    //we pass the property type to distinguish the user action

    var url = '';

    if(type==='sales'){
      url = 'sale';
    }
    else{
      url = 'costumer';
    }
    await api.delete(`${url}/${id}`).then((res)=>{
      setDeleted(true);
      setIsOpen(false);
    }).catch(err=>{
      alert(err)
    })
  }

  return(
    <div className='overlay'>
      <div className='modalContainer'>
        <header>
          <FaRegTrashAlt />
          <span>Are you sure you want to delete the {type==='sales'?'sale':'customer'}?</span>
          {type==='sales'?<p>This will affect the chart!</p>:undefined}
        </header>
        <section className='buttons'>
          <button onClick={()=>{setIsOpen(false)}}>Cancel</button>
          <button onClick={handleDelete}>Confirm</button>
        </section>
      </div>
    </div>
  );
}

export default Modal;