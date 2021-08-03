import dotenv from "dotenv";
import { useEffect } from "react";
import axios from "axios";
import { Col, Card, ListGroup, Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import currencyFormat from "../helpers/utils";
dotenv.config();

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
  const today = new Date(Date.now()).toLocaleDateString();

  const dispatch = useDispatch();
  const createOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  // Sending receipt to the Slack channel
  useEffect(() => {
    async function sendSlackOrderReceipt(order) {
      const items = order.orderItems.map((item) => {
        return `{
  type: "mrkdwn",
  text: "*${item.name}*",
 },
 {
  type: "plain_text",
  text: "${currencyFormat(item.price)}",
  emoji: true,
},
{
  type: "mrkdwn",
  text: "*Qty:* ${item.qty}",
},
{
  type: "plain_text",
  text: " ",
  emoji: true,
}`;
      });

      const subTotals = `{
        type: "mrkdwn",
        text: "*Subtotal:*",
      },
      {
        type: "plain_text",
        text: "${currencyFormat(order.itemsPrice)}",
        emoji: true,
      },
      {
        type: "mrkdwn",
        text: "*Shipping:*",
      },
      {
        type: "plain_text",
        text: "Free",
        emoji: true,
      },
      {
        type: "mrkdwn",
        text: "*Sales Tax:*",
      },
      {
        type: "plain_text",
        text: "${currencyFormat(order.taxPrice)}",
        emoji: true,
      }`;

      const total = `{
    type: "mrkdwn",
    text: "*Total:*",
  },
  {
    type: "plain_text",
    text: "${currencyFormat(order.totalPrice)}",
  }`;

      const data = `{
  blocks: [
    {
      "type": "header",
			"text": {
				"type": "plain_text",
				"text": "Your receipt from The Coffee Shop",
				"emoji": true
			},
    },
    {
      type: "divider",
    },
    {
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "*Order Summary*"
				},
				{
					"type": "plain_text",
					"text": "${today}",
					"emoji": true
				}
			]
		},
    {
      type: "divider",
    },
    {
      type: "section",
      fields: [
        ${items}
      ],
    },
    {
      type: "divider",
    },
    {
      type: "section",
      fields: [
        ${subTotals},
      ],
    },
    {
      type: "divider",
    },
    {
      type: "section",
      fields: [
        ${total},
      ],
    },
    {
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Thank you for your order! 🥳"
			}
		},
  ],
}`;

      const webhookUrl =
        "https://hooks.slack.com/services/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";

      let res = await axios.post(webhookUrl, data, {
        withCredentials: false,
        transformRequest: [
          (data, headers) => {
            delete headers.post["Content-Type"];
            return data;
          },
        ],
      });

      if (res.status === 200) {
        alert("Slack Receipt Sent!");
      } else {
        alert("There was an error. Please try again later.");
      }
    }

    if (order) {
      sendSlackOrderReceipt(order);
    }
  }, [dispatch, order, today]);

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
        <div>
          <Row className="g-5 mx-auto">
            <h1 className="py-3">Order Summary</h1>
            <Col md={8} lg={8} id="products" className="mt-5">
              {cart.cartItems.map((item) => {
                return (
                  <ListGroup
                    variant="flush"
                    className="border-top border-bottom"
                    key={item.product}
                  >
                    <ListGroup.Item>
                      <Row className="align-items-center ">
                        <Col xs={2} className="cartProduct">
                          <Card.Img
                            className="img-fluid"
                            alt={item.name}
                            src={item.image}
                          ></Card.Img>
                        </Col>
                        <Col>
                          <div id="itemInfo">
                            <Card.Title id="itemName">{item.name}</Card.Title>
                            <Card.Text id="itemPrice">
                              {currencyFormat(item.price)}
                            </Card.Text>
                          </div>
                        </Col>
                        <Col xs={{ span: 2, offset: 1 }} lg={2} className="">
                          {`Qty: ${item.qty}`}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
            </Col>
            <Col className="order-md-last" md={4} lg={4} id="checkout">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title className="mb-3">Review your order</Card.Title>
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
                    className="w-100 shadow"
                    onClick={createOrderHandler}
                  >
                    Place Order
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Review;
