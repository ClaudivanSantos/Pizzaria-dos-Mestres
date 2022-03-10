import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import NotFound from "./components/NotFound";
import Home from "./pages/home/Home";
import {useLogin} from "./hooks/UseLogin.jsx";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NewPassword from "./pages/NewPassword/NewPassword";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { logado } = useLogin();
  return (
    <Route
      {...rest}
      render={(props) =>
        logado ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/resetpassword" component={ResetPassword} />
        <Route exact path="/newpassword/:id" component={NewPassword} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default Routes;