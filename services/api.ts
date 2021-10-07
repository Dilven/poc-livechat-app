import axios, { AxiosRequestConfig } from "axios";
import { authRef } from "../authRef";

const instanceApi = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

const getConfig = (params: AxiosRequestConfig = {}) => {
  return {
    ...params,
    headers: {
      Authorization: `Bearer ${authRef.token}`,
      "Content-Type": "application/json",
      ...params?.headers
    }
  };
};

const getSomething = async () => {
  const { data } = await instanceApi.get<{ message: string }>("/hello", getConfig());
  return data;
};

const getReport = async (text: string) => {
  const { data } = await instanceApi.get<{ message: string }>(`/report?text=${text}`, getConfig());
  return data;
};

export const Api = {
  getSomething,
  getReport,
};
