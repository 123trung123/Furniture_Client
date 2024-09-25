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
  const dispatch = useDispatch();

  const pro = products.find((item) => item.id === Number(id));

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
            {pro.productImages.map((image) => (
              <img
                key={image.id}
                className="thumbnail"
                src={`http://localhost:8080/api/furniture/getimages/${image.imageUrl}`} // Update to use the API URL with image names
                alt={pro.name}
              />
            ))}
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
                {[...Array(Math.round(pro.rating || 0))].map((_, index) => (
                  <StarIcon key={index} style={{ color: "gold" }} />
                ))}
              </div>

              <p className="product-description">{pro.description || "No description available"}</p>
              <h5 className="product-price">
                ${pro.price}{" "}
                {pro.originalPrice && <span className="original-price">${pro.originalPrice}</span>}
              </h5>
              <p className="product-category">Category: {pro.category?.name || "Unknown"}</p>
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
              <p className="product-description">{pro.description || "No additional details"}</p>
              <p className="product-description">{pro.descriptionLong || "No additional details"}</p>
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
