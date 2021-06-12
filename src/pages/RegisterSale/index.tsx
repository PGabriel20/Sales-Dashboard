import React, { FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';

import Header from '../../components/Header/Header';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';

const SalesForm: React.FC = () => {
  const initialDate = format(new Date(), 'yyyy-MM-dd');

  const [product, setProduct] = useState('');
  const [costumer, setCostomer] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(initialDate);
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({
    productError: false,
    costumerError: false,
    priceError: false,
    dateError: false,
  });

  const errorStyle ={
    border: "1px solid #DC3545",
  }

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
    setCostomer('')
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

  return (
    <div className='salesPageWrapper'>
      <ToastContainer />
      <Header title='Register sales'/>
      <div className='formContainer'>
        <h2>Sale info</h2>
        <form onSubmit={handleAddSale}>
          <input style={errors.productError ? errorStyle:undefined} type="text" value={product} onChange={(e) => { setProduct(e.target.value) }} placeholder="Product" />
          <input style={errors.costumerError ? errorStyle:undefined} type="text" value={costumer} onChange={(e) => { setCostomer(e.target.value) }} placeholder="Costumer" />
          <fieldset>
            <input style={errors.priceError ? errorStyle:undefined} type="number" value={price===0?'':price} onChange={(e) => { setPrice(e.target.valueAsNumber) }} placeholder="Price" />
            <input style={errors.dateError ? errorStyle:undefined} type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
          </fieldset>
          <textarea name="" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Description..." id="" cols={30} rows={8}></textarea>
          <button onClick={reset}>Register sale</button>
        </form>
      </div>
    </div>
  );
}

export default SalesForm;