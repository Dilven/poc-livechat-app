import axios from 'axios';

const baseApiPathname = '/api/';

const getSomething = async () => {
  const { data } = await axios.get<{ message: string }>(`${baseApiPathname}hello`);
  return data;
}

export const Api = {
    getSomething,
};