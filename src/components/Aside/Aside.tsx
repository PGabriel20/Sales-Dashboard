import React from 'react';

import './styles.scss';

const Aside: React.FC = () => {
  return (
    <aside className='sideMenu'>
     <nav>
       <a href="/"><div className='tag'/>Dashboard</a>
       <a href=""><div className='tag'/>Cadastrar</a>
     </nav>
    </aside>
  );
}

export default Aside;