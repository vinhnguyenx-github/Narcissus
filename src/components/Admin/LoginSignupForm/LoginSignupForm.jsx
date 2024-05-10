import React, { useState, useContext } from "react";
import "./LoginSignupForm.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import APIService from "../../../services/APIService";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginSignupForm = () => {
  const { authentication } = useContext(AuthDataContext);
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await APIService.login(login);
      setSubmitted(true);
      console.log("Đăng nhập thành công:", response.data);
      authentication(response.data.data);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-left">
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <span>
              <FaUserCircle />
            </span>
            <input
              type="text"
              placeholder="Tên Đăng Nhập: "
              name="email"
              value={login.email}
              onChange={handleInputChange}
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
              value={login.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Đăng Nhập</button>
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
