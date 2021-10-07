import axios, { AxiosRequestConfig } from "axios";
import { authRef } from "../authRef";
import { Chat } from "../models/livechat";
import { Sentiment } from "../models/sentiment";

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
      ...params?.headers,
    },
  };
};

const getChats = async () => {
  const { data } = await instanceApi.get<Chat[]>("/chats", getConfig());
  return data;
};

const getReport = async (text: string) => {
  const { data } = await instanceApi.get<Sentiment>(
    `/report?id=${text}`,
    getConfig()
  );
  return data;
};

export const Api = {
  getChats,
  getReport,
};
