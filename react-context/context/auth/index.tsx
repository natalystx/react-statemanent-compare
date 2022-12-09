import { User } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { useViewModel } from "./viewmodel";

type AuthContextParams = {
  isLoggedIn: boolean;
  user: User | null;
  signIn: () => void;
  signOut: () => void;
};

const Context = createContext<AuthContextParams>({} as AuthContextParams);
export const useAuthContext = () => useContext(Context);
const AuthContext = ({ children }: any) => {
  const { isLoggedIn, user, signIn, signOut } = useViewModel();

  return (
    <Context.Provider value={{ isLoggedIn, user, signIn, signOut }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
