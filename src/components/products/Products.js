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
  const { products, totalPages } = useSelector((state) => state.shop); // Make sure 'totalPages' is returned from your API.
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6; // 6 products per page (can be adjusted)

  // Fetch products with pagination
  useEffect(() => {
    dispatch(getList({ page: currentPage, size: productsPerPage }));
    Aos.init();
    window.scrollTo(0, 0);
  }, [dispatch, currentPage]);

  useEffect(() => {
    setFilteredProducts(products); // Update filtered products when products are fetched
  }, [products]);

  const handleAddToCart = (item) => {
    // Handle add to cart logic
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

  return (
    <Container style={{ overflow: "hidden", marginTop: "15px" }}>
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
