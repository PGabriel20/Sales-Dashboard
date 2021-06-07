import React from 'react';
import Header from '../../components/Header/Header';

import './styles.scss';

const SalesForm: React.FC = () => {
  return (
    <div className='salesPageWrapper'>
      <Header title='Register sales'/>
      <div className='formContainer'>
        <h2>Sale info</h2>
        <form action="">
          <input type="text" placeholder="Name" />
          <fieldset>
            <input type="text" placeholder="Price" />
            <input type="date" />
          </fieldset>
          <textarea name="" placeholder="Description..." id="" cols={30} rows={8}></textarea>
          <button>Register sale</button>
        </form>
      </div>
    </div>
  );
}

export default SalesForm;