import axios from 'axios';
import { authRef } from '../authRef';

const baseApiPathname = '/api/';

const getSomething = async () => {
  const { data } = await axios.get<{ message: string }>(`${baseApiPathname}hello`, {
    headers: {
      "Authorization": `Bearer ${authRef.token}`,
    }
  });
  return data;
}

export const Api = {
  getSomething,
};