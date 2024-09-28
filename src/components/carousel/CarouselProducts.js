import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getList } from "../../redux/shopSlice";
import { addToCart } from "../../redux/cartSlice"; // Import the addToCart action
import Swal from "sweetalert2"; // Import SweetAlert for notifications
import Aos from "aos";
import "aos/dist/aos.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import icon
import "./carousel.css";

export default function CarouselProducts({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
    Aos.init();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    Swal.fire({
      text: "Item has been added!",
      icon: "success",
    });
    dispatch(addToCart(product));
  };

  return (
    <Row>
      {products.slice(0, 12).map((item) => (
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4" key={item.id} data-aos="zoom-in">
          <Card className="contain h-100 d-flex flex-column">
            <Link to={`/detail/${item.id}`} className="image-link">
              <img
                className="image_carousel"
                src={`http://localhost:8080/api/furniture/getimages/${item.productImages[0].imageUrl}`} 
                alt={item.name} 
                loading="lazy"
              />
            </Link>
            <CardBody className="flex-grow-1 d-flex flex-column justify-content-between">
              <CardTitle tag="h6" className="card-title">{item.name}</CardTitle>
              <div className="product-info">
                <p className="price">₫{item.price.toFixed(2)}</p>
                <div className="add-to-cart-icon" onClick={() => handleAddToCart(item)}>
                  <ShoppingCartIcon />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
