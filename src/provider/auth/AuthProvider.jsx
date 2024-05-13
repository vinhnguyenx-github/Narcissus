import React, { createContext, useState } from 'react';

const AuthDataContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const authentication = (userData) => {
    const { name, email, phone, hotel, role } = userData;
    setUser({ name, email, phone, hotel, role });
    setToken(userData.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthDataContext.Provider value={{ user, token, authentication, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataContext, AuthProvider };