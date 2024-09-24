import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/shopSlice";
import { addToCart } from "../../redux/cartSlice";
import StarIcon from "@mui/icons-material/Star";
import Aos from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import "./detail.css";

export default function Detail() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.shop);
  const pro = products.find((item) => item.id === id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
    Aos.init();
    window.scrollTo(0, 0);
  }, [dispatch]);

  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success",
    });
    dispatch(addToCart(product));
  };

  if (!pro) {
    return (
      <div className="text-center">
        <h5>Product not found</h5>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Row className="justify-content-center">
        <Col md={4}>
          <div
            className="thumbnail-container"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img className="thumbnail" src={pro.picture} alt={pro.name} />
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="product-detail"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <CardBody>
              <h4 className="product-name">{pro.name}</h4>
              <div className="rating">
                {[...Array(Math.round(pro.rating))].map((_, index) => (
                  <StarIcon key={index} style={{ color: "gold" }} />
                ))}
              </div>

              <p className="product-description">{pro.description}</p>
              <h5 className="product-price">
                ${pro.price}{" "}
                <span className="original-price">${pro.originalPrice}</span>
              </h5>
              <p className="product-category">Category: {pro.category}</p>
              <Button color="primary" onClick={() => handleAdd(pro)}>
                Add to Cart
              </Button>
            </CardBody>
          </Card>
          <Card
            className="product-detail"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <CardBody>
              <h5 className="product-description">Details:</h5>
              <p className="product-description">{pro.descriptionLong}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <Button color="secondary" className="m-3">
              Trang Chủ
            </Button>
          </Link>
          <Link to="/products">
            <Button color="secondary" className="m-3">
              Cửa Hàng
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
