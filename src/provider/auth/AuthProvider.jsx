import React, { createContext, useState } from 'react';

const AuthDataContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const authentication = (userData) => {
    setToken(userData.token);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthDataContext.Provider value={{ token, authentication, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataContext, AuthProvider };