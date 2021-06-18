import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from "react-icons/ai";

import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import SaleCard from '../../components/SaleCard/SaleCard';
import { ModalContext } from '../../contexts/ModalContext';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';

interface SalesData {
  _id:string;
  product: string;
  costumer: string;
  price: number;
  date: string;
  description: string;
}

const Sales: React.FC = () => {
  const [sales, setSales] = useState([]);
  const [latest, setLatest] = useState(true);
  const [reset, setReset] = useState(false);
  const [searchText, setSearchText] = useState('');

  //Accessing variables from context
  const {
    isOpen,
    deleted, setDeleted
  } = useContext(ModalContext)

  const arrowPosition = {
    transform: 'rotate(-90deg)'
  }

  useEffect(()=>{
    api.get('sale').then((res)=>{
      setSales(res.data);
    }).catch(err=>{
      console.log(err)
    });
  },[reset])

  useEffect(()=>{
    if(searchText.trim().length < 3){
      setReset(!reset)
    }
    else{
      const filteredArray = sales.filter((sale: SalesData)=>{
        return sale.product.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
      })
      setSales(filteredArray);
    }
  },[searchText])

  // this will monitor if a sale was removed and then notify
  useEffect(()=>{
    if(deleted===true){
      notify('success', 'Sale deleted successfully!');
      setDeleted(false);
      setReset(!reset);
    }
  },[deleted])

  return (
    <div className='salesContainer'>
      <Header title="Sales"/>
      <ToastContainer />
      <div className='filters'>
        <div>
          <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} placeholder='Search by item name' type="text" />
          { searchText!== '' ? (
            <AiOutlineClose onClick={()=>{setReset(!reset); setSearchText('');}}/>
          ):(
            <AiOutlineSearch />
            )}
        </div>
        <button>
          <AiOutlineRight onClick={()=>{setLatest(!latest)}} style={latest? undefined: arrowPosition}/>
        </button>
        <a href="/RegisterSale">Add sale</a>
      </div>
      <div className='salesList'>
        {sales.length > 0 ?(
          latest
          ? sales.slice(0).reverse().map((sale: SalesData)=>{
              return <SaleCard _id={sale._id} key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'dd/MM/yyyy')} />
            })
          : sales.map((sale: SalesData)=>{
              return <SaleCard _id={sale._id} key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'dd/MM/yyyy')} />
            })
        ):(
          <h4>
            Couldn't find any sale...
          </h4>
        )}
        {isOpen && <Modal/>}
      </div>
    </div>
  );
}

export default Sales;