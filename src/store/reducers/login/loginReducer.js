import {
  LOGIN_LOADING,
  LOGIN_LOADING_FALSE,
  LOGIN_SUCCESS,
  LOGOUT,
  REVOKED_TOKEN_ERROR_LOGOUT,
  RESET_ERROR_LOGOUT,
} from "../../constants/login/loginConstants";

const initialState = {
  loading: false,
  user: {},
  errorMessage: "",
  isLoggedIn: false,
  permissions: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { loading: true };

    case LOGIN_LOADING_FALSE:
      return { loading: false };

    case LOGIN_SUCCESS:
      return {
        ...state,
        permissions: action?.user?.roles?.[0]?.permission?.access,
        user: action.user,
        isLoggedIn: true,
        errorMessage: "",
        loading: false,
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
        user: null,
        permissions: {},
      };

    case REVOKED_TOKEN_ERROR_LOGOUT:
      return {
        isLoggedIn: false,
        user: null,
        permissions: {},
        errorMessage: "Your session has been expired, Please login again!",
      };

    case RESET_ERROR_LOGOUT:
      return {
        errorMessage: "",
      };

    default:
      return state;
  }
};
