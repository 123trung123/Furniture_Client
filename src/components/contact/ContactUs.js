import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Link,
} from '@mui/material';
import { NavLink } from "react-router-dom";
import './contact.css';

const ContactUs = () => {
  return (
    <section className="contact-sales-embedded-chat">
  <Container>
    <Box className="contact-header" sx={{ padding: { xs: '20px 10px', md: '40px' } }}>
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>Hãy liên hệ chúng tôi</Typography>
      <Typography variant="body1" mt={2} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
       Chúng tôi rất sẵn lòng cung cấp các sản phẩm nội thất trang trọng và hiện đại nhất đến quý khách. 
      </Typography>
    </Box>

    <Box className="hsg-numbers__wrapper">
      <Grid container spacing={2}>
        {['Gọi trực tiếp', 'Chat với chúng tôi', 'Xem sản phẩm'].map((text, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box className="contact-card" display="flex" alignItems="center" flexDirection="column" sx={{ padding: { xs: '10px', md: '20px' } }}>
              <img
                src={`https://53.fs1.hubspotusercontent-na1.net/hubfs/53/${['Calling', 'Messages', 'Date'][index]}@2x.png`}
                alt={text}
                style={{ width: '50px', marginBottom: '10px' }}
              />
              <Typography variant="h6" align="center" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>{text}</Typography>
              <Typography align="center">
                {index === 0 ? (
                  <NavLink href="tel:+6569556000">+65 6 955 6000</NavLink>
                ) : index === 1 ? (
                  <NavLink to="/contact" style={{ textDecoration: 'none' }}>Chatting now</NavLink>
                ) : (
                  <NavLink to="/products" style={{ textDecoration: 'none' }}>Click for more</NavLink>
                )}
              </Typography>
              {index === 0 && (
                <Button variant="outlined" onClick={() => alert('Show more local numbers')} style={{ marginTop: '10px', border: 'none ' }}>
                  See more local numbers
                </Button>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
</section>

  );
};

export default ContactUs;
