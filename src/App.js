import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/js/Home';
import Contact from './components/js/Contact';
import Projects from './components/js/Projects';
import Shops from './components/js/Shops';
import Workshops from './components/js/Workshops';
import History from './components/js/History';
import News from './components/js/News';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/historia" component={History}/>
            <Route  exact path="/proyectos" component={Projects}/>
            <Route  exact path="/tiendas" component={Shops}/>
            <Route  exact path="/talleres" component={Workshops}/>
            <Route  exact path="/contacto" component={Contact}/>
            <Route  exact path="/noticias" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;
