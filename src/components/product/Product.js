import React, { useState } from "react";
import { Card, CardBody, CardText, CardTitle, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./product.css";
import Swal from "sweetalert2";

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

  return (
    <Col
      lg={4}
      md={6}
      sm={6}
      xs={12}
      className="newfont mb-4"
      data-aos={products.id % 2 === 0 ? "flip-left" : "flip-right"}
      data-aos-duration="1500"
    >
      <Card className="product-card h-100 d-flex flex-column" >
        <div className="product-image-container">
          <Link to={`/products/detail/${products.id}`}>
            <img
              className="product-image"
              src={products.picture}
              alt={products.name}
            />
          </Link>
        </div>
        <CardBody>
          <CardTitle tag="h6" className="product-title">
            <h6>{products.name}</h6>
            <h6>${products.price}</h6>
          </CardTitle>
          <CardText>
            <div className="rating">
              {/* Display stars */}
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  onClick={() => handleStarClick(value)}
                  style={{ cursor: "pointer" }}
                >
                  {value <= rating ? (
                    <StarIcon style={{ color: "gold" }} />
                  ) : (
                    <StarBorderIcon />
                  )}
                </span>
              ))}
            </div>
            <p className="product-description">{products.description}</p>
          </CardText>
          <div className="contain_button d-flex mt-2 justify-content-between">
            <Link
              to={`/products/detail/${products.id}`}
              className="btn-chi-tiet"
            >
              Details
            </Link>
            <Button  className="button-custom"  variant="contained" color="primary" onClick={() => handleAdd(products)}>
              Add
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
