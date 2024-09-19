import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Slider from 'react-slick';

import img1 from '../assets/nvidia.png';
import img2 from '../assets/corsair.png';
import img3 from '../assets/msi.png';
import img4 from '../assets/logitech.png';
import img5 from '../assets/amd.png';

const slideImages = [img1, img2, img3, img4, img5];

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 0,
  pauseOnHover: true,
  cssEase: 'linear'
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
              <div key={index}>
                <img className="logo_brand" src={img} alt={`brand-${index}`} style={{ width: '70%', margin: '0 auto' }} />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
}
