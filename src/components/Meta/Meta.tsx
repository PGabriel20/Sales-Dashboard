import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiTwotoneEdit } from "react-icons/ai";
import { ToastContainer } from 'react-toastify';
import { ModalContext } from '../../contexts/ModalContext';
import notify from '../../utils/notify';

import './styles.scss';

interface MetaData{
  profit: number;
}

const Meta: React.FC<MetaData> = ({profit}) => {
  const [meta, setMeta] = useState(0);
  const [reached, setReached] = useState(false);
  const [metaTimer, setMetaTimer] = useState(false);
  const [localMeta, setLocalMeta] = useState(false);

  const {
    setNewMeta,
    setCreatedMeta, createdMeta
  } = useContext(ModalContext);

  const metaStyle={
    color: '#ffc107'
  }

  useEffect(()=>{
    const savedMeta = localStorage.getItem('meta');
    if(savedMeta){
      setLocalMeta(true);
      setMeta(Number(savedMeta));
      
      // Check if meta has been reached
      if(profit > Number(savedMeta)){
        setReached(true);
      }
      else{
        setReached(false);
      }
    }
    else{
      setLocalMeta(false);
      setReached(false);
    }

  },[metaTimer])
  
  useEffect(()=>{
    if(createdMeta){
      notify('success', 'New meta created successfully!');
      setCreatedMeta(false);
    }
  },[createdMeta])

  setInterval(()=>{
    setMetaTimer(!metaTimer)
  },2000)

  return (
    <div className='meta'>
      <h4>Meta</h4>
      <strong style={reached? undefined:metaStyle}>
        {localMeta ?
        (<p>$ {Number(meta).toFixed(2)}</p>) : 
        (
          <div className='noMeta'>
            <p>You currently dont have any meta!</p>
            <button onClick={()=>{setNewMeta(true)}}>Create a new meta</button>
          </div>
        )}
      </strong>
      { reached? <p>You've reached this month's sales meta!</p> :''}
      {localMeta && <AiTwotoneEdit onClick={()=>{setNewMeta(true)}} />}
      <ToastContainer />
    </div>
  );
}

export default Meta;