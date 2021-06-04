import React from 'react';

import './styles.scss';

const StockComponent: React.FC = () => {
  const products = 12000

  return (
    <div className="stockContainer">
      <div>
        <h4>Products</h4>
        <strong>{products}</strong>
      </div>
      <img src="./assets/boxes.svg" alt="boxes" />
    </div>
  );
}

export default StockComponent;