import React, { Fragment, useEffect } from "react";
import {
  ArizonaName,
  FormContainer,
  FormContents,
  FormType,
} from "./auth.styles";
import { connect } from "react-redux";
import * as MyTypes from "MyTypes";
import { toggleMUNav } from "../../actions/Navbar";
import { NavbarStateI } from "../../reducers/navReducer";
import Auth from "./Auth";

interface Props {
  toggleMUNav: (T: boolean) => void;
  nav: NavbarStateI;
}

const AuthPage: React.FC<Props> = ({ nav, toggleMUNav }) => {
  useEffect(() => {
    toggleMUNav(false);
  }, []);
  return (
    <Fragment>
      <FormContainer>
        <FormContents>
          <ArizonaName>A R I Z O N A</ArizonaName>
          <FormType>Login</FormType>
          <Auth />
        </FormContents>
      </FormContainer>
    </Fragment>
  );
};

const mapStateToProps = (store: MyTypes.ReducerState) => ({
  nav: store.nav,
});

export default connect(mapStateToProps, { toggleMUNav })(AuthPage);
