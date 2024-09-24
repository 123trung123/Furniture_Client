import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Link,
} from '@mui/material';
import './contact.css';

const ContactUs = () => {
  return (
    <section className="contact-sales-embedded-chat">
      <Container>
        <Box className="contact-header">
          <Typography variant="h4">Contact Us About HubSpot's Software</Typography>
          <Typography variant="body1" mt={2}>
            We'd love to show you how you can get more traffic and leads, increase your sales productivity, provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.
          </Typography>
        </Box>

        <Box className="hsg-numbers__wrapper">
          <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
              <Box className="contact-card" display="flex" alignItems="center" flexDirection="column">
                <img
                  src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Calling@2x.png"
                  alt="Calling"
                  style={{ width: '50px', marginBottom: '10px' }}
                />
                <Typography variant="h6" align="center">Call us directly</Typography>
                <Typography align="center">
                  <Link href="tel:+6569556000">+65 6 955 6000</Link>
                </Typography>
                <Button variant="outlined" onClick={() => alert('Show more local numbers')} style={{ marginTop: '10px' }}>
                  See more local numbers
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="contact-card" display="flex" alignItems="center" flexDirection="column">
                <img
                  src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Messages@2x.png"
                  alt="Messages"
                  style={{ width: '50px', marginBottom: '10px' }}
                />
                <Typography variant="h6" align="center">Chat with our sales team</Typography>
                <Link href="#chat-with-sales" style={{ textDecoration: 'none' }} align="center">Chat with our sales team</Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box className="contact-card" display="flex" alignItems="center" flexDirection="column">
                <img
                  src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Date@2x.png"
                  alt="Date"
                  style={{ width: '50px', marginBottom: '10px' }}
                />
                <Typography variant="h6" align="center">Get a product demo</Typography>
                <Link href="#book-a-meeting-with-sales" style={{ textDecoration: 'none' }} align="center">Get a demo</Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default ContactUs;
