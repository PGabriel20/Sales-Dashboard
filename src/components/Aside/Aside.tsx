import React from 'react';
import { FaChartBar, FaAddressBook, FaCalendarAlt } from "react-icons/fa";
import { format} from 'date-fns';

import './styles.scss';

const Aside: React.FC = () => {

  var date = format(new Date(), 'dd/MM/yyyy');

  return (
    <aside className='sideMenu'>
      <h2>Bem vindo(a)</h2>
     <nav>
       <a href="/"><div className='tag'/>Dashboard <FaChartBar /></a>
       <a href="/Produtos"><div className='tag'/>Cadastrar <FaAddressBook /></a>
     </nav>
     <footer>
       <FaCalendarAlt />
        <strong>{date}</strong>
     </footer>
    </aside>
  );
}

export default Aside;