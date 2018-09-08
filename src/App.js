import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Workshops from './components/workshops/Workshops';
import Embroideries from './components/embroideries/Embroideries';
import Kits from './components/kits/Kits';
import Club from './components/club/Club';
import Contact from './components/contact/Contact';
import Register from './components/workshops/Register';
import ThankYouPage from './components/workshops/ThankYouPage';

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
            <Route  exact path="/registro" component={Register}/>
            <Route  exact path="/gracias" component={ThankYouPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
