 import React, { Component } from 'react'
import "./App.css";
import { Route, Switch, Router } from 'react-router-dom';
import myAccount from "./components/myAccount";
import myProductsView from "./components/myProductsView";
import mainPage from "./components/mainPage";
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';


const browserHistory = createBrowserHistory();


export class App extends Component {
  render() {
    return (
          <ThemeProvider>
          <Router history={browserHistory}>
          <Route exact path="/" component={mainPage} />
          
        
          </Router>
        </ThemeProvider>
    )
  }
}

export default App
