import React from 'react';
import './App.css';
import Tab from './components/Tab';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='browser'>
          <div className='tabs'>
            <Tab>
              <NavLink exact to='/' activeClassName='is-active'>
                Home
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to='/about' activeClassName='is-active'>
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to='/contact' activeClassName='is-active'>
                Contact
              </NavLink>
            </Tab>
          </div>

          <div className='viewport'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
