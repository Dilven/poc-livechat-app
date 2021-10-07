import { useState } from "react";
import AccountsSDK from "@livechat/accounts-sdk";
import { authRef } from "../authRef";
import { ChatSDK } from "../services/chat";

const options = {
  client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
  redirect_uri: "https://poc-livechat-app.vercel.app/",
  prompt: "consent",
};

const sdk = new AccountsSDK(options);

const useAuth = () => {
  const [authData, setAuthData] = useState<null | { code: string }>(null);
  const singIn = async () => {
    const data = await sdk.popup(options).authorize();
    authRef.token = data.access_token;
    setAuthData(data);
  };
  return {
    authData,
    singIn,
  };
};

export default useAuth;
