import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import CostumerCard from '../../components/CostumerCard/CostumerCard';

import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import SaleCard from '../../components/SaleCard/SaleCard';
import { ModalContext } from '../../contexts/ModalContext';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';

interface CostumerData {
  _id: string;
  name: string;
  address: string;
  telephone: string;
  observation: string;
}

const Costumers: React.FC = () => {
  const [costumers, setCostumers] = useState([]);
  const [latest, setLatest] = useState(true);
  const [reset, setReset] = useState(false);
  const [searchText, setSearchText] = useState('');

  const {
    isOpen,
    deleted, setDeleted
  } = useContext(ModalContext)

  const arrowPosition = {
    transform: 'rotate(-90deg)'
  }

  useEffect(()=>{
    api.get('costumer').then((res)=>{
      setCostumers(res.data);
    }).catch(err=>{
      console.log(err)
    });
  },[reset])

  useEffect(()=>{
    if(searchText.trim().length < 3){
      setReset(!reset)
    }
    else{
      const filteredArray = costumers.filter((costumer: CostumerData)=>{
        return costumer.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
      })
      setCostumers(filteredArray);
    }
  },[searchText])

  useEffect(()=>{
    if(deleted===true){
      notify('success', 'Customer deleted successfully!');
      setDeleted(false);
      setReset(!reset);
    }
  },[deleted])

  return (
    <div className='costumersContainer'>
      <Header title="Costumers"/>
      <ToastContainer />
      <div className='filters'>
        <div>
          <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} placeholder='Search by costumer name' type="text" />
          { searchText!== '' ? (
            <AiOutlineClose onClick={()=>{setReset(!reset); setSearchText('');}}/>
          ):(
            <AiOutlineSearch />
          )}
        </div>
        <button>
          <AiOutlineRight onClick={()=>{setLatest(!latest)}} style={latest? undefined: arrowPosition}/>
        </button>
        <a href="/RegisterCostumer">Add costumer</a>
      </div>
      <div className='costumersList'>
        {costumers.length > 0 ?(
          latest
          ? costumers.slice(0).reverse().map((costumer: CostumerData)=>{
              return <CostumerCard _id={costumer._id} key={costumer._id} name={costumer.name}
                address={costumer.address}
                telephone={costumer.telephone}
                observation={costumer.observation}
              />
            })
          : costumers.map((costumer: CostumerData)=>{
              return <CostumerCard _id={costumer._id} key={costumer._id} name={costumer.name}
              address={costumer.address}
              telephone={costumer.telephone}
              observation={costumer.observation}
            />
            })
        ):(
          <h4>
            Couldn't find any costumer...
          </h4>
        )}
        {isOpen && <Modal/>}
      </div>
    </div>
  );
}

export default Costumers;