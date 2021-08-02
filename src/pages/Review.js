import { useEffect } from "react";
import { Col, Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import currencyFormat from "../helpers/utils";

const Review = (props) => {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  cart.itemsPrice = cart.cartItems.reduce(
    (accum, curr) => accum + curr.price * curr.qty,
    0
  );
  // Change taxRate according to state (Current is Texas)
  const taxRate = 0.0625;
  cart.taxPrice = cart.itemsPrice * taxRate;
  cart.totalPrice = cart.itemsPrice + cart.taxPrice;

  const dispatch = useDispatch();
  const createOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        /* {cart.cartItems.map((item) => (
        <li key={item.product}>
          Name: {item.name} Qty: {item.qty}
        </li>
      ))} */
        <Col className="order-md-last" md={4} lg={4} id="checkout">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="mb-3">Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 pb-0">
                  <Card.Text>
                    {`Subtotal: (${cart.cartItems.reduce(
                      (accum, curr) => accum + curr.qty,
                      0
                    )} items)`}
                  </Card.Text>
                  <span>{currencyFormat(cart.itemsPrice)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 pb-0">
                  <Card.Text>Shipping</Card.Text>
                  <span>Free</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between text-center px-0 ">
                  <Card.Text>Sales Tax</Card.Text>
                  <span>{currencyFormat(cart.taxPrice)}</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between text-center border-0 px-0 mb-3">
                  <Card.Text>
                    <strong>Total</strong>
                  </Card.Text>
                  <span>
                    <strong>{currencyFormat(cart.totalPrice)}</strong>
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="primary"
                className="w-100"
                onClick={createOrderHandler}
              >
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}

      {/* <Button onClick={createOrderHandler}>Place Order</Button> */}
    </div>
  );
};

export default Review;
