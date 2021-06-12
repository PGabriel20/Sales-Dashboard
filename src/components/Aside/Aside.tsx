import React from 'react';
import { FaChartBar, FaClipboardList, FaCalendarAlt, FaUser } from "react-icons/fa";
import { HiDocumentAdd, HiUsers, HiUserAdd } from "react-icons/hi";
import { format} from 'date-fns';

import './styles.scss';

const Aside: React.FC = () => {

  var date = format(new Date(), 'dd/MM/yyyy');

  return (
    <aside className='sideMenu'>
      <div className='imageWrapper'>
        <FaUser />
      </div>
      <h2>Welcome! </h2>
      <nav>
        <a href="/"><div className='tag'/>Dashboard<FaChartBar /></a>
        <a href="/Sales"><div className='tag'/>Sales<FaClipboardList /></a>
        {/* <a href="/Register"><div className='tag'/>Add sale<HiDocumentAdd /></a> */}
        <a href="/Costumers"><div className='tag'/>Costumers<HiUsers /></a>
        <a href="/Costumers"><div className='tag'/>Add costumer<HiUserAdd /></a>
      </nav>
      <footer>
          <FaCalendarAlt />
          <strong>{date}</strong>
      </footer>
    </aside>
  );
}

export default Aside;