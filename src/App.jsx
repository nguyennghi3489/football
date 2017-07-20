import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import Search from './pages/Search/Search.jsx';
import Package from './pages/Package.jsx';
import Roster from './pages/Roster.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import Helmet from 'react-helmet'
import Header from './components/Header/Header.jsx'
require("./App.css");

createHistory();
const title = 'You Are Doing Great'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Helmet titleTemplate={`%s - ${title}`} />
          {/*<div className="App-header">*/}
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            {/*<ul className='nav-links left'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/abc'>Buy Packs</Link></li>
                <li><Link to='/bcd'>Buy Packs</Link></li>
                <li><Link to='/roster/2'>Buy Roster</Link></li>
            </ul>*/}
          {/*</div>*/}
          {/*<p className="App-intro">
          </p>*/}
          <div className='app-body'>
            <Switch>
              <Route exact title='Search' path='/' component={Search}/>
              <Route exact title='Package' path='/abc' component={Package}/>
              <Route exact path='/bcd' component={Package}/>
              <Route path='/roster/:number' component={Roster}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
