import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";


const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title="Checkout">
      <CommonSection title="Thanh Toán" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Địa Chỉ Nhận Hàng :</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Tên của bạn..." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Nhập email..." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Số điện thoại..." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Địa chỉ..." />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Thành phố" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Mã bưu điện" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Số Lượng: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Giá: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Giao Hàng: <br />
                    Miễn Phí Giao Hàng
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Tổng Giá: <span>&{totalAmount}</span>
                </h4>

                <button className="buy__btn auth__btn w-100">
                Đặt Hàng
              </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
