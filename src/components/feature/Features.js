import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import './feature.css';
import img1 from '../assets/home1-banner-3.png';
import img2 from '../assets/home1-banner-4.jpg';
import FeatureCard from './FeatureCard';

const dataTinhNang = [
  {
    title: 'Tính năng 1',
    description: 'Mô tả về tính năng 1 và lợi ích mà nó mang lại cho người dùng.',
    img: img1,
  },  
  {
    title: 'Tính năng 2',
    description: 'Mô tả về tính năng 2 và lợi ích mà nó mang lại cho người dùng.',
    img: img2,
  },
];

export default function TinhNang() {
  return (
    <div style={{ padding: '2rem 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Row>
          {dataTinhNang.map((tinhNang, index) => (
            <Col xs={12} md={6} key={index} className="mb-4">
              <FeatureCard
                title={tinhNang.title}
                description={tinhNang.description}
                img={tinhNang.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
