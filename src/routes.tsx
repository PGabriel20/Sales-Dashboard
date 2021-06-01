  
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Products from './pages/Products';

function Routes(){
    return(
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/produtos" exact component={Products} />
      </BrowserRouter>
    );
}

export default Routes;