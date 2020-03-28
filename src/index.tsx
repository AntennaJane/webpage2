import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/index.css';
import App from './pages/App';
import Index from './pages/Index';
import * as serviceWorker from './serviceWorker';
import App404 from "./pages/App404";

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App/>
      </Route>
      <Route path="/~Solferino">
        <Index/>
      </Route>
      <Route>
        <App404/>
      </Route>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
