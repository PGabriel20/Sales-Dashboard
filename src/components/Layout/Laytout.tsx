import React from 'react';
import { ModalProvider } from '../../contexts/ModalContext';
import Aside from '../Aside/Aside';
import './styles.scss';

const Layout: React.FC = ({children}) => {
  return(
    // Layout is the component where all the components will be injected
    //Eliminating the need of rendering the side menu component on page change
    <main className="layout">
      <Aside />
      <section>
        <ModalProvider>
          {children}
        </ModalProvider>
      </section>
    </main>
  );
}

export default Layout;