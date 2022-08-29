import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithGoogle,
  logout,
} from "../services/firebaseAuthentication";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="navbar-container">
      <div>Catdex</div>
      <div>
        {!loading && user && user?.photoURL ? (
          <button onClick={logout}>
            <img src={user.photoURL} alt="user" className="rounded w-8 h-8" />
          </button>
        ) : (
          <button onClick={logInWithGoogle}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
