import React from 'react';
import StockChart from '../../components/StockChart/StockChart';

import './styles.scss';

const Landing: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>GANHOS TOTAIS = soma total do preço dos produtos</p>
      <p>GRAFICO ESTOQUE (TORTA) = total de produtos cadastrados/capacidade máxima</p>
      <StockChart />
    </div>
  );
}

export default Landing;