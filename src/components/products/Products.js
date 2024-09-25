import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    handleFilter({ name, category: e.target.value });
  };

  return (
    <Container style={{marginTop: "15px" }}>
      <Row>
        <Col style={{ margin: "0 auto", padding: 0 }}>
          <Row className="filter-col">
            <Col>
              <Card className="filter-container">
                <CardBody>
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
                    <option value="Bàn">Bàn</option>
                    <option value="Ghế">Ghế</option>
                    <option value="Giường">Giường</option>
                    <option value="Sofa">Sofa</option>
                    <option value="Tủ">Tủ</option>
                  </select>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row lg={10} md={10} sm={10} xs={12}>
            {filteredProducts.map((item, index) => (
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
