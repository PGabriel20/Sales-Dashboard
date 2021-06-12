import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from "react-icons/ai";
import CostumerCard from '../../components/CostumerCard/CostumerCard';

import Header from '../../components/Header/Header';
import SaleCard from '../../components/SaleCard/SaleCard';
import api from '../../services/api';

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

  return (
    <div className='costumersContainer'>
      <Header title="Costumers"/>
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
      </div>
    </div>
  );
}

export default Costumers;