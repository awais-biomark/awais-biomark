// import { LOGOUT } from "store/constants/login/loginConstants";
// import { logoutApi } from "store/api/authentication";
import store from '../../store'
import { LOGOUT } from "../../constants/login/loginConstants";
import { logoutApi } from "../../api/authentication";
const success = () => ({ type: LOGOUT });

export const logoutAction = (setLoader, navigate, revoked) => (dispatch) => {
  logoutApi()
    .then(() => {
      dispatch(success());
      localStorage.clear();
      navigate ? navigate("/login") : window.location.replace("/");
      revoked && store.dispatch({ type: "REVOKED_TOKEN_ERROR_LOGOUT" });
    })
    .finally(() => setLoader && setLoader(false));
};
