import React, { FormEvent, useState } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';

import Header from '../../components/Header/Header';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';

const CostumerForm: React.FC = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [observation, setObservation] = useState('');

  const [errors, setErrors] = useState({
    nameError: false,
    addressError: false,
    telephoneError: false,
  });

  const errorStyle ={
    border: "1px solid #DC3545",
  }

  function validate(){
    let isValid = true;
    
    if(name ==='' || address ==='' || telephone === '' || observation ===''){
      notify('error', 'Fill all the required inputs!');
    }
    if(name === ''){
      setErrors({...errors, nameError: true});
      isValid = false;  
    }
    else if(telephone === ''){
      setErrors({...errors, telephoneError: true});
      isValid = false;  
    }
    else if(address ===''){
      setErrors({...errors, addressError: true});
      isValid = false;  
    }
    return isValid;
  }

  function reset(){
    const initialState={
      nameError: false,
      addressError: false,
      telephoneError: false,
    }

    setErrors(initialState);
    
  }

  function wipeInputs(){
    setName('');
    setAddress('');
    setTelephone('');
    setObservation('');
  }

  async function handleAddSale(e: FormEvent){
    e.preventDefault();

    const isValid = validate();

    if(isValid){
      await api.post('/costumer',{
        name,
        address,
        telephone,
        observation,
      }).then(()=>{
        notify('success', 'Costumer added successfully!');
        reset();
        wipeInputs();
      }).catch(err=>{
        notify('error', 'Failed to add costumer! '+err);
      });
    }
  }

  return (
    <div className='customersPageWrapper'>
      <ToastContainer />
      <Header title='Register costumers' />
      <div className='backArrow'>
        <HiOutlineArrowNarrowLeft />
        <a href='/costumers'>Costumers</a>
      </div>
      <div className='formContainer'>
        <h2>Costumer info</h2>
        <form onSubmit={handleAddSale}>
          <input style={errors.nameError ? errorStyle:undefined} type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Costumer's name" />
          <InputMask mask='(99) 99999 - 9999' style={errors.telephoneError ? errorStyle:undefined} type="text" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} placeholder="Phone" />
          <fieldset>
            <input style={errors.addressError ? errorStyle:undefined} type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
          </fieldset>
          <textarea name="" value={observation} onChange={(e) => { setObservation(e.target.value) }} placeholder="Observations..." id="" cols={30} rows={8}></textarea>
          <button onClick={reset}>Register costumer</button>
        </form>
      </div>
    </div>
  );
}

export default CostumerForm;