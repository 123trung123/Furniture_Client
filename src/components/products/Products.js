import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/shopSlice";
// import { addToCart } from "../../redux/cartSlice";
import Aos from "aos";
import "./products.css";
import img1 from "../../resources/banner5.png";
import { Pagination } from "@mui/material";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const videoSrc = require("../../resources/Videos/video1.mp4");
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6; // 2 rows of 4 products
  useEffect(() => {
    dispatch(getList());
    Aos.init();
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleAddToCart = (item) => {
    // dispatch(addToCart(item));
  };

  const handleFilter = ({ name, category }) => {
    const filtered = products.filter((product) => {
      const matchesName = name
        ? product.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesCategory = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;

      return matchesName && matchesCategory;
    });
    setFilteredProducts(filtered);
  };

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    handleFilter({ name: e.target.value, category });
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    handleFilter({ name, category: e.target.value });
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <Container style={{ overflow: "hidden", marginTop:"15px" }}>
      <Row>
      <div className="banner_container" style={{ position: "relative" }}>
      <Card className="" data-aos="fade-left" data-aos-duration="1500">
    <video className="product-card-video" autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="Title frontage-bold" data-aos="zoom-out-down" style={{
        position: "absolute",
        top: "-10px", // Move the text 50px above the video
        left: "0",
        width: "100%",
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff", // Text color
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Optional shadow for better visibility
        zIndex: 1 // Ensure text is above the video
      }}>
      Products<span className="innerTitle"></span>
    </p>
</Card>

</div>

        <div style={{ height: "40px" }}></div>
        <Col style={{ margin: "0 auto", padding: 0 }}>
          <Row className="filter-col " style={{ width: "100%", marginTop: "20px", justifyContent: "center"  }}>
            <Col >
              <p className="Title4 frontage-bold" data-aos="zoom-out-down">
                Product categories<span className="innerTitle4"></span>
              </p>
              <Card
                className="filter-container"
                style={{ margin: "1rem 0", padding: "1rem", display: "flex", justifyContent: "center" }}
              >
                <CardBody >
                  <input
                    type="text"
                    placeholder="Filter by name"
                    value={name}
                    onChange={handleNameChange}
                    className="filter-input p-1 py-3"
                  />
                  <div style={{ margin: "1rem 0" }}></div>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="filter-select p-1 py-3"
                  >
                    <option value="">All</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="Controller">Controller</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Headset">Headset</option>
                    <option value="Case">Case</option>
                    <option value="Power Supply">Power Supply</option>
                    <option value="Chair">Chair</option>
                    <option value="Card Fans">Card Fans</option>
                    <option value="Monitor">Monitor</option>
                    <option value="SSD">SSD</option>
                  </select>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row lg={10} md={10} sm={10} xs={12}>
            {currentProducts.map((item, index) => (
              <Product
                key={index}
                products={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </Row>

          <Row style={{ marginTop: "20px", justifyContent: "center" }}>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                count={totalPages}
                page={currentPage + 1} 
                onChange={(event, value) => setCurrentPage(value - 1)} 
                shape="rounded" 
                variant="outlined" 
                color="primary" 
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
