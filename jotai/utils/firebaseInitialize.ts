import { FirebaseApp } from "firebase/app";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

export const initialSetup = (): FirebaseApp => {
  const app = firebase.initializeApp(firebaseConfig);

  return app;
};
