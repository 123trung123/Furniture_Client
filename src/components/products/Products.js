import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../redux/shopSlice";
// import { addToCart } from "../../redux/cartSlice";
import Aos from "aos";
import "./products.css";
import img1 from "../../resources/banner5.png";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shop);
  const [filteredProducts, setFilteredProducts] = useState(products);

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

  return (
    <Container style={{ overflow: "hidden" }}>
      <Row>
        <p className="Title" data-aos="zoom-out-down">
          Products<span className="innerTitle"></span>
        </p>
        <Card className="product-card" data-aos="fade-left" data-aos-duration="1500">
          <CardImg top src={img1} alt="Banner" className="product-card-img" />
        </Card>
        <div style={{ height: '40px' }}></div>
        <Row style={{ margin: "0 auto", padding: 0 }}>
          <Col lg={10} md={10} sm={10} xs={12}>
            <Row>
              {filteredProducts.map((item, index) => (
                <Product
                  key={index}
                  products={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </Row>
          </Col>

          <Col lg={2} md={2} sm={2} className="filter-col">
            <p className="Title4" data-aos="zoom-out-down">
              Product categories<span className="innerTitle4"></span>
            </p>
            <Card className="filter-container" style={{ margin: "1rem 0", padding: "1rem" }}>
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
      </Row>
    </Container>
  );
}
