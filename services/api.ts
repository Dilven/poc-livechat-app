import axios from 'axios';

const baseApiPathname = '/api/';

const getSomething = async (access_token: string) => {
  const { data } = await axios.get<{ message: string }>(`${baseApiPathname}hello?code=${access_token}`);
  return data;
}

export const Api = {
    getSomething,
};