import React from "react";
import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./product.css";
import Swal from 'sweetalert2';
import { Rating, Typography } from "@mui/material";

export default function Product({ products }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success"
    });
    dispatch(addToCart(product));
  };

  return (
    <Col
      lg={4}
      md={6}
      sm={6}
      xs={6}
      className="newfont mb-4"
      data-aos={products.id % 2 === 0 ? "flip-left" : "flip-right"}
      data-aos-duration="1500"
    >
      <Card className="product-card h-100 d-flex flex-column">
        <div className="product-image-container">
          <Link to={`/products/detail/${products.id}`}><img className="product-image" src={products.picture} alt={products.name} /></Link>
        </div>
        <CardBody>
          <CardTitle tag="h6" className="product-title">
            <Typography variant="h7">{products.name}</Typography>
            <Typography variant="h6">${products.price}</Typography>
          </CardTitle>
          <CardText>
            <Rating name="read-only" value={products.rating} readOnly precision={0.1} />
            <Typography variant="body2" className="product-description">
              {products.description}
            </Typography>
          </CardText>
          <div className="contain_button d-flex mt-2 justify-content-between">
            <Link to={`/products/detail/${products.id}`} className="btn-chi-tiet">Details</Link>
            <button className="btn-chi-tiet" onClick={() => handleAdd(products)}>Add</button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
