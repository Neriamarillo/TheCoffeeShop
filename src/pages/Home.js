import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsList } from "../actions/productActions";

function Home(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className="home">
          <h1>Products</h1>
          <button onClick={props.handleLogout}>Logout</button>
          <Container className="py-3">
            <Row xs={1} md={2} lg={3} className="g-4 ">
              {products.map((product) => (
                <Col>
                  <ProductCard key={product.id} product={product}></ProductCard>
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
