import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CardActions, Typography, Rating } from "@mui/material";
import { getList } from "../../redux/productsSlice";
import "./detail.css";
import { addToCart } from "../../redux/cartSlice";
import Aos from "aos";
import Swal from 'sweetalert2';

export default function Detail() {
  const { id } = useParams();
  const { shop } = useSelector((state) => state.shop);
  const pro = shop.find((item) => item.id === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
    Aos.init();
    window.scrollTo(0,0)
  }, [dispatch]);
  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success"
    });
    dispatch(addToCart(product));
  };
  if (!pro) {
    return (
      <Typography variant="h6" color="text.secondary">
        Product not found
      </Typography>
    );
  }

  return (
    <div className="detail-container">
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="thumbnail-container" data-aos="fade-right" data-aos-duration="1500">
            <img className="thumbnail" src={pro.picture} alt={pro.name} />
          </div>
        </Col>
        <Col md={4}>
          <div className="product-detail" data-aos="fade-left" data-aos-duration="1500">
            <Typography variant="h4" component="div" className="product-name">
              {pro.name}
            </Typography>
            <Rating name="read-only" value={pro.rating} readOnly />
            <Typography variant="body2" color="text.secondary" className="product-description">
              {pro.description}
            </Typography>
            <Typography variant="h5" component="div" className="product-price">
              ${pro.price} <span className="original-price">${pro.originalPrice}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" className="product-category">
              Category: {pro.category}
            </Typography>
            <CardActions>
              <Button onClick={() => handleAdd(pro)}>Add to Cart</Button>
            </CardActions>
          </div>
          <div className="product-detail" data-aos="fade-up" data-aos-duration="1500">
            <Typography variant="h5" className="product-description">
              Details:
            </Typography>
            <Typography variant="body2" color="text.secondary" className="product-description">
              {pro.descriptionLong}
            </Typography>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <Button className="m-3">Trang Chủ</Button>
          </Link>
          <Link to="/products">
            <Button className="m-3">Cửa Hàng</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
