import React, { useEffect } from 'react';

import './styles.scss';

interface ProfitData{
  profit: number;
}

const Profit: React.FC<ProfitData> = ({profit}) => {

  return (
    <div className='profitContainer'>
      <div>
        <h4>Earnings</h4>
        <strong>$ {profit.toFixed(2)}</strong>
      </div>
      <img src="./assets/money-bag.svg" alt="" />
    </div>
  );
}

export default Profit;