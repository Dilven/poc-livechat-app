import axios from "axios";
import { authRef } from "../authRef";

const instanceApi = axios.create({
  baseURL: "/api/",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${authRef.token}`,
  },
});

const getSomething = async () => {
  const { data } = await instanceApi.get<{ message: string }>("hello");
  return data;
};

const getReport = async (text: string) => {
  const { data } = await axios.get<{ message: string }>(`report?text=${text}`);
  return data;
};

export const Api = {
  getSomething,
  getReport,
};
