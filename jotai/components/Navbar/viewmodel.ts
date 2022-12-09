import { useAtom } from "jotai";
import { useEffect } from "react";
import { isLoggedInAtom, userAtom } from "../../store/auth";
import FirebaseAuth from "../../utils/firebaseAuth";
import { initialSetup } from "../../utils/firebaseInitialize";

export const useViewModel = () => {
  const firebaseApp = initialSetup();
  const [user, setUser] = useAtom(userAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const firebaseAuth = new FirebaseAuth(firebaseApp, setUser);

  useEffect(() => {
    setIsLoggedIn(user !== null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    firebaseAuth,
    isLoggedIn,
    user,
  };
};
