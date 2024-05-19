import React, { createContext, useState, useEffect } from 'react';

const AuthDataContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const authentication = (userData) => {
    const { name, email, phone, hotel, role, token } = userData;
    const user = { name, email, phone, hotel, role };
    setUser(user);
    setToken(token);

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthDataContext.Provider value={{ user, token, authentication, logout }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export { AuthDataContext, AuthProvider };
