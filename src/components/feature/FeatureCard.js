import { CardContent, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';

export default function FeatureCard({ title, description,img }) {

    return (
      <Card>
        <div className="feature-card-background" style={{ backgroundImage: `url(${img})` }}>
          <CardContent className='feature-card-content'>
            <Typography variant="h5" className="feature-card-title">{title}</Typography>
            <Typography variant="body1" className="feature-card-description">{description}</Typography>
            <button className="learn-more mt-5">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <Link className="button-text" to="/products/">Shop</Link>
            </button>
          </CardContent>
        </div>
      </Card>
    );
  }
