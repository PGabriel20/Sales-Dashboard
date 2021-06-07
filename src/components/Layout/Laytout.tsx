import React from 'react';
import Aside from '../Aside/Aside';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    // Layout is the component where all the components will be injected
    //Eliminating the need of rendering the side menu component on page change
    <main className="layout">
      <Aside />
      <section>
        {children}
      </section>
    </main>
  );
}

export default Layout;