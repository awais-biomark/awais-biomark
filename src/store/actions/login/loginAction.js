// import { useState } from "react";
// import MaxAttemptPopupForLogin from "../../../LoginScreens/MaxAttemptPopupForLogin";
// import { loginApi } from "../../api/authentication";
// import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_LOADING_FALSE } from "../../constants/login/loginConstants";
// import { SUCCESSFUL } from "../../constants/statusCodes/statusCodes";

// const success = (user) => ({
//   type: LOGIN_SUCCESS,
//   user,
// });

// export const loginAction = (userName, password, setError) => (dispatch) => {

//   setError("");
//   dispatch({ type: LOGIN_LOADING });
//   loginApi(userName, password)
//     .then((response) => {
//       if (response.status === SUCCESSFUL) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         localStorage.setItem("authToken", response.headers.authorization);
//         setError("");
//         dispatch(success(response.data));
//         console.log(response.data);
//       } else {
//         setError(response);
//         dispatch({ type: LOGIN_LOADING_FALSE });
//         console.log(response);
//       }
//     })
//     .catch((err) => {
//       setError(err.response.data);
//       dispatch({ type: LOGIN_LOADING_FALSE });
//       console.log(err.response.data);
//       if (err.response.status) {
//         console.log('err response data here ' + err.response.data);
//         <MaxAttemptPopupForLogin />
//       }
//       console.log('account is locked by me console');
//     });
// };




import MaxAttemptPopupForLogin from "../../../LoginScreens/MaxAttemptPopupForLogin";
import { loginApi } from "../../api/authentication";
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_LOADING_FALSE } from "../../constants/login/loginConstants";
import { SUCCESSFUL } from "../../constants/statusCodes/statusCodes";

const success = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginAction = (userName, password, setError) => (dispatch) => {

  setError("");
  dispatch({ type: LOGIN_LOADING });




  return loginApi(userName, password)
    .then((response) => {
      if (response.status === SUCCESSFUL) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("authToken", response.headers.authorization);
        setError("");
        dispatch(success(response.data));
        // console.log(response.data);
      } else {
        setError(response);
        // setReponseError(true);
        dispatch({ type: LOGIN_LOADING_FALSE });
        // console.log(response);
      }
    }).catch((error) => { throw new Error(error) });






  // debugger
  // setError(err.response.data);
  // dispatch({ type: LOGIN_LOADING_FALSE });
  // return Promise.reject(err);
  // console.log(err.response.data);
  // setOpen(true);
  // setReponseError(true);
  // setOpen(true);
  // navigate ? navigate("/login") : window.location.replace("/logistics");
  // if (!!err.response.data) {
  // setOpen(true);
  // setOpen(true);
  // reponseErrorset(true);
  // navigate ? navigate("/login") : window.location.replace("/logistics");
  // console.log('err response data here ' + err.response.data);
  // <MaxAttemptPopupForLogin />
  // setOpen(true);
  // }
  // console.log('account is locked by me console');
  // });
};
