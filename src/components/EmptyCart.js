import { Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    // <div className="mt-100">
    <Row className="mx-auto">
      <Col md={12}>
        <Card className="mb-3 ">
          <Card.Header className="p-3">
            <h5>Cart</h5>
          </Card.Header>
          <Card.Body>
            <Col sm={12} className="text-center">
              {" "}
              <FaShoppingCart className="img-fluid mb-4 mr-3 cardImgEcart" />
              <Card.Text>
                <h3>
                  <strong>Your Cart is Empty</strong>
                </h3>
              </Card.Text>
              <Link to="/products">
                <Button class="m-3">Continue Shopping</Button>
              </Link>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // </div>
  );
};

export default EmptyCart;
