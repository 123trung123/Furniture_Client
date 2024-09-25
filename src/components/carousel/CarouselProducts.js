import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./carousel.css";
import { getList } from "../../redux/shopSlice";
import { useDispatch } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CarouselProducts({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
    Aos.init();
  }, [dispatch]);

  return (
    <Row>
      {products.slice(0, 12).map((item) => (
        <Col lg={3} md={3} sm={6} xs={6} className="mb-4" key={item.id} data-aos="zoom-in">
          <Card className="contain h-100 d-flex flex-column">
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.subtitle}
              </CardSubtitle>
              <CardText>
                <p>{item.category.name}</p>
              </CardText>
            </CardBody>
            <Link to={`/detail/${item.id}`}>
              <img
                className="image_carousel"
                src={`http://localhost:8080/api/furniture/getimages/${item.productImages[0].imageUrl}`} 
                alt={item.name} // Provide a descriptive alt text
              />
            </Link>
            <Link className="btn-chi-tiet2" to={`/detail/${item.id}`}>
              Chi tiết
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
