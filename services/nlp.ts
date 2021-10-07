import axios from "axios";

const instanceApi = axios.create({
  baseURL: process.env.SENTIMENT_API,
  timeout: 3000,
});

const getSentiment = async (text: string) => {
  const { data } = await instanceApi.post('/sentiment', { text });
  return data;
}

export const nlpClient = {
  getSentiment
}