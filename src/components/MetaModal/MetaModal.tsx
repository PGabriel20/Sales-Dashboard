import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { ModalContext } from '../../contexts/ModalContext';

import './styles.scss';

const MetaModal: React.FC = () => {
  const {
    setNewMeta
  } = useContext(ModalContext);

  return(
    <div className='metaModalOverlay'>
      <div className='metaModalContainer'>
        <FaTimes className='closeIcon' onClick={()=>{setNewMeta(false)}}/>
        <header>
          <span>Insert a value for the new meta</span>
          <p>Current meta: $100,00</p>
          {/* <FiTarget /> */}
        </header>
        <div className='inputContainer'>
          <input type="number" placeholder="$00,0"/>
        </div>
        <section className='metaModalButtons'>
          <button>Save</button>
          <button onClick={()=>{setNewMeta(false)}}>Cancel</button>
        </section>
      </div>
    </div>
  );
}

export default MetaModal;