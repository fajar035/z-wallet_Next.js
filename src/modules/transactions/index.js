import axios from "axios";

const host = process.env.NEXT_PUBLIC_HOST;

export const transferApi = (token, body) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const url = `${host}/transaction/transfer`;
  return axios.post(url, body, config);
};
