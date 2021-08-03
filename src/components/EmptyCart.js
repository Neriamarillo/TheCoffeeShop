import { Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Row className="justify-content-center align-items-center h-100 mx-4">
      <Col md={12}>
        <Card className="text-center">
          <Card.Header className="">
            <h5>Cart</h5>
          </Card.Header>
          <Card.Body className="">
            <Col sm={12} className="">
              <FaShoppingCart className="img-fluid mb-4 mr-3 cardImgEcart" />
              <Card.Text>
                <h3>
                  <strong>Your Cart is Empty</strong>
                </h3>
              </Card.Text>
              <Link to="/products">
                <Button class="m-3 shadow">Continue Shopping</Button>
              </Link>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EmptyCart;
