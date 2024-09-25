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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isRegister, setIsRegister] = useState(false);
  // const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For registration
  const [isRegister, setIsRegister] = useState(false); // To toggle between login and register
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(loginUser(formData));
  // };
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
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
                      Sign in
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Welcome back
                    </Typography>
                    {success && <p className="text-success">{success}</p>}
                    {error && <p className="text-danger">{error}</p>}
                  </Box>
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Email</InputLabel>
                      <OutlinedInput
                        type="email"
                        label="Email"
                        value={formData.email} // Ensure this references formData.email
                        onChange={
                          (e) =>
                            setFormData({ ...formData, email: e.target.value }) // Update to email
                        }
                        required
                      />
                    </FormControl>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        type="password"
                        label="Password"
                        value={formData.password} // Make sure this references formData.password
                        onChange={
                          (e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            }) // Update to password
                        }
                        required
                      />
                    </FormControl>

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
                    >
                      {loading
                        ? "Please wait..."
                        : isRegister
                        ? "Register"
                        : "Login"}
                    </Button>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "16px",
                        marginBottom: "16px",
                        marginLeft: "70px",
                        height: "56px", // Set a fixed height for a square shape
                        width: "56px", // Set a fixed width for a square shape
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          flex: 1,
                          borderColor: "#3C5A9A",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "56px", // Ensure button has a fixed height
                          width: "56px", // Ensure button has a fixed width
                        }}
                        startIcon={
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 64 64"
                            style={{
                              display: "block",
                              margin: "auto",
                              marginLeft: "12px",
                            }} // Add marginLeft here
                          >
                            <circle
                              fill="#3C5A9A"
                              cx="29.5"
                              cy="29.5"
                              r="29.5"
                            />
                            <path
                              d="M39.1,9.1H32.6c-3.9,0-8.2,1.6-8.2,6.4c0,2.1,0.3,4,0.4,6.1H19.9v7.1h4.6v20.5h8.5V29.2h4.6l0.5-7.1H32.9c0,0,0.1-3.1,0.1-4.0c0-2.2,2.3-2.4,2.4-2.4C36.4,16.1,39.1,9.1,39.1,9.1z"
                              fill="#FFFFFF"
                            />
                            {isRegister
                              ? "Sign up with Facebook"
                              : "Login with Facebook"}
                          </svg>
                        }
                      />

                      <Button
                        variant="outlined"
                        sx={{
                          flex: 1,
                          margin: "0 0 0 8px",
                          borderColor: "#4285F4",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        startIcon={
                          <svg
                            width="24px"
                            height="32px"
                            viewBox="0 0 64 64"
                            style={{ marginLeft: "12px" }} // Add marginLeft here
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(3.000000, 2.000000)"
                                fillRule="nonzero"
                              >
                                <path
                                  d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                                  fill="#4285F4"
                                ></path>
                                <path
                                  d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                                  fill="#34A853"
                                ></path>
                                <path
                                  d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                                  fill="#FBBC05"
                                ></path>
                                <path
                                  d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                                  fill="#EB4335"
                                ></path>
                              </g>
                            </g>
                            {isRegister
                              ? "Sign up with Google"
                              : "Login with Google"}
                          </svg>
                        }
                      />

                      <Button
                        variant="outlined"
                        sx={{
                          flex: 1,
                          marginLeft: "8px",
                          borderColor: "#FBBC05",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        startIcon={
                          <svg
                            width="24px"
                            height="32px"
                            viewBox="0 0 64 64"
                            style={{ marginLeft: "12px" }} // Add marginLeft here
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(7.000000, 0.564551)"
                                fill="#000000"
                                fillRule="nonzero"
                              >
                                <path d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307" />
                                <path d="M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144" />
                              </g>
                            </g>
                          </svg>
                        }
                      />
                    </Box>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                      {isRegister
                        ? "Already have an account? Login"
                        : "Don't have an account? Register"}
                      <a href="#/authentication/sign-up/cover">Sign up</a>
                    </Typography>
                  </form>
                </Box>
              </Card>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
