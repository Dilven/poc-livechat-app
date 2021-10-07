import { useState } from "react";
import AccountsSDK from "@livechat/accounts-sdk";
import { authRef } from "../authRef";

const options = {
  client_id: process.env.NEXT_PUBLIC_LIVECHAT_APP_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_LIVECHAT_APP_REDIRECT_URI,
  // prompt: "consent",
};

const sdk = new AccountsSDK(options);

const useAuth = () => {
  const [authData, setAuthData] = useState<null | { access_token: string }>(
    null
  );
  const singIn = async () => {
    try {
      const data = await sdk.popup(options).authorize();
      console.log("🚀 ~ file: useAuth.ts ~ line 19 ~ singIn ~ data", data);
      authRef.token = data.access_token;
      setAuthData(data);
    } catch (e) {
      console.error(e);
    }
  };
  return {
    authData,
    singIn,
  };
};

export default useAuth;
