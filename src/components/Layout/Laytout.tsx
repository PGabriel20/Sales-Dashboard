import React from 'react';
import Aside from '../Aside/Aside';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    // Layout is the component where all the pages will be injectes
    <main className="layout">
      <Aside />
      <section>
        {children}
      </section>
    </main>
  );
}

export default Layout;