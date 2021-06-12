import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from "react-icons/ai";

import Header from '../../components/Header/Header';
import SaleCard from '../../components/SaleCard/SaleCard';
import api from '../../services/api';

import './styles.scss';

interface SalesData {
  _id:string;
  product: string;
  customer: string;
  price: number;
  date: string;
  description: string;
}

const Sales: React.FC = () => {
  const [sales, setSales] = useState([]);
  const [latest, setLatest] = useState(true);
  const [reset, setReset] = useState(false);
  const [searchText, setSearchText] = useState('');

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

  function filterByDate(){
    var startDate = new Date("2021-01-01");
    var endDate = new Date("2021-03-12");

    const filtered = sales.filter((a:SalesData)=>{
      var date = new Date(a.date);
      return (date >= startDate && date <= endDate);
    });

    console.log(filtered)
  }

  return (
    <div className='salesContainer'>
      <Header title="Sales"/>
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
              return <SaleCard key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'MM/dd/yyyy')} />
            })
          : sales.map((sale: SalesData)=>{
              return <SaleCard key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'MM/dd/yyyy')} />
            })
        ):(
          <h4>
            Couldn't find any sale...
          </h4>
        )}
      </div>
    </div>
  );
}

export default Sales;