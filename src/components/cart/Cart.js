import React, { useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  CardContent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCartItem ,setCartNull} from "../../redux/cartSlice";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import "./cart.css";
import { Card } from "reactstrap";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateById = (item, flag) => {
    dispatch(updateCartItem({ id: item.id, flag }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      text: "Bạn có muốn xóa khỏi danh sách",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFromCart(id));
        Swal.fire({
          title: "Đã Xóa!",
          text: "Sản phẩm đã được xóa khỏi danh sách.",
          icon: "success",
        });
      }
    });
  };

  const handlePay = () => {
    Swal.fire({
      icon: "success",
      title: "Cảm ơn bạn đã mua",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(setCartNull([]))
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="fluid" className="divborder">
      <Box sx={{ py: 8 }}>
        <Typography
          className="lander"
          variant="h4"
          sx={{ textAlign: "left", mb: 4, fontWeight: 700 }}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Cart
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#ffffff",
                borderRadius: 1,
                boxShadow: 3,
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {cart.length === 0 ? (
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Your cart is empty
                </Typography>
              ) : (
                <>
                  <Grid container spacing={2} sx={{ fontWeight: 700, mb: 2 }}>
                    <Grid item xs={3}>
                      Product
                    </Grid>
                    <Grid item xs={2}>
                      Price
                    </Grid>
                    <Grid item xs={3}>
                      Quantity
                    </Grid>
                    <Grid item xs={2}>
                      Subtotal
                    </Grid>
                    <Grid item xs={1}></Grid>
                  </Grid>
                  <Divider />
                  {cart.map((item, index) => (
                    <>
                      <Grid
                        container
                        alignItems="center"
                        sx={{ my: 2 }}
                        key={index}
                      >
                        <Grid item xs={3}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item.picture}
                              alt={item.name}
                              style={{
                                height: "80px",
                                objectFit: "contain",
                                marginRight: "10px",
                              }}
                            />
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 500 }}
                            >
                              {item.name}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">
                            ${item.price.toFixed(2)}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => updateById(item, 0)}
                              sx={{ minWidth: "30px" }}
                            >
                              -
                            </Button>
                            <Typography
                              variant="body1"
                              sx={{
                                mx: 2,
                                minWidth: "30px",
                                textAlign: "center",
                              }}
                            >
                              {item.quantity}
                            </Typography>
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={() => updateById(item, 1)}
                              sx={{ minWidth: "30px" }}
                            >
                              +
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Button
                            variant="text"
                            color="error"
                            onClick={() => handleDelete(item.id)}
                            sx={{ fontWeight: 700, fontSize: "1rem" }}
                          >
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                      <Divider />
                    </>
                  ))}
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                boxShadow: 3,
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
              }}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, textAlign: "left" }}
                >
                  Cart totals
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Subtotal: <span>${totalPrice.toFixed(2)}</span>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "red",
                    mb: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Total: <span>${totalPrice.toFixed(2)}</span>
                </Typography>
                <Button
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: "#000",
                    color: "white",
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  onClick={handlePay}
                >
                  Mua
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
