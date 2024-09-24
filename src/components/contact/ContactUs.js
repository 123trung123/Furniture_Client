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
    <Box className="contact-header" sx={{ padding: { xs: '20px 10px', md: '40px' } }}>
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>Contact Us About HubSpot's Software</Typography>
      <Typography variant="body1" mt={2} sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
        We'd love to show you how you can get more traffic and leads, increase your sales productivity, provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.
      </Typography>
    </Box>

    <Box className="hsg-numbers__wrapper">
      <Grid container spacing={2}>
        {['Call us directly', 'Chat with our sales team', 'Get a product demo'].map((text, index) => (
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
                  <Link href="tel:+6569556000">+65 6 955 6000</Link>
                ) : index === 1 ? (
                  <Link href="#chat-with-sales" style={{ textDecoration: 'none' }}>Chat with our sales team</Link>
                ) : (
                  <Link href="#book-a-meeting-with-sales" style={{ textDecoration: 'none' }}>Get a demo</Link>
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
