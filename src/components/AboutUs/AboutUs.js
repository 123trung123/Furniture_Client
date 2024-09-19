import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import CountUp from 'react-countup';
import img1 from '../../resources/table.jpg';
import img2 from '../../resources/table.jpg';
import img3 from '../../resources/table.jpg';

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3];
  const counts = [1, 24, 10];
  const titles = ['Worldwide Stores', 'Products', 'Happy Clients'];

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 className="text-center" data-aos="fade-up" style={{ marginBottom: '1rem', color: 'black' }}>
          About Us
        </h2>
        <Row>
          {images.map((img, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card body className="text-center" data-aos="fade-up" data-aos-delay={300 + index * 300}>
                <CardImg top src={img} alt={`Feature ${index + 1}`} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                <CardBody>
                  <CardTitle tag="h3" style={{ color: 'black' }}>
                    <CountUp start={0} end={counts[index]} duration={4.5} />+
                  </CardTitle>
                  <CardText style={{ color: 'black' }}>
                    {titles[index]}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
