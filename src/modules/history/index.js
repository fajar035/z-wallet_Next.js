import axios from "axios";

const host = process.env.NEXT_PUBLIC_HOST;

export const getHistoryHomeApi = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const url = `${host}/transaction/history?page=1&limit=4`;
  return axios.get(url, config);
};

export const getHistoryIdApi = (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const url = `${host}/transaction/history/${id}`;
  return axios.get(url, config);
};
