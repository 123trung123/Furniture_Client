import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f1f2f7" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 2 }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Chúng tôi muốn nghe ý kiến của bạn
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4 }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Có câu hỏi gì, hãy liên hệ chúng tôi. Chúng tôi sẽ trả lời nhanh nhất có thể
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#dd3431",
              color: "#ffffff",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#B02927",
              },
            }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Liên Hệ
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
