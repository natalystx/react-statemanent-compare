import React from "react";
import Image from "next/image";
import { useViewModel } from "./viewmodel";

const Navbar = () => {
  const { user, signIn, signOut, isLoggedIn } = useViewModel();

  return (
    <div className="w-full p-4 bg-slate-400 flex justify-between items-center sticky top-0 left-0">
      <div className="w-10 h-10 rounded-full relative overflow-hidden">
        {user?.photoURL && (
          <Image layout="fill" src={user.photoURL} alt="user-avatar" />
        )}
      </div>
      {!isLoggedIn ? (
        <button
          className="p-2 bg-green-500 rounded-lg"
          onClick={() => signIn()}
        >
          login
        </button>
      ) : (
        <button
          className="p-2 bg-blue-500 rounded-lg"
          onClick={() => signOut()}
        >
          logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
