import React from 'react';

import './styles.scss'

const Modal:React.FC = () => {
  return(
    <div className='overlay'>
      <div className='container'>
        <h1>Sou um Modal</h1>
      </div>
    </div>
  );
}

export default Modal;