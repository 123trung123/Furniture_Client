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
    <Col lg={4} md={4} sm={6} xs={12} className="mb-3">
      <Card className="product-card h-100 d-flex flex-column p-2" style={{ border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <div className="product-image-container" style={{ marginBottom: '10px' }}>
          <Link to={`/products/detail/${products.id}`}>
            {products.productImages?.length > 0 ? (
              <img
                className="product-image"
                src={`http://localhost:8080/api/furniture/getimages/${products.productImages[0].imageUrl}`} // Use the image name from your productImages
                alt={products.name}
                style={{ objectFit: 'contain' }}
              />
            ) : (
              <img
                className="product-image"
                src="/default-image.png" // Fallback image if no product images exist
                alt={products.name}
                style={{ objectFit: 'contain', height: '150px' }}
              />
            )}
          </Link>
        </div>
        <CardBody style={{ padding: '10px' }}>
          <CardTitle tag="h5" className="product-title" style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {products.name}
          </CardTitle>
          <CardText style={{ margin: '5px 0' }}>
            <span style={{ color: '#333', fontWeight: 'bold' }}>${products.price}</span>
            <br />
            <span style={{ color: '#888', fontSize: '12px' }}>{products.category.name}</span>
            <div className="rating mt-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  onClick={() => handleStarClick(value)}
                  style={{ cursor: "pointer" }}
                >
                  {value <= rating ? (
                    <StarIcon style={{ color: "gold", fontSize: '16px' }} />
                  ) : (
                    <StarBorderIcon style={{ fontSize: '16px' }} />
                  )}
                </span>
              ))}
            </div>
            <p className="product-description" style={{ fontSize: '16px', color: '#666', margin: '10px 0' }}>
              {products.description}
            </p>
          </CardText>
          <div className="contain_button d-flex justify-content-between align-items-center">
            <Link to={`/products/detail/${products.id}`} className="btn-chi-tiet" style={{ fontSize: '12px', padding: '5px 10px' }}>
              Details
            </Link>
            <Button
              className="button-custom"
              color="primary"
              onClick={() => handleAdd(products)}
              style={{ fontSize: '16px', padding: '5px 10px' }}
            >
              Add
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
