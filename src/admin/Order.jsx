import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "../styles/order.css";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../firebase.config";
import useAuth from "../custom-hooks/useAuth";
import userIcon from "../assets/images/user-icon.png";



const Order = () => {
  const [tab, setTab] = useState("prei");
  const { data: usersData } = useGetData("users");

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const years = Array.from(
    { length: 50 },
    (_, index) => new Date().getFullYear() - index
  );
  const [selectedImage, setSelectedImage] = useState(null);


  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };


  // chọn file 
  const fileInputRef = useRef(null);

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // logic upload ảnh
  const { currentUser } = useAuth();

  // 
  

  return (
    <section>
      <Container>
        <Row>
          <Col lg="2">
            <div className="order__item">
              <h4
                className={`${tab === "prei" ? "active__tab" : ""} mb-3`}
                onClick={() => setTab("prei")}
              >
                Hồ Sơ
              </h4>
              <h4
                className={`${tab === "chapi" ? "active__tab" : ""} mb-3`}
                onClick={() => setTab("chapi")}
              >
                Đổi Mật Khẩu
              </h4>
            </div>
          </Col>
          <Col lg="8">
            {tab === "prei" ? (
              usersData?.map((user) => (
                <div key={user.uid} className="order__user">
                  {/* <span className="fw-bold">{user.displayName}</span>
                    <span>{user.email}</span> */}
                  {/* <img src={user.photoURL} alt="" /> */}
                  <div className="user__form ">
                    <Form>
                      <table className="user__table">
                        <tr>
                          <td className="espR83">Tên đăng nhập</td>
                          <td className="Tmj5Z6">{user.displayName}</td>
                        </tr>
                        <tr>
                          <td className="espR83">Email</td>
                          <td className="Tmj5Z6">{user.email}</td>
                        </tr>
                        <tr>
                          <td className="espR83">Số điện thoại</td>
                          <td className="Tmj5Z6"></td>
                        </tr>
                        <tr>
                          <td className="espR83">Giới tính</td>
                          <td className="Tmj5Z6">
                            <input type="radio" />
                            <label>Nam</label>
                            <input type="radio" />
                            <label>Nữ</label>
                            <input type="radio" />
                            <label>Khác</label>
                          </td>
                        </tr>
                        <tr>
                          <td className="espR83">Ngày sinh</td>
                          <td className="Tmj5Z6">
                            <select
                              value={selectedDay}
                              onChange={handleDayChange}
                            >
                              <option value="">Ngày</option>
                              {days.map((day) => (
                                <option key={day} value={day}>
                                  {day}
                                </option>
                              ))}
                            </select>
                            <select
                              value={selectedMonth}
                              onChange={handleMonthChange}
                            >
                              <option value="">Tháng</option>
                              {months.map((month) => (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <select
                              value={selectedYear}
                              onChange={handleYearChange}
                            >
                              <option value="">Năm</option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="espR83"></td>
                          <td className="Tmj5Z6">
                            <button type="submit" className="buy__btn mt-0">
                              Lưu
                            </button>
                          </td>
                        </tr>
                      </table>
                    </Form>
                  </div>

                  <div className="IQPHvE">
                    <div className="scvgOW">
                      <div className="XWsmVn">
                        <div className="LoNm4g">
                            <img src={currentUser ? currentUser.photoURL : userIcon} alt="" />
                        </div>
                      </div>
                      <input
                        ref={fileInputRef}
                        className="bMWDYw"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        
                      ></input>
                      <button
                        type="buton"
                        className="btn btn-light btn--m btn--inline"
                        onClick={handleChooseImage}
                      >
                        Chọn ảnh
                      </button>
                      <div className="L4SAGB">
                        <div className="SlaeTm">Dụng lượng file tối đa 1 MB</div>
                        <div className="SlaeTm">Định dạng:.JPEG, .PNG</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4>Xin chao</h4>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Order;
