import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import img1 from "../assets/iconfe.png";
import img2 from "../assets/iconma.png";

export default function Review() {
  return (
    <div className="review">
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Container>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 6, fontWeight: 'bold' }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Đánh Giá
          </Typography>
          <Grid container spacing={6}>
            {[
              { name: "Alice Johnson", text: "Absolutely love the products! Great quality and fast shipping.", rating: "★★★★★", image: img1 },
              { name: "Bob Smith", text: "Excellent customer service and a wide range of options. Highly recommend!", rating: "★★★★☆", image: img2 },
              { name: "Charlie Brown", text: "The best shopping experience I've had. Will definitely be back!", rating: "★★★★☆", image: img2 }
            ].map((review, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                data-aos="fade-up"
                data-aos-duration={`${1200 + index * 200}`}
                data-aos-delay={`${100 + index * 200}`}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    textAlign: "center",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={review.image}
                    alt={review.name}
                    sx={{ width: 100, height: 100, borderRadius: "50%", mt: 3 }}
                  />
                  <CardContent sx={{ flexGrow: 1, px: 4 }}>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>{review.name}</Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
                      {review.text}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" sx={{ color: "#f5a623", fontWeight: '500' }}>
                        {review.rating}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
