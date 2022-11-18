import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './Website/Home/Main';
import Blogroll from './Website/Article/Blogroll';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="header">
            <li>
            <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/nav">Nav</Link>
              </li>
              <li>
                <Link to="/blogroll">BlogRoll</Link>
              </li>
              <li>
                <Link to="/footer">Footer</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Main/>}></Route>
                  <Route exact path='Nav' element={< Nav />}></Route>
                 <Route exact path='/blogroll' element={< Blogroll />}></Route>
                 <Route exact path='/footer' element={< Footer />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;