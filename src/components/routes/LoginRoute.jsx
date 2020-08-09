import React from "react";
import { Redirect, Route } from "react-router-dom";

const LoginRoute = ({ auth, ...props }) => {
  return auth ? <Redirect to="/" /> : <Route auth={auth} {...props} />;
};

export default LoginRoute;
