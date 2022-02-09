import axios from "axios";

const getHistoryTransaction = (config) => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const url = `${host}/transaction/history?page=1&limit=4`;
  return axios.get(url, config);
};

export default getHistoryTransaction;
