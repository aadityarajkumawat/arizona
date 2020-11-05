import { Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "./pages/Home";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AuthPage from "./components/auth/AuthPage";
import Product from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Fragment>
      <PrivateRoute path="/" privateComponent={Home} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/admin" component={AdminDashboard} />
      <Route exact path="/categories" component={Product} />
      <Route exact path="/choose-category" component={Categories} />
      <Route exact path="/cart" component={Cart} />
    </Fragment>
  );
};
export default Routes;
