import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth";
import FirebaseAuth from "../../utils/firebaseAuth";
import { initialSetup } from "../../utils/firebaseInitialize";

export const useViewModel = () => {
  const firebaseApp = initialSetup();
  const { setIsLoggedIn, setUser, isLoggedIn, user } = useAuthStore();
  const [firebaseAuthInstance, setFirebaseAuthInstance] =
    useState<FirebaseAuth>();

  const signIn = () => {
    firebaseAuthInstance?.signIn();
  };

  const signOut = () => {
    firebaseAuthInstance?.signOut();
  };

  useEffect(() => {
    const firebaseAuth = new FirebaseAuth(firebaseApp, setUser);
    setFirebaseAuthInstance(firebaseAuth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoggedIn(user !== null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    isLoggedIn,
    user,
    signIn,
    signOut,
  };
};
