import axios from "axios";

var host = process.env.NEXT_PUBLIC_HOST;
const loginApi = (body) => {
  const url = `${host}/auth/login`;
  return axios.post(url, body);
};

const logoutApi = (config) => {
  const url = `${host}/auth/logout`;
  return axios.post(url, config);
};

export default { loginApi, logoutApi };
