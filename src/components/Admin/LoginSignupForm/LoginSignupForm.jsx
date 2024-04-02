import React from "react";
import "./LoginSignupForm.css";

const LoginSignupForm = () => {
  return (
    <div className="admin-signup-login-form-container">
      <div className="signup-login-header">
        <button>Đăng Nhập</button>
        <button className="button-disable">Đăng Kí</button>
      </div>
    </div>
  );
};

export default LoginSignupForm;
