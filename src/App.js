import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Profile from './components/Profile';
import Details from './components/Details';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>  
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Profile" component={Profile}/>
             <Route path="/Details"  component={Details}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;