import axios from "axios";
// import { logoutAction } from "store/actions/login/logoutAction";
import { logoutAction } from "../actions/login/logoutAction";

// import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_LOADING_FALSE } from "../../constants/login/loginConstants";
// import {
//   UNAUTHORIZED,
//   FORBIDDEN,
// } from "store/constants/statusCodes/statusCodes";
import { UNAUTHORIZED, FORBIDDEN } from "../constants/statusCodes/statusCodes";

// import store from "store/store";
// import store from "../../store";
import store from '../store'

const jsonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "*",
  Authorization:
    localStorage.getItem("authToken") && localStorage.getItem("authToken"),
};

const post = (url, params) =>
  axios.post(url, params, { headers: jsonHeaders }).catch((response) => {
    const { status } = response.response;
    if (status === FORBIDDEN || status === UNAUTHORIZED) {
      store.dispatch({ type: "REVOKED_TOKEN_ERROR_LOGOUT" });
      store.dispatch(logoutAction(false, false, true));
    }
    return Promise.reject(response);
  });

// const get = (url) =>
//   axios
//     .get(url, {
//       headers: {
//         jsonHeaders,
//         Authorization: localStorage.getItem("authToken"),
//       },
//     })
//     .catch((response) => {
//       const { status } = response.response;
//       if (status === FORBIDDEN || status === UNAUTHORIZED) {
//         store.dispatch(logoutAction(false, false, true));
//       } else {
//         return Promise.reject(response);
//       }
//     });

// const put = (url, params) =>
//   axios.put(url, params, { headers: jsonHeaders }).catch((response) => {
//     const { status } = response.response;
//     if (status === FORBIDDEN || status === UNAUTHORIZED) {
//       store.dispatch(logoutAction(false, false, true));
//     } else {
//       return Promise.reject(response);
//     }
//   });

const Delete = (url) =>
  axios.delete(url, { headers: jsonHeaders }).catch((response) => {
    const { status } = response.response;
    if (status === FORBIDDEN || status === UNAUTHORIZED) {
      store.dispatch(logoutAction(false, false, true));
    } else {
      return Promise.reject(response);
    }
  });

const loginPost = (url, params) =>
  axios
    .post(url, params, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .catch((response) => {
      return Promise.reject(response);
    });

// const getWithParams = (url, patientID) =>
//   axios
//     .get(url, {
//       headers: {
//         jsonHeaders,
//         Authorization: localStorage.getItem("authToken"),
//       },

//       params: {
//         search: patientID ?? null,
//       },
//     })
//     .catch((response) => {
//       const { status } = response.response;
//       if (status === FORBIDDEN || status === UNAUTHORIZED) {
//         store.dispatch(logoutAction(false, false, true));
//       } else {
//         return Promise.reject(response);
//       }
//     });

// export { loginPost, post, get, put, Delete, getWithParams };
export { loginPost, post, Delete };

