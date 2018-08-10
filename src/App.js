import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/js/Home';
import Workshops from './components/js/Workshops';
import Embroideries from './components/js/Embroideries';
import Kits from './components/js/Kits';
import Club from './components/js/Club';
import Contact from './components/js/Contact';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/talleres" component={Workshops}/>
            <Route  exact path="/bordados" component={Embroideries}/>
            <Route  exact path="/kits" component={Kits}/>
            <Route  exact path="/club" component={Club}/>
            <Route  exact path="/contacto" component={Contact}/>
            
        </div>
      </Router>
    );
  }
}

export default App;
