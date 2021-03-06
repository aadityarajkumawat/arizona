export enum AuthFormState {
  SHOW_LOGIN_FORM = "SHOW_LOGIN_FORM",
  SHOW_SIGNUP_FORM = "SHOW_SIGNUP_FORM",
}

export enum AuthState {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
  SIGNUP_FAIL = "SIGNUP_FAIL",
  LOGOUT = "LOGOUT",
  LOAD_USER = "LOAD_USER",
  FORM_SUBMIT = "FORM_SUBMIT",
  RESET_FORM_STATE = "RESET_FORM_STATE",
  LOAD_USER_FAIL = "LOAD_USER_FAIL",
  CLEAR_ALERT = "CLEAR_ALERT",
  SET_ALERT = "SET_ALERT",
}

export enum AddProductState {
  ADD_PRODUCT = "ADD_PRODUCT",
}

export enum NavbarState {
  DESK_TYPE = "DESK_TYPE",
  MOB_TYPE = "MOB_TYPE",
  NAV_TYPE = "NAV_TYPE",
  MU_NAV = "MU_NAV",
  MOUNT_DROP = "MOUNT_DROP",
  UNMOUNT_DROP = "UNMOUNT_DROP",
}

export enum ProductTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  SET_CATEGORY = "SET_CATEGORY",
  CLEAR_SEARCH = "CLEAR_SEARCH",
}

export enum CartTypes {
  UPDATE_CART = "UPDATE_CART",
  GET_CART_PRODUCTS = "GET_CART_PRODUCTS",
}
