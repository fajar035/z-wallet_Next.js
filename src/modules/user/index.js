import axios from "axios";

const getUser = (id, config) => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const url = `${host}/user/profile/${id}`;
  return axios.get(url, config);
};

export default getUser;
