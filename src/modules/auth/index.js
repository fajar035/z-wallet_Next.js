import axios from "axios";

var host = process.env.NEXT_PUBLIC_HOST;

export const signupApi = (body) => {
  const url = `${host}/auth/register`;
  return axios.post(url, body);
};

export const loginApi = (body) => {
  const url = `${host}/auth/login`;
  return axios.post(url, body);
};

export const logoutApi = (config) => {
  const url = `${host}/auth/logout`;
  return axios.post(url, config);
};
