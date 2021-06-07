import React from 'react';
import Header from '../../components/Header/Header';

import './styles.scss';

const SalesForm: React.FC = () => {
  return (
    <div className='formContainer'>
      <Header title="Register a sale"/>
      <form action="">
        <input type="text" />
        <input type="text" />
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </form>
    </div>
  );
}

export default SalesForm;