import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./context/auth";

import Login from "./pages/Login/Login";
import Main from "./pages/Main";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/app/" component={Main} />
      <Route path="*" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;