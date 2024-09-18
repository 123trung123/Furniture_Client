import { Container, Box, Grid } from '@mui/material';
import React from 'react'
import FeatureCard from './FeatureCard';
import "./feature.css"
import img1 from "../assets/home1-banner-3.png"
import img2 from "../assets/home1-banner-4.jpg"
export default function Features() {
    return (
      <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-duration="2000">
              <FeatureCard className="feature-card" title="Feature One" description="Description of feature one and how it benefits the user." img={img1} />
            </Grid>
            <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-duration="2000">
              <FeatureCard className="feature-card" title="Feature Two" description="Description of feature two and how it benefits the user." img={img2} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }