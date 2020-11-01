import { Route } from "react-router-dom";

import React, { Fragment } from "react";
import Home from "./pages/Home";
import Auth from "./components/auth/Auth";
import PrivateRoute from "./PrivateRoute";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Fragment>
      <PrivateRoute path="/" privateComponent={Home} />
      <Route exact path="/auth" component={Auth} />
    </Fragment>
  );
};
export default Routes;
