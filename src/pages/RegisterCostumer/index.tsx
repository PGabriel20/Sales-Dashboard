import React, { FormEvent, useEffect, useState } from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { ToastContainer } from 'react-toastify';
import InputMask from 'react-input-mask';

import Header from '../../components/Header/Header';
import api from '../../services/api';
import notify from '../../utils/notify';

import './styles.scss';
import { useHistory, useParams } from 'react-router-dom';

interface CostumerData {
  _id: string;
  name: string;
  address: string;
  telephone: string;
  observation: string;
}

const CostumerForm: React.FC = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [observation, setObservation] = useState('');

  const history = useHistory();

  let {_id}:any = useParams();

  const [errors, setErrors] = useState({
    nameError: false,
    addressError: false,
    telephoneError: false,
  });

  const errorStyle ={
    border: "1px solid #DC3545",
  }

  useEffect(()=>{
    if(_id){
      api.get(`costumer/${_id}`).then((res)=>{
        const data:CostumerData = res.data;
        setName(data.name);
        setAddress(data.address);
        setTelephone(data.telephone);
        setObservation(data.observation);
      }).catch(err=>{
        notify('error', `Failed to fetch single customer: ${err}`);
      })
    }
  },[])

  function validate(){
    let isValid = true;
    
    if(name ==='' || address ==='' || telephone === ''){
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

  async function handleAddCustomer(e: FormEvent){
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

  async function handleUpdateCustomer(e: FormEvent){
    e.preventDefault();

    const isValid = validate();

    if(isValid){
      await api.put(`costumer/${_id}`,{
        name,
        address,
        telephone,
        observation,
      }).then(()=>{
        notify('success', 'Costumer edited successfully!');
        reset();
      }).catch(err=>{
        notify('error', 'Failed to add costumer! '+err);
      });
    }
  }



  return (
    <div className='customersPageWrapper'>
      <ToastContainer />
      <Header title={_id?'Edit customer':'Register customer'} />
      <div className='backArrow' onClick={()=>{history.push('/costumers')}}>
        <HiOutlineArrowNarrowLeft />
        <span>Customers</span>
      </div>
      <div className='formContainer'>
        <h2>Costumer info</h2>
        <form onSubmit={_id? handleUpdateCustomer: handleAddCustomer}>
          <input style={errors.nameError ? errorStyle:undefined} type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Costumer's name" />
          <InputMask mask='(99) 99999 - 9999' style={errors.telephoneError ? errorStyle:undefined} type="text" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} placeholder="Phone" />
          <fieldset>
            <input style={errors.addressError ? errorStyle:undefined} type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" />
          </fieldset>
          <textarea name="" value={observation} onChange={(e) => { setObservation(e.target.value) }} placeholder="Observations..." id="" cols={30} rows={8}></textarea>
          <button onClick={reset}>{_id?'Save changes': 'Register customer'}</button>
        </form>
      </div>
    </div>
  );
}

export default CostumerForm;