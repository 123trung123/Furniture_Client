import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  Typography,
  Grid,
} from "@mui/material";
import "./Login.css";
import Aos from "aos";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For registration
  const [isRegister, setIsRegister] = useState(false); // To toggle between login and register
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div className="bg-login">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="left-box" data-aos="fade-right">
          <h1 className="title-welcome">Chào mừng đến với</h1>
          <div className="logo-web"></div>
        </Grid>
        <Grid item xs={12} sm={6} className="login-box" data-aos="fade-left">
          <div className="overlay"></div>
          <div className="content">
            <Box sx={{ padding: "16px", maxWidth: 400, margin: "auto" }}>
              <Card elevation={1}>
                <Box sx={{ padding: "16px" }}>
                  <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
                    <Typography variant="h4" component="h4" gutterBottom>
                      {isRegister ? "Register" : "Sign in"}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Welcome back
                    </Typography>
                    {success && <p className="text-success">{success}</p>}
                    {error && <p className="text-danger">{error}</p>}
                  </Box>
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Username</InputLabel>
                      <OutlinedInput
                        type="text"
                        label="Username"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        required
                      />
                    </FormControl>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                    </FormControl>

                    {isRegister && (
                      <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel>Confirm Password</InputLabel>
                        <OutlinedInput
                          type="password"
                          label="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </FormControl>
                    )}

                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      disabled={loading}
                      sx={{ mt: 2, mb: 2 }}
                    >
                      {loading
                        ? "Please wait..."
                        : isRegister
                        ? "Register"
                        : "Login"}
                    </Button>
                  </form>
                  <Button
                    color="secondary"
                    onClick={() => setIsRegister(!isRegister)}
                    fullWidth
                  >
                    {isRegister
                      ? "Already have an account? Login"
                      : "Don't have an account? Register"}
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        mr: 1,
                        borderColor: "#4285F4",
                        color: "#4285F4",
                      }}
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M22.3 12.2c0-.7-.1-1.5-.2-2.2H12v4.3h5.8c-.2 1-.8 1.9-1.6 2.6v2.2h2.6c1.5-1.3 2.5-3.3 2.5-5.7z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 24c3.3 0 6.1-1.1 8.2-3l-3.9-3c-1.1.7-2.6 1.1-4.2 1.1-3.3 0-6.1-2.2-7.1-5.3H.5v3.3C2.6 21.7 7 24 12 24z"
                            fill="#34A853"
                          />
                          <path
                            d="M4.9 14.8c-.3-.9-.5-1.8-.5-2.8s.2-1.9.5-2.8V5.8H1.3C.5 7.3 0 9.1 0 11s.5 3.7 1.3 5.2l3.6-2.4z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 4.8c1.8 0 3.4.6 4.7 1.8l3.5-3.5C18.1 1.2 15.3 0 12 0 7 0 2.6 2.3.5 5.8l3.6 2.4c1-3.1 3.8-5.3..."
                          />
                        </svg>
                      }
                    >
                      {isRegister ? "Sign up with Google" : "Login with Google"}
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        ml: 1,
                        borderColor: "#3b5998",
                        color: "#3b5998",
                      }}
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.96 3.66 9.07 8.44 9.88v-6.99H7.91v-2.89h2.54V9.97c0-2.52 1.5-3.92 3.79-3.92 1.1 0 2.25.19 2.25.19v2.5h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99c4.78-.81 8.44-4.92 8.44-9.88 0-5.52-4.5-10-10-10z"
                            fill="#3b5998"
                          />
                        </svg>
                      }
                    >
                      {isRegister ? "Sign up with Facebook" : "Login with Facebook"}
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
