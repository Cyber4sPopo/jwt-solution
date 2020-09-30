import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route as PublicRoute,
  Redirect
} from "react-router-dom";
import Home from './pages/Homepage'
import Login from './pages/Login'
import { isLogin } from './services/auth'
import Register from "./pages/Register";

const Route = ({ component: Component, ...rest }) => (<PublicRoute {...rest} render={props => (
  isLogin() ?
      <Component {...props} />
  : <Redirect to="/login" />
)} />)

export default () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
