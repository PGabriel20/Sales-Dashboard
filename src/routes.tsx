  
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Sales from './pages/Sales';
import SalesForm from './pages/RegisterSale';
import Costumer from './pages/Costumers';
import CostumerForm from './pages/RegisterCostumer';

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/sales" exact component={Sales} />
        <Route path="/registersale/:_id" exact component={SalesForm} />
        <Route path="/registersale" exact component={SalesForm} />
        <Route path="/costumers" exact component={Costumer} />
        <Route path="/registercostumer" exact component={CostumerForm} />
        <Route path="/registercostumer/:_id" exact component={CostumerForm} />
      </BrowserRouter>
    );
}

export default Routes;