import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.scss';

interface StockData {
  totalSales: number;
}

const StockComponent: React.FC<StockData> = ({totalSales}) => {
  return (
    <div className="stockContainer">
      <div>
        <h4>Sales</h4>
        <strong>{totalSales}</strong>
      </div>
      <img src="./assets/boxes.svg" alt="boxes" />
    </div>
  );
}

export default StockComponent;