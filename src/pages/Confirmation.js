import { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";
import Loading from "../components/Loading";
import Message from "../components/Message";

function Confirmation(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loading />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <div>
      <h1>Order Confirmed!</h1>
      <p>Order# {orderId}</p>
    </div>
  );
}

export default Confirmation;
