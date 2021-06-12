import React, { FormEvent, useEffect, useState } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';

import Header from '../../components/Header/Header';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

interface CostumerData {
  _id: string;
  name: string;
  address: string;
  telephone: string;
  observation: string;
}

interface SalesData {
  _id:string;
  product: string;
  costumer: string;
  price: number;
  date: string;
  description: string;
}

const SalesForm: React.FC = () => {
  const initialDate = format(new Date(), 'yyyy-MM-dd');

  const [product, setProduct] = useState('');
  const [costumer, setCostumer] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(initialDate);
  const [costumers, setCostumers] = useState([]);

  const [description, setDescription] = useState('');

  const history = useHistory();

  //Getting id passed as a param to this route
  let {_id}:any = useParams();

  //If there is an id being passed, then this page will be
  //meant to edit the sale
  //The useEffect hook is responsible for checking for the id
  useEffect(()=>{
    if(_id){
      api.get(`sale/${_id}`).then((res)=>{
        const data:SalesData = res.data;
        setProduct(data.product);
        setCostumer(data.costumer);
        setPrice(data.price);
        const oldDate = format(new Date(data.date), 'yyyy-MM-dd');
        setDate(oldDate);
        setDescription(data.description);
      }).catch(err=>{
        notify('error', `Failed to fetch single sale: ${err}`);
      })
    }
  },[])
  
  useEffect(()=>{
    api.get('costumer').then((res)=>{
      setCostumers(res.data)
    }).catch(err=>{
      notify('error', `Failed to fetch costumers: ${err}`);
    })
  },[])

  const [errors, setErrors] = useState({
    productError: false,
    costumerError: false,
    priceError: false,
    dateError: false,
  });

  const errorStyle ={
    border: "1px solid #DC3545",
  }

  // Form Validation method

  function validate(){
    let isValid = true;
    
    if(product ==='' || costumer ==='' || price === 0|| date ===''){
      notify('error', 'Fill all the required inputs!');
    }
    if(product === ''){
      setErrors({...errors, productError: true});
      isValid = false;  
    }
    else if(costumer ===''){
      setErrors({...errors, costumerError: true});
      isValid = false;  
    }
    else if(price === 0){
      setErrors({...errors, priceError: true});
      isValid = false;  
    }
    else if(date === ''){
      setErrors({...errors, dateError: true});
      isValid = false;  
    }
    return isValid;
  }

  // Methods triggered after update/create
  function reset(){
    const initialState={
      productError: false,
      costumerError: false,
      priceError: false,
      dateError: false,
    }

    setErrors(initialState);
    
  }

  function wipeInputs(){
    setProduct('');
    setPrice(0);
    setCostumer('')
    setDescription('');
    setDate(initialDate);
  }

  async function handleAddSale(e: FormEvent){
    e.preventDefault();

    const isValid = validate();

    if(isValid){
      await api.post('/sale',{
        date,
        product,
        costumer,
        price,
        description
      }).then(()=>{
        notify('success', 'Sale added successfully!');
        reset();
        wipeInputs();
      }).catch(err=>{
        notify('error', 'Failed to add sale! '+err);
      });
    }
  }

  async function handleUpdateSale(e: FormEvent){
    e.preventDefault();

    const isValid = validate();

    if(isValid){
      await api.put(`sale/${_id}`,{
        date,
        product,
        costumer,
        price,
        description
      }).then(()=>{
        notify('success', 'Sale eddited successfully!');
        reset();
      }).catch(err=>{
        notify('error', 'Failed to edit sale! '+err);
      });
    }
  }

  return (
    <div className='salesPageWrapper'>
      <ToastContainer />
      <Header title={_id?'Edit Sale': 'Register Sale'} />
      <div className='backArrow' onClick={()=>{history.push('/sales')}}>
        <HiOutlineArrowNarrowLeft/>
        <span>Sales</span>
      </div>
      <div className='formContainer'>
        <h2>Sale info</h2>
        <form onSubmit={_id? handleUpdateSale: handleAddSale}>
          <input style={errors.productError ? errorStyle:undefined} type="text" value={product} onChange={(e) => { setProduct(e.target.value) }} placeholder="Product" />
          {/* <input style={errors.costumerError ? errorStyle:undefined} type="text" value={costumer} onChange={(e) => { setCostumer(e.target.value) }} placeholder="Costumer" /> */}
          <select style={errors.costumerError ? errorStyle:undefined} id="costumer" value={costumer} onChange={(e) => { setCostumer(e.target.value) }}>
            <option style={{color:'#c2c2c9'}} value="#">Select a costumer</option>
            {costumers.map((costumer:CostumerData)=>{
              return (<option value={costumer._id}>{costumer.name}</option>)
            })}
          </select>
          <fieldset>
            <input style={errors.priceError ? errorStyle:undefined} type="number" value={price===0?'':price} onChange={(e) => { setPrice(e.target.valueAsNumber) }} placeholder="Price" />
            <input style={errors.dateError ? errorStyle:undefined} type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
          </fieldset>
          <textarea name="" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Description..." id="" cols={30} rows={8}></textarea>
          <button onClick={reset}>{_id?'Save changes': 'Register sale'}</button>
        </form>
      </div>
    </div>
  );
}

export default SalesForm;