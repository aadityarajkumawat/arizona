import { Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AuthPage from "./components/auth/AuthPage";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Fragment>
      <PrivateRoute path="/" privateComponent={Home} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/admin" component={AdminDashboard} />
    </Fragment>
  );
};
export default Routes;
