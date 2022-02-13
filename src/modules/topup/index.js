import axios from "axios";

export const topupApi = (token, body) => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const url = `${host}/transaction/top-up`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return axios.post(url, body, config);
};
