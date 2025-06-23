import React, { useEffect, useState } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaRss } from "react-icons/fa6";
import { FaMapMarkerAlt, FaSun } from "react-icons/fa";

const TopHeader: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date as "Mon, Jun 23, 2025 | Updated 04.45PM IST"
  const formatDate = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const d = date.getDate();
    const y = date.getFullYear();
    let h = date.getHours();
    const m = date.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12;
    const mm = m < 10 ? "0" + m : m;
    return `${day}, ${month} ${d}, ${y} | Updated ${h < 10 ? "0" : ""}${h}.${mm}${ampm} IST`;
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 600px) {
            .top-header-bar {
              display: none !important;
            }
          }
        `}
      </style>
      <div className="top-header-bar" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 0 4px 0",
        background: "#fff",
        fontSize: "13px",
        borderBottom: "1px solid #eee"
      }}>
        {/* Left: Edition, Language, Date + Weather */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <img src="https://flagcdn.com/in.svg" alt="IN" width={18} style={{ borderRadius: 2, marginRight: 2 }} />
            <span>Edition</span>
            <select style={{ border: "none", background: "transparent", fontSize: 13, cursor: "pointer" }}>
              <option>IN</option>
              <option>US</option>
            </select>
          </div>
          <div>
            <select style={{ border: "none", background: "transparent", fontSize: 13, cursor: "pointer" }}>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
          <div style={{ color: "#555", marginLeft: 8, display: "flex", alignItems: "center", gap: 0 }}>
            {formatDate(dateTime)}
            {/* Divider */}
            <span
              style={{
                display: "inline-block",
                width: 1,
                height: 18,
                background: "#ccc",
                margin: "0 12px"
              }}
            />
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaMapMarkerAlt style={{ color: "#222", fontSize: 16, marginRight: 4 }} />
              <span style={{ fontWeight: 500, marginRight: 8 }}>Mumbai</span>
              <FaSun style={{ color: "#f9c74f", fontSize: 16, marginRight: 4 }} />
              <span>29<sup>o</sup>C</span>
            </span>
          </div>
        </div>
        {/* Right: Buttons, Social */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginRight: 12 }}>
          <button style={{
            border: "none",
            background: "#d32f2f",
            color: "#fff",
            borderRadius: 3,
            padding: "2px 12px",
            fontWeight: 600,
            fontSize: 13,
            cursor: "pointer"
          }}>Subscribe</button>
          <span style={{ color: "#555", marginLeft: 4, marginRight: 4, cursor: "pointer" }}>Sign In</span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="#" style={{ color: "#3b5998" }}><FaFacebookF /></a>
            <a href="#" style={{ color: "#222" }}><FaXTwitter /></a>
            <a href="#" style={{ color: "#f9a825" }}><FaRss /></a>
            <a href="#" style={{ color: "#d32f2f" }}><FaYoutube /></a>
            <a href="#" style={{ color: "#e1306c" }}><FaInstagram /></a>
            <a href="#" style={{ color: "#0077b5" }}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

