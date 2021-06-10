import React, { useEffect, useState } from 'react';

import './styles.scss';

interface ProfitData{
  profit: number;
}

const Profit: React.FC<ProfitData> = ({profit}) => {
  const [blur, setBlur] = useState(false);

  const blurred ={
    color: "#0178ef",
    textShadow: "none"
  }

  return (
    <div className='profitContainer'>
      <div>
        <h4>Earnings</h4>
        <strong style={blur? undefined: blurred} onClick={()=>{setBlur(blur)}}>$ {profit.toFixed(2)}</strong>
      </div>
      <img src="./assets/money-bag.svg" alt="" />
    </div>
  );
}

export default Profit;