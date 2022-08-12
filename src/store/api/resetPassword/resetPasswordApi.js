import { post, put } from "../server";

export const resetPassword = (password, confirmPassword, token) => {
  const data = JSON.stringify({
    user: {
      password,
      password_confirmation: confirmPassword,
      reset_password_token: token,
    },
  });
  return put(`${process.env.REACT_APP_BASE_URL}/password`, data);
};

export const forgetPassword = (email) => {
  const data = JSON.stringify({
    user: {
      email,
    },
  });
  return post(`${process.env.REACT_APP_BASE_URL}/forget_password`, data);
};
