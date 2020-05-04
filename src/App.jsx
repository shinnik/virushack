import React from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/index.jsx';
import PurchasesPage from './pages/PurchasesPage/index.jsx';
import DialogPage from './pages/DialogPage/index.jsx';
import FinalPage from './pages/FinalPage/index.jsx';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/purchases" component={PurchasesPage} />
        <Route exact path="/dialog" component={DialogPage} />
        <Route exact path="/final" component={FinalPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
