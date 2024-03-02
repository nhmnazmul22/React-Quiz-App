import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
const AuthContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user), setLoading(false);
    });

    return unsubcribe;
  }, []);

  //Singup Functionlaity
  async function singUp(username, email, password) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update user profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }
  // login function
  async function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  // Logout function
  async function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  // forgot Password Function
  async function forgotPassword(email) {
    const auth = getAuth();
    return sendPasswordResetEmail(auth, email);
  }

  const value = {
    currentUser,
    singUp,
    login,
    logout,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
