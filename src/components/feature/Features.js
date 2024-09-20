import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './feature.css';
import img1 from '../assets/home1-banner-3.png';
import img2 from '../assets/home1-banner-4.jpg';
import FeatureCard from './FeatureCard';

const featureData = [
  {
    title: 'Feature One',
    description: 'Description of feature one and how it benefits the user.',
    img: img1,
  },  
  {
    title: 'Feature Two',
    description: 'Description of feature two and how it benefits the user.',
    img: img2,
  },
];
export default function Features() {
  return (
    <div style={{ padding: '2rem 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Row>
          {featureData.map((feature, index) => (
            <Col xs={12} md={6} key={index} className="mb-4">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                img={feature.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
