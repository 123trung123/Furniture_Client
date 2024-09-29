import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container, Row, Col, Card, CardBody, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/shopSlice";
import Aos from "aos";
import { Pagination } from "@mui/material";
import "./products.css";

export default function Products() {
  const dispatch = useDispatch();
  const { products, totalPages } = useSelector((state) => state.shop);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const productsPerPage = 6; // 6 products per page

  // Fetch products with pagination
  useEffect(() => {
    dispatch(getList({ page: currentPage, size: productsPerPage }));
    Aos.init();
    window.scrollTo(0, 0);
  }, [dispatch, currentPage]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleAddToCart = (item) => {
    // Handle add to cart logic
  };

  // Normalize text function to handle diacritics and case-insensitive comparison
  const normalizeText = (text) => {
    if (typeof text !== "string") {
      return ""; // Return an empty string if text is not a string
    }
    return text
      .normalize("NFD") // Normalize to NFD (Normalization Form Decomposition)
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase(); // Convert to lowercase for case-insensitive matching
  };

  const handleFilter = ({ name, category }) => {
    const filtered = products.filter((product) => {
      const normalizedProductName = normalizeText(product.name);
      const normalizedProductCategory = normalizeText(product.category.name);

      const matchesName = name
        ? normalizedProductName.includes(normalizeText(name))
        : true;

      const matchesCategory = category
        ? normalizedProductCategory === normalizeText(category)
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

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedCategory(newCategory);
    handleFilter({ name, category: newCategory });
  };

  // Calculate the current products to display based on currentPage and productsPerPage
  const currentProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <Container className="products-container">
      <div className="new-collection-header">Shop</div>

      {/* Search bar */}
      <div className="filter-col">
        <Input
          className="filter-input"
          type="text"
          placeholder="Search for products..."
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* Category filter buttons */}
      <div className="filter-buttons">
        <div
          className={`filter-button ${
            selectedCategory === "" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("")}
        >
          All
        </div>
        <div
          className={`filter-button ${
            selectedCategory === "Bàn" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Bàn")}
        >
          Bàn
        </div>
        <div
          className={`filter-button ${
            selectedCategory === "Ghế" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Ghế")}
        >
          Ghế
        </div>
        <div
          className={`filter-button ${
            selectedCategory === "Giường" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Giường")}
        >
          Giường
        </div>
        <div
          className={`filter-button ${
            selectedCategory === "Sofa" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Sofa")}
        >
          Sofa
        </div>
        <div
          className={`filter-button ${
            selectedCategory === "Tủ" ? "active" : ""
          }`}
          onClick={() => handleCategoryChange("Tủ")}
        >
          Tủ
        </div>
      </div>

      <Row lg={10} md={10} sm={10} xs={12}>
        {currentProducts.map((item, index) => (
          <Product key={index} products={item} onAddToCart={handleAddToCart} />
        ))}
      </Row>

      <Row style={{ marginTop: "20px", justifyContent: "center" }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / productsPerPage)}
            page={currentPage + 1}
            onChange={(event, value) => setCurrentPage(value - 1)}
            shape="rounded"
            variant="outlined"
            color="primary"
          />
        </Col>
      </Row>
    </Container>
  );
}
