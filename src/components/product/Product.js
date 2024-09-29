import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Swal from "sweetalert2";
import "./product.css";

export default function Product({ products }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(products.rating || 0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleAdd = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success",
    });
    dispatch(addToCart(product));
  };

  // Check if product is active before rendering
  if (products.is_active === 0) {
    return null;
  }
  return (
    <Col lg={4} md={6} sm={12} className="mb-3">
      <Card className="product-card h-100 d-flex flex-column">
        {/* Product Image */}
        <div className="product-image-container">
          <Link to={`/products/detail/${products.id}`}>
            {products.productImages?.length > 0 ? (
              <img
                className="product-image"
                src={`http://localhost:8080/api/furniture/getimages/${products.productImages[0].imageUrl}`}
                alt={products.name}
              />
            ) : (
              <img
                className="product-image"
                src="/default-image.png"
                alt={products.name}
              />
            )}
          </Link>
        </div>
        {/* Product Details */}
        <CardBody className="product-details d-flex flex-column justify-content-between">
          {/* Product Name */}
          <CardTitle tag="h5" className="product-title">
            {products.name}
          </CardTitle>
          {/* Price and Category */}
          <div className="product-info">
            <CardText className="product-price">₫{products.price}</CardText>
            <CardText className="product-category">
              {products.category.name}
            </CardText>
          </div>
          {/* Product Rating */}
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleStarClick(value)}
                style={{ cursor: "pointer" }}
              >
                {value <= rating ? (
                  <StarIcon className="star-icon" />
                ) : (
                  <StarBorderIcon className="star-icon" />
                )}
              </span>
            ))}
          </div>
          {/* Action Buttons */}
          <div className="action-buttons">
            <Link
              to={`/products/detail/${products.id}`}
              className="btn btn-details"
            >
              Details
            </Link>
            <Button className="btn btn-add" onClick={() => handleAdd(products)}>
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
