import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from '../header/Header';
import About from '../pages/about/About';
import Skicams from '../pages/skicams/Skicams';
import Contact from '../pages/contact/Contact';
import Footer from '../footer/Footer';


const App = () => (
  <Router>
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/skicams" component={Skicams}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" render={() => <Redirect to="/about"/>}/>
      </Switch>
      <Footer/>
    </React.Fragment>
  </Router>
);

export default App;