import React from 'react';
import { BrowserRouter as Router  } from "react-router-dom";
import { Route, Switch } from "react-router";
import Nav from './components/Nav/Nav.component';
import Home from './pages/Home/Home';
import './App.css'
import Footer from './components/Footer/Footer.component';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
