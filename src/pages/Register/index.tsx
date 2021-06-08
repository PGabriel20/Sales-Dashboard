import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header/Header';
import api from '../../services/api';

import './styles.scss';

const SalesForm: React.FC = () => {
  const [product, setProduct] = useState('');
  const [costumer, setCostomer] = useState('');
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');


  async function handleAddSale(e: FormEvent){
    e.preventDefault();

    api.post('/sale',{
      date,
      product,
      costumer,
      price,
      description
    }).then(()=>{
      alert('Cadastrado com sucesso!');
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='salesPageWrapper'>
      <Header title='Register sales'/>
      <div className='formContainer'>
        <h2>Sale info</h2>
        <form onSubmit={handleAddSale}>
          <input type="text" value={product} onChange={(e) => { setProduct(e.target.value) }} placeholder="Product" />
          <input type="text" value={costumer} onChange={(e) => { setCostomer(e.target.value) }} placeholder="Costumer" />
          <fieldset>
            <input type="number" value={price===0?'':price} onChange={(e) => { setPrice(e.target.valueAsNumber) }} placeholder="Price" />
            <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
          </fieldset>
          <textarea name="" placeholder="Description..." id="" cols={30} rows={8}></textarea>
          <button>Register sale</button>
        </form>
      </div>
    </div>
  );
}

export default SalesForm;