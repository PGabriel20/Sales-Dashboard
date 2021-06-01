import React from 'react';

import './styles.scss';

const Landing: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>GANHOS TOTAIS = soma total do preço dos produtos</p>
      <p>GRAFICO ESTOQUE (TORTA) = total de produtos cadastrados/capacidade máxima</p>
    </div>
  );
}

export default Landing;