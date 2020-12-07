import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasePage from "./Pages/BasePage";
import AdminPage from "./Pages/AdminPage";
import UserPage from "./Pages/UserPage";
import CalculatorPage from "./Pages/CalculatorPage";
import Nav from './Components/Nav';

const App = ({ store }) => (
    <BrowserRouter>
        <Nav/>
      <Switch>
        <Route exact path='/' component={BasePage}/>
          <Route exact path='/admin' component={AdminPage}/>
          <Route exact path='/user' component={UserPage}/>
          <Route exact path='/calc' component={CalculatorPage}/>
      </Switch>
    </BrowserRouter>
);
export default App