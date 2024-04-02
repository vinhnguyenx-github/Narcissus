import React, { useState } from "react";
import "./LoginSignupForm.css";

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or signup view

  const toggleView = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle between login and signup views
  };

  return (
    <div className="admin-signup-login-form-container">
      <div className="signup-login-header">
        {/* Toggle buttons */}
        <button
          onClick={toggleView}
          className={isLogin ? "" : "button-disable"}
        >
          Đăng Nhập
        </button>
        <button
          onClick={toggleView}
          className={!isLogin ? "" : "button-disable"}
        >
          Đăng Kí
        </button>
      </div>
      <div className="signup-login-container">
        <form>
          <div className="signup-login-form-names">
            <div className="form-row">
              <input
                type="text"
                placeholder="Tên Đăng Nhập"
                className="signup-login-field"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Mật Khẩu"
                className="signup-login-field"
              />
            </div>
            {/* Conditional rendering based on isLogin state */}
            {isLogin ? (
              <div className="login-signup-submit-button">
                <button type="submit">Đăng Nhập</button>
              </div>
            ) : (
              <div className="login-signup-submit-button">
                <button type="submit">Đăng Kí</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
