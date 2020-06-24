import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./MyApp.css";
import NavigationBar from "./components/myComponents/NavigationBar";
import LoginForm from "./components/myComponents/LoginForm";
import PrivateRoute from "./components/myComponents/PrivateRoute";
import CreateAccountForm from "./components/myComponents/CreateAccountForm";
import Dashboard from "./components/myComponents/Dashboard";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { INITIAL_STATE, reducer } from "./components/store/reducers/reducer";


const store = createStore( reducer, INITIAL_STATE );

export default () => 
{
  useEffect( () => { M.AutoInit() }, [] );
  return (
    <Provider store = { store } >
      <BrowserRouter> 
        <NavigationBar />
        <Switch>
          <Route exact path = "/" component = { LoginForm } />
          <Route path = "/createAccount" component = { CreateAccountForm } />
          <PrivateRoute path = "/dashboard" component = { Dashboard } />
          <Route>
            404
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}