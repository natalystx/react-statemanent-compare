import { User } from "firebase/auth";
import { atom } from "jotai";
export const isLoggedInAtom = atom<boolean>(false);
export const userAtom = atom<User | null>(null);
