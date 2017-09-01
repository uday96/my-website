import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AboutMe from './AboutMe/AboutMe.react';
import { Switch, Route } from 'react-router-dom';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Switch>
            <Route exact path='/' component={AboutMe}/>
        </Switch>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
