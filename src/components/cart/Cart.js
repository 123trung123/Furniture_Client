import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCartItem, setCartNull } from "../../redux/cartSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; // Import EmailJS
import "./cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const userInfo = useSelector((state) => state.user.userInfo); // Get user info from Redux
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateById = (item, flag) => {
    dispatch(updateCartItem({ id: item.id, flag }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      text: "Bạn có muốn xóa khỏi danh sách",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(id));
        Swal.fire({
          title: "Đã Xóa!",
          text: "Sản phẩm đã được xóa khỏi danh sách.",
          icon: "success",
        });
      }
    });
  };

  const handlePay = () => {
    const userEmail = userInfo?.username || "user@example.com"; // Get the username from userInfo
    const templateParams = {
      email: userEmail,
      message: `${userEmail} đã mua hàng! Tổng giá trị đơn hàng là: $${totalPrice.toFixed(2)}`,
    };

    emailjs.send('service_4sarhv9', 'template_ynu7qba', templateParams, 'P1jlrFA2eFxgkYfq_')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        Swal.fire({
          icon: "success",
          title: "Cảm ơn bạn đã mua",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(setCartNull([])); // Clear the cart
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        Swal.fire({
          icon: "error",
          title: "Có lỗi xảy ra",
          text: "Không thể gửi email xác nhận!",
        });
      });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="divborder">
      <div className="py-4">
        <h4 className="lander mb-4 font-weight-bold" data-aos="fade-down" data-aos-duration="1500">
          Cart
        </h4>

        <Row>
          <Col md="8">
            <Card className="p-3 shadow-sm bg-white rounded" data-aos="fade-right" data-aos-duration="1000">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <Row className="font-weight-bold mb-2">
                    <Col xs="3">Product</Col>
                    <Col xs="2">Price</Col>
                    <Col xs="3">Quantity</Col>
                    <Col xs="2">Subtotal</Col>
                    <Col xs="1"></Col>
                  </Row>
                  <hr />
                  {cart.map((item, index) => (
                    <div key={index}>
                      <Row className="align-items-center my-2">
                        <Col xs="3">
                          <div className="d-flex align-items-center">
                            <img
                              src={`http://localhost:8080/api/furniture/getimages/${item.productImages[0]?.imageUrl}`} // Get the first image
                              alt={item.name}
                              style={{
                                height: "80px",
                                objectFit: "contain",
                                marginRight: "10px",
                              }}
                            />
                            <p>{item.name}</p>
                          </div>
                        </Col>
                        <Col xs="2">
                          <p>${item.price}</p>
                        </Col>
                        <Col xs="3">
                          <div className="d-flex align-items-center">
                            <Button
                              outline
                              color="secondary"
                              onClick={() => updateById(item, 0)}
                              className="mr-2"
                              style={{ minWidth: "30px" }}
                              disabled={item.quantity <= 1} // Disable button if quantity is 1
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button
                              outline
                              color="primary"
                              onClick={() => updateById(item, 1)}
                              className="ml-2"
                              style={{ minWidth: "30px" }}
                            >
                              +
                            </Button>
                          </div>
                        </Col>
                        <Col xs="2">
                          <p>${(item.price * item.quantity).toFixed(2)}</p> {/* Format subtotal */}
                        </Col>
                        <Col xs="1">
                          <Button color="danger" onClick={() => handleDelete(item.id)}>
                            Delete
                          </Button>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  ))}
                </>
              )}
            </Card>
          </Col>
          <Col md="4">
            <Card className="p-3 shadow-sm bg-white rounded" data-aos="fade-left" data-aos-duration="1500">
              <CardBody>
                <CardTitle tag="h5" className="font-weight-bold mb-3">
                  Cart totals
                </CardTitle>
                <CardText>
                  <strong>Subtotal:</strong> ${totalPrice.toFixed(2)} {/* Format total price */}
                </CardText>
                <CardText className="text-muted font-weight-bold">
                  <strong>Total:</strong> ${totalPrice.toFixed(2)} {/* Format total price */}
                </CardText>
                <Button className="cart-button" onClick={handlePay}>
                  Mua
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
