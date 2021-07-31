import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  ListGroup,
  Form,
} from "react-bootstrap";
import currencyFormat from "../helpers/utils";
import { FaTrashAlt } from "react-icons/fa";
import EmptyCart from "../components/EmptyCart";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  // Check if productId exists and then add it to cart
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // Send to confirmation page
    // props.history.push("/confirmation");
  };

  const subtotal = cartItems.reduce(
    (accum, curr) => accum + curr.price * curr.qty,
    0
  );
  // Change taxRate according to state (Current is Texas)
  const taxRate = 0.0625;
  const salesTax = subtotal * taxRate;
  const total = subtotal + salesTax;

  return (
    <>
      {cartItems.length === 0 ? (
        /* Empty Cart Component */
        <div>
          <EmptyCart />
        </div>
      ) : (
        /* Cart Component */
        <div>
          <h2>Cart</h2>
          {/* Generate the row with a loop for each item in the cart */}
          <Row className="g-5">
            <Col className="order-md-last" md={4} lg={4} id="checkout">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="mb-3">Summary</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 pb-0">
                      <Card.Text>
                        {`Subtotal: (${cartItems.reduce(
                          (accum, curr) => accum + curr.qty,
                          0
                        )} items)`}
                      </Card.Text>
                      <span>{currencyFormat(subtotal)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 pb-0">
                      <Card.Text>Shipping</Card.Text>
                      <span>Free</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between text-center px-0 ">
                      <Card.Text>Sales Tax</Card.Text>
                      <span>{currencyFormat(salesTax)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 mb-3">
                      <Card.Text>
                        <strong>Total</strong>
                      </Card.Text>
                      <span>
                        <strong>{currencyFormat(total)}</strong>
                      </span>
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={checkoutHandler}
                  >
                    Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8} lg={8} id="products">
              {cartItems.map((item) => {
                return (
                  <ListGroup
                    variant="flush"
                    className="border-top border-bottom"
                  >
                    <ListGroup.Item>
                      <Row className="align-items-center ">
                        <Col xs={2}>
                          <Card.Img
                            className="img-fluid"
                            alt={item.name}
                            src={item.image}
                          ></Card.Img>
                        </Col>
                        <Col>
                          <div id="itemInfo">
                            <Link
                              to={`/product/${item.id}`}
                              className="text-primary"
                            >
                              <Card.Title id="itemName">{item.name}</Card.Title>
                            </Link>
                            <Card.Text id="itemPrice">
                              {currencyFormat(item.price)}
                            </Card.Text>
                          </div>
                        </Col>
                        <Col xs={3} lg={2} className="">
                          <InputGroup className="input-group-sm">
                            <InputGroup.Text className="px-2">
                              Qty:
                            </InputGroup.Text>
                            {/* Set onChange to add to cart */}
                            <Form.Select
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(
                                  addToCart(
                                    item.product,
                                    Number(e.target.value)
                                  )
                                )
                              }
                            >
                              {[...Array(item.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Select>
                          </InputGroup>
                        </Col>
                        <Col xs={1}>
                          <Button
                            size="sm"
                            variant="danger"
                            className="deleteCart"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default Cart;
