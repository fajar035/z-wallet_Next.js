import axios from "axios";

const url = "https://zwalet.herokuapp.com/auth/login";

const loginApi = (body) => {
  return axios.post(url, body);
};

export default loginApi;
