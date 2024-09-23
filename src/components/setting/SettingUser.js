// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Row,
//   Card,
//   CardBody,
// } from "reactstrap";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserById, updateUserProfile, uploadProfilePicture } from "../../redux/userSlice";

// const SettingUser = () => {
//   const dispatch = useDispatch();
//   const { user, loading, error } = useSelector((state) => state.user);

//   const [userId, setUserId] = useState(""); // State to hold user ID input
//   const [formData, setFormData] = useState({
//     fullname: "",
//     phone_number: "",
//     address: "",
//     date_of_birth: "",
//     profilePicture: null,
//   });

//   useEffect(() => {
//     Aos.init();
//     if (userId) {
//       dispatch(getUserById(userId)); // Fetch user data when userId is available
//     }
//   }, [dispatch, userId]); // Fetch when userId changes

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         fullname: user.fullname || "",
//         phone_number: user.phone_number || "",
//         address: user.address || "",
//         date_of_birth: user.date_of_birth || "",
//         profilePicture: user.profilePicture || null,
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({ ...prevData, profilePicture: e.target.files[0] }));
//   };

//   const handleUserIdChange = (e) => {
//     setUserId(e.target.value); // Update userId state
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedUser = {
//       fullname: formData.fullname,
//       phone_number: formData.phone_number,
//       address: formData.address,
//       date_of_birth: formData.date_of_birth,
//     };

//     dispatch(updateUserProfile({ id: user.id, userData: updatedUser }));

//     if (formData.profilePicture) {
//       const imageData = new FormData();
//       imageData.append("profilePicture", formData.profilePicture);
//       dispatch(uploadProfilePicture({ id: user.id, formData: imageData }));
//     }
//   };

//   return (
//     <div className="bg-settings-page">
//       <Container>
//         <Row>
//           <Col xs="12" md="6" className="mx-auto">
//             <Card className="settings-card" data-aos="fade-up">
//               <CardBody>
//                 <h2 className="text-center">User Settings</h2>
//                 {error && <p className="text-danger">{error}</p>}
//                 <Form onSubmit={handleSubmit}>
//                   <FormGroup>
//                     <Label for="userId">User ID</Label>
//                     <Input
//                       type="text"
//                       name="userId"
//                       value={userId}
//                       onChange={handleUserIdChange}
//                       placeholder="Enter your user ID"
//                       required
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="fullname">Full Name</Label>
//                     <Input
//                       type="text"
//                       name="fullname"
//                       value={formData.fullname}
//                       onChange={handleInputChange}
//                       placeholder="Enter your full name"
//                       required
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="phone_number">Phone Number</Label>
//                     <Input
//                       type="text"
//                       name="phone_number"
//                       value={formData.phone_number}
//                       onChange={handleInputChange}
//                       placeholder="Enter your phone number"
//                       required
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="address">Address</Label>
//                     <Input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       placeholder="Enter your address"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="date_of_birth">Date of Birth</Label>
//                     <Input
//                       type="date"
//                       name="date_of_birth"
//                       value={formData.date_of_birth}
//                       onChange={handleInputChange}
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label for="profilePicture">Profile Picture</Label>
//                     <Input
//                       type="file"
//                       name="profilePicture"
//                       accept="image/*"
//                       onChange={handleFileChange}
//                     />
//                     {formData.profilePicture && (
//                       <img
//                         src={
//                           typeof formData.profilePicture === "string"
//                             ? formData.profilePicture
//                             : URL.createObjectURL(formData.profilePicture)
//                         }
//                         alt="Profile Preview"
//                         className="img-thumbnail mt-2"
//                         width="150"
//                       />
//                     )}
//                   </FormGroup>
//                   <Button type="submit" color="primary" className="mt-3" disabled={loading}>
//                     {loading ? "Saving..." : "Save Changes"}
//                   </Button>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default SettingUser;
