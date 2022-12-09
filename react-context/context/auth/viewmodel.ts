import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseAuth from "../../utils/firebaseAuth";
import { initialSetup } from "../../utils/firebaseInitialize";

export const useViewModel = () => {
  const firebaseApp = initialSetup();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firebaseAuthInstance, setFirebaseAuthInstance] =
    useState<FirebaseAuth>();
  const [user, setUser] = useState<User | null>(null);

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
  }, [user]);

  return {
    isLoggedIn,
    user,
    signIn,
    signOut,
  };
};
