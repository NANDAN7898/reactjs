import React, { useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const calculateExpTime = (expTime) => {
  const currentTime = new Date().getTime();
  const expiryTime = new Date(expTime).getTime();
  return expiryTime - currentTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpTime = localStorage.getItem("expTime");
  const remainingTime = calculateExpTime(storedExpTime);

  if (remainingTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const isUserLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", expirationTime);
    const expiryTime = calculateExpTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, expiryTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutTimer]);

  const contextValue = {
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
