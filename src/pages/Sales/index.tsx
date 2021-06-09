import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
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
  const [latest, setLatest] = useState(false);
  const [reset, setReset] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    api.get('sale').then((res)=>{
      setSales(res.data);
    }).catch(err=>{
      console.log(err)
    })
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

  return (
    <div className='salesContainer'>
      <Header title="Sales"/>
      <div>
        <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} type="text" />
        <button onClick={()=>{setLatest(true)}}>Latest</button>
        <button onClick={()=>{setLatest(false)}}>Oldest</button>
      </div>
      <div className='salesList'>
        {sales.length>0?(
          latest
          ? sales.slice(0).reverse().map((sale: SalesData)=>{
              return <SaleCard key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'MM/dd/yyyy')} />
            })
          : sales.map((sale: SalesData)=>{
              return <SaleCard key={sale._id} item={sale.product} price={sale.price} date={format(new Date(sale.date),'MM/dd/yyyy')} />
            })
        ):(
          <div>
            Could not find any sale.
          </div>
        )}
      </div>
    </div>
  );
}

export default Sales;