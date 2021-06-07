  
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Sales from './pages/Sales';
import SalesForm from './pages/Register';

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/sales" exact component={Sales} />
        <Route path="/register" exact component={SalesForm} />
      </BrowserRouter>
    );
}

export default Routes;