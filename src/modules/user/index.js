import axios from "axios";

const host = process.env.NEXT_PUBLIC_HOST;

export const getUserApi = (id, token) => {
  const url = `${host}/user/profile/${id}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.get(url, config);
};

export const updatePinApi = (id, token, dataPin) => {
  const url = `${host}/user/pin/${id}`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return axios.patch(url, dataPin, config);
};

export const getAllUserAPi = (token) => {
  const url = `${host}/user`;
  const config = {
    headers: { Authorization: `Beader ${token}` }
  };
  return axios.get(url, config);
};
