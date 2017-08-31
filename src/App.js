import React, { Component } from 'react';
import './App.css';
import StaticAppBar from './StaticAppBar/StaticAppBar.react';
import Footer from './Footer/Footer.react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <StaticAppBar />
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
