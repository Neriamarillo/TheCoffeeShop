import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import data from "../data";

function Home(props) {
  return (
    <div className="home">
      <h1>Products</h1>
      {/* <button onClick={props.handleLogout}>Logout</button> */}
      <Container className="py-3">
        <Row xs={1} md={2} lg={3} className="g-4 ">
          {data.products.map((product) => (
            <Col>
              <ProductCard key={product.id} product={product}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
