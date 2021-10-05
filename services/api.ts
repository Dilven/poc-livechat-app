import axios from 'axios';

const baseApiPathname = '/api/';

const getSomething = async (code: string) => {
  const { data } = await axios.get<{ message: string }>(`${baseApiPathname}hello?code=${code}`);
  return data;
}

export const Api = {
    getSomething,
};