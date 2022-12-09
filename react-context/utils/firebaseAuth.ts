import { FirebaseApp } from "firebase/app";
import {
  Auth,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";

export default class FirebaseAuth {
  private firebaseApp: FirebaseApp;
  private authentication: Auth;

  constructor(firebaseApp: FirebaseApp, setUser?: (user: User | null) => void) {
    this.firebaseApp = firebaseApp;

    this.authentication = getAuth(this.firebaseApp);

    this.authentication.onAuthStateChanged((user) => {
      setUser && setUser(user);
    });
  }

  async signIn() {
    try {
      await signInWithPopup(this.authentication, new GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  async signOut() {
    await this.authentication?.signOut();
  }
}
