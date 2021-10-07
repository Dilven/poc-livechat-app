import React, { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { ChatClient } from "../services/chat";

type LivechatState = {
  authData: ReturnType<typeof useAuth>["authData"];
};
type LivechatDispatch = {
  singIn: ReturnType<typeof useAuth>["singIn"];
};
export const LivechatStateContext = createContext<LivechatState | undefined>(
  undefined
);
export const LivechatDispatchContext = createContext<
  LivechatDispatch | undefined
>(undefined);

type Props = {
  children: React.ReactNode;
};

export const LivechatProvider = ({ children }: Props) => {
  const [_loggedIn, setLoggedIn] = useState(false);
  const { authData, singIn } = useAuth();

  useEffect(() => {
    if (authData) {
      ChatClient.init({ access_token: authData.access_token });
      setLoggedIn(true);
      return ChatClient.destroy;
    }
  }, [authData]);

  const api = { singIn };
  const state = { authData };

  return (
    <LivechatDispatchContext.Provider value={api}>
      <LivechatStateContext.Provider value={state}>
        {children}
      </LivechatStateContext.Provider>
    </LivechatDispatchContext.Provider>
  );
};
