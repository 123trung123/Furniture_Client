import React from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';
import './brand.css';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../resources/pngwing1.png';
import img2 from '../../resources/pngwing2.png';
import img3 from '../../resources/pngwing3.png';
import img4 from '../../resources/pngwing4.png';
import img5 from '../../resources/pngwing5.png';

const slideImages = [img1, img2, img3, img4, img5];

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 1,
  cssEase: 'linear',
};

export default function Relatedbrand() {
  return (
    <Container fluid style={{ overflow: 'hidden' }}>
      <CardBody className="text-center" style={{ padding: '2rem 0' }}>
        <h2 className="Title" style={{ fontSize: '30px' }}>
          Brands <span className="innerTitle"></span>
        </h2>
      </CardBody>
      <Row>
        <Col xs={12}>
          <Slider {...sliderSettings}>
            {slideImages.map((img, index) => (
              <div key={index} className="image-container1">
              <img
                className="logo_brand"
                
                src={img}
                alt={`brand-${index}`}
              />
            </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}
