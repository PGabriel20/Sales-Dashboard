import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

import './styles.scss';

const MetaModal: React.FC = () => {

  const {
    setNewMeta
  } = useContext(ModalContext);

  return(
    <div className='overlay'>
      <div className='modalContainer'>
        <header>
          <span>Are you sure you want to delete the ?</span>
        </header>
        <section className='buttons'>
          <button>Confirm</button>
          <button onClick={()=>{setNewMeta(false)}}>Cancel</button>
        </section>
      </div>
    </div>
  );
}

export default MetaModal;