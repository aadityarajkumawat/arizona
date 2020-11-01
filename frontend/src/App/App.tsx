import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../Routes";
import setAuthToken from "../helpers/setAuthToken";
import store from "../store";
import { loadUserI } from "../actions/Auth";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { UserAuthState } from "../reducers/authReducer";

interface Props {
  auth: UserAuthState;
  loadUserI: () => void;
}

if (localStorage) {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
}

const App: React.FC<Props> = ({ loadUserI, auth }) => {
  useEffect(() => {
    loadUserI();
  }, [auth.token]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  auth: store.auth,
});

export default connect(mapStateToProps, { loadUserI })(App);
