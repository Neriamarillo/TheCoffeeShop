import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsList } from "../actions/productActions";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Home(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
    setFilteredProducts(
      products.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="home py-2">
          <h1 className="">Products</h1>
          <Col xs={12} md={{ span: 4, offset: 8 }} className="">
            <Form className="ms-auto" id="search">
              <InputGroup className="navSearch">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-3 bg-primary"
                  onChange={searchHandler}
                />
                <Button variant="dark" className="bg-primary">
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Container className="py-3">
            <Row xs={1} md={2} lg={3} className="g-4 ">
              {(searchTerm ? filteredProducts : products).map((product) => (
                <Col>
                  <ProductCard
                    key={product._id}
                    product={product}
                  ></ProductCard>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
    </Container>
  );
}

export default Home;
