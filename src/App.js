import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AboutMe from './AboutMe/AboutMe.react';
import Work from './Work/Work.react';
import Blog from './Blog/Blog.react';
import { Switch, Route } from 'react-router-dom';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe}/>
            <Route exact path={process.env.PUBLIC_URL + '/work'} component={Work}/>
            <Route exact path={process.env.PUBLIC_URL + '/blog'} component={Blog}/>
        </Switch>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
