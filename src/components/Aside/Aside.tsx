import React from 'react';
import { FaChartBar, FaAddressBook } from "react-icons/fa";

import './styles.scss';

const Aside: React.FC = () => {
  return (
    <aside className='sideMenu'>
     <nav>
       <a href="/"><div className='tag'/>Dashboard <FaChartBar /></a>
       <a href=""><div className='tag'/>Cadastrar <FaAddressBook /></a>
     </nav>
    </aside>
  );
}

export default Aside;