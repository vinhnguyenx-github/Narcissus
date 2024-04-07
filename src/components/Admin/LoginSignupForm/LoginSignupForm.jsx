import React from "react";
import "./LoginSignupForm.css";
import { FaUserCircle, FaLock } from "react-icons/fa";

const LoginSignupForm = () => {
  return (
    <div className="login-form-container">
      <div className="login-form-left">
        <h1>Đăng Nhập</h1>
        <form action="#" method="post">
          <div className="login-input">
            <span>
              <FaUserCircle />
            </span>
            <input
              type="text"
              placeholder="Tên Đăng Nhập: "
              name="username"
              required
            />
          </div>
          <div className="login-input">
            <span>
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Mật Khẩu"
              name="password"
              required
            />
          </div>
          <button>Đăng Nhập</button>
        </form>
      </div>
      <div className="login-form-right">
        <h1>Xin Chào!</h1>
        <p>
          Bạn quên mật khẩu hay muốn tạo tài khoản? Liên hệ với admin bằng cách
          nhấn vào nút bên dưới
        </p>
        <a href="mailto:vinh.nguyen09102003@gmail.com">
          <button>Gửi Email</button>
        </a>
      </div>
    </div>
  );
};

export default LoginSignupForm;
