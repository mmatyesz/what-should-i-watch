import React from 'react';
import './components/App.css';
import Nav from './components/Nav';
import Top from './components/Top';
import About from './components/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
        <Route path ="/about" component={About}/>
        <Route path ="/top" component={Top}/>
    </div>
    </Router>
  );
}

export default App;
