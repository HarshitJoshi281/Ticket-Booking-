import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const login = () => {
    setAuth(true);
    setShowModal(false);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        showModal,
        toggleModal,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;