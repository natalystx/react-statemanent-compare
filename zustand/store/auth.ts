import { User } from "firebase/auth";
import create from "zustand";

type AuthStoreParams = {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (val: User | null) => void;
  setIsLoggedIn: (val: boolean) => void;
};

export const useAuthStore = create<AuthStoreParams>((set) => ({
  isLoggedIn: false,
  user: null,
  setUser: (val) => set((state) => ({ ...state, user: val })),
  setIsLoggedIn: (val) => set((state) => ({ ...state, isLoggedIn: val })),
}));
