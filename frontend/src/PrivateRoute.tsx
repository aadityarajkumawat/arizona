import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { UserAuthState } from "./reducers/authReducer";

interface Props {
  privateComponent: React.FC;
  path: string;
  auth?: UserAuthState;
}

const PrivateRoute: React.FC<Props> = ({ privateComponent, path, auth }) => {
  return (
    <Fragment>
      {auth && auth.isAuthenticated && (
        <Route exact path={path} component={privateComponent} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  auth: store.auth,
});

export default connect(mapStateToProps, null)(PrivateRoute);
