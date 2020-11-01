import { Route } from "react-router-dom";

import React, { Fragment } from "react";
import Home from "./pages/Home";
import Auth from "./components/auth/Auth";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
    </Fragment>
  );
};
export default Routes;
