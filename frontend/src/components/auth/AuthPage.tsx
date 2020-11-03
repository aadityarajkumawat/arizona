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
import Alert from "../alert/Alert";
import { FormTypeReducer } from "../../reducers/authFormReducer";

interface Props {
  toggleMUNav: (T: boolean) => void;
  nav: NavbarStateI;
  history: History;
  auth: UserAuthState;
  authForm: FormTypeReducer;
}

const AuthPage: React.FC<Props> = ({
  authForm,
  nav,
  toggleMUNav,
  history,
  auth,
}) => {
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
          <FormType>
            {authForm.formType === "login" ? "Login" : "Sign Up"}
          </FormType>
          {auth.errors !== "" && <Alert errorMsg={auth.errors} />}
          <Auth />
        </FormContents>
      </FormContainer>
    </Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  nav: store.nav,
  auth: store.auth,
  authForm: store.authForm,
});

export default connect(mapStateToProps, { toggleMUNav })(AuthPage);
