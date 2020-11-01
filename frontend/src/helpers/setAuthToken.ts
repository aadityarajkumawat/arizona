import Axios from "axios";

const setAuthToken = (t: string | null) => {
  if (t) {
    Axios.defaults.headers.common["x-auth-token"] = t;
  } else {
    delete Axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
