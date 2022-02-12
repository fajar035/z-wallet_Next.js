import axios from "axios";

const host = process.env.NEXT_PUBLIC_HOST;

export const getUserIdApi = (id, token) => {
  const url = `${host}/user/profile/${id}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(url, config);
};

export const getAllUserAPi = (token, params) => {
  const url = `${host}/user`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(url.concat(params), config);
};

export const updatePinApi = (id, token, dataPin) => {
  const url = `${host}/user/pin/${id}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.patch(url, dataPin, config);
};

export const checkPinApi = (dataPin, token) => {
  const url = `${host}/user/pin?pin=${dataPin}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(url, config);
};
