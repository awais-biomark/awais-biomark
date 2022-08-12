// import { loginPost } from "./server.js";
import { loginPost, Delete } from "./server.js";
export const loginApi = (username, password) => {
  const data = JSON.stringify({
    rider: { email: username, password: password },
  });
  return loginPost(`${process.env.REACT_APP_BASE_URL}/riders/login`, data);
};

export const logoutApi = () =>
  Delete(`${process.env.REACT_APP_BASE_URL}/logout`);
