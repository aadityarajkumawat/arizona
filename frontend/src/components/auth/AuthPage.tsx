import React, { Fragment, useEffect } from "react";
import {
  ArizonaName,
  BackButton,
  BackWrapperContainer,
  FormContainer,
  FormContents,
  FormType,
} from "./auth.styles";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { toggleMUNav } from "../../actions/Navbar";
import { NavbarStateI } from "../../reducers/navReducer";
import Auth from "./Auth";
import { History } from "history";
import { UserAuthState } from "../../reducers/authReducer";

interface Props {
  toggleMUNav: (T: boolean) => void;
  nav: NavbarStateI;
  history: History;
  auth: UserAuthState;
}

const AuthPage: React.FC<Props> = ({ nav, toggleMUNav, history, auth }) => {
  useEffect(() => {
    toggleMUNav(false);
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/");
    }
  }, [auth.isAuthenticated]);

  const goBack = () => {
    history.push("/");
    toggleMUNav(true);
  };

  return (
    <Fragment>
      <FormContainer>
        <FormContents>
          <ArizonaName>
            <BackButton onClick={goBack}>
              <BackWrapperContainer></BackWrapperContainer>
            </BackButton>
            A R I Z O N A
          </ArizonaName>
          <FormType>Login</FormType>
          <Auth />
        </FormContents>
      </FormContainer>
    </Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  nav: store.nav,
  auth: store.auth,
});

export default connect(mapStateToProps, { toggleMUNav })(AuthPage);
