import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { ModalContext } from '../../contexts/ModalContext';

import './styles.scss';

const MetaModal: React.FC = () => {
  const [meta, setMeta] = useState(0);
  const [savedMeta, setSavedMeta] = useState(0);

  const {
    setNewMeta, setCreatedMeta
  } = useContext(ModalContext);

  useEffect(()=>{
    const localMeta = localStorage.getItem('meta')
    setSavedMeta(Number(localMeta));
  },[savedMeta])


  function newMeta(){
    localStorage.setItem('meta', meta.toString())
    setCreatedMeta(true);
    setNewMeta(false);
  }

  return(
    <div className='metaModalOverlay'>
      <div className='metaModalContainer'>
        <FaTimes className='closeIcon' onClick={()=>{setNewMeta(false)}}/>
        <header>
          <span>Insert a value for the new meta</span>
          {savedMeta===0?undefined :<p>Current meta: ${savedMeta.toFixed(2)}</p>}
          {/* <FiTarget /> */}
        </header>
        <div className='inputContainer'>
          <input type="number" value={meta} onChange={(e)=>{setMeta(e.target.valueAsNumber)}} placeholder="$00,0"/>
        </div>
        <section className='metaModalButtons'>
          <button onClick={newMeta}>Save</button>
          <button onClick={()=>{setNewMeta(false)}}>Cancel</button>
        </section>
      </div>
    </div>
  );
}

export default MetaModal;