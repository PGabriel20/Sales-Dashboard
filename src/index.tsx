import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);