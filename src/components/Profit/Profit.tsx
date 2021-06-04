import React from 'react';

import './styles.scss';

const Profit: React.FC = () => {
  const profit = 1234;

  return (
    <div className='profitContainer'>
      <div>
        <h4>Earnings</h4>
        <strong>$ {profit}</strong>
      </div>
      <img src="./assets/money-bag.svg" alt="" />
    </div>
  );
}

export default Profit;