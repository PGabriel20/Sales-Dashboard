import React from 'react';
import Aside from '../Aside/Aside';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    <main className="layout">
      <Aside />
      <section>
        {children}
      </section>
    </main>
  );
}

export default Layout;