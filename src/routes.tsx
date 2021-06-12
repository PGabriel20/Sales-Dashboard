  
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Sales from './pages/Sales';
import SalesForm from './pages/RegisterSale';
import Costumer from './pages/Costumers';

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/sales" exact component={Sales} />
        <Route path="/register" exact component={SalesForm} />
        <Route path="/costumers" exact component={Costumer} />
      </BrowserRouter>
    );
}

export default Routes;