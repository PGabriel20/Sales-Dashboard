import React from 'react';

import './styles.scss';

interface HeaderData{
  title: string;
}

const Header: React.FC<HeaderData> = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;