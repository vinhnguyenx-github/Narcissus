import React from "react";
import "./HomeContact.css";
import { LuMail } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";

const HomeContact = ({ language }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(language === "English" ? "Sending..." : "Đang gửi...");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f145dfc-caed-407a-96b6-a1b5d6ca415e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        language === "English"
          ? "Your message has been sent successfully"
          : "Lời nhắn của bạn đã được gửi thành công"
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="home-contact">
      <div className="home-contact-col">
        <h3>
          {language === "English"
            ? "Send us a message"
            : "Gửi cho chúng tôi một tin nhắn"}
        </h3>
        <p className="home-contact-description">
          {language === "English"
            ? "Have a question or feedback? Contact us via phone, email, or the form below. We're here to support you and ensure your stay with us is special."
            : "Có câu hỏi hoặc phản hồi? Liên hệ qua điện thoại, email hoặc form dưới đây. Chúng tôi ở đây để hỗ trợ bạn và đảm bảo kỳ nghỉ của bạn với chúng tôi là đặc biệt."}
        </p>
        <ul>
          <li>
            <LuPhoneCall size={20} className="icon" />
            <p>
              {language === "English" ? "Telephone:" : "Số điện thoại:"}{" "}
              <a href="tel:0337248276">0337248276</a>
            </p>
          </li>
          <li>
            <LuMail size={20} className="icon" />
            <p>
              {language === "English" ? "Email:" : "Email:"}{" "}
              <a href="mailto:Narcissus84leduan@gmail.com">
                Narcissus84leduan@gmail.com
              </a>
            </p>
          </li>
          <li>
            <LuFacebook size={20} className="icon" />
            <p>
              {language === "English" ? "Facebook:" : "Facebook:"}{" "}
              <a
                href="https://www.facebook.com/narcissus.apartment"
                target="blank"
              >
                Narcissus Apartment
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="home-contact-col">
        <form onSubmit={onSubmit}>
          <label>
            {language === "English" ? "Full Name:" : "Tên đầy đủ:"}{" "}
          </label>
          <input
            type="text"
            name="Tên"
            placeholder={language === "English" ? "Full name:" : "Họ và tên:"}
            required
          />
          <label>
            {language === "English" ? "Phone Number:" : "Số điện thoại:"}{" "}
          </label>
          <input
            type="tel"
            name="Số Điện Thoại"
            placeholder={
              language === "English" ? "Phone number:" : "Số điện thoại:"
            }
            required
          />
          <label>
            {language === "English" ? "Your message:" : "Lời nhắn của bạn:"}{" "}
          </label>
          <textarea
            name="Lời Nhắn"
            rows="6"
            placeholder={
              language === "English"
                ? "Enter your message here..."
                : "Điền lời bạn muốn gửi đến chúng tôi ở đây..."
            }
            required
          ></textarea>
          <button type="submit" className="submit-button">
            {language === "English" ? "Send Now" : "Gửi Ngay"}
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default HomeContact;
