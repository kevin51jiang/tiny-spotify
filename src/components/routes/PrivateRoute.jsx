import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ auth, ...props }) => {
  return auth ? <Route auth={auth} {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
