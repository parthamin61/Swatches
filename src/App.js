import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Detailview from './Components/Detailview';
import Listview from './Components/Listview';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <div className="d-flex">
            <Sidebar />
            <Route exact path='/' component={Listview} />
            <Route path='/color-details' component={Detailview} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
