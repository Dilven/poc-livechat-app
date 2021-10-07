import axios from "axios";

const authorize = async (code: string) => {
  const { data } = await axios.post<any, any>(
    "https://accounts.livechat.com/v2/token",
    {
      grant_type: "authorization_code",
      code,
      client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
      client_secret: process.env.LIVECHAT_APP_CLIENT_SECRET,
      redirect_uri: "https://poc-livechat-app.vercel.app/",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data as { access_token: string };
};

const getChats = async (token: string) => {
  const { data: chats } = await axios.post<any, any>(
    "https://api.livechatinc.com/v3.3/agent/action/list_chats",
    {},
    {
      headers: { Authorization: token },
    }
  );
  return chats;
};

export const livechatClient = {
  authorize,
  getChats,
};
