import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions.js";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Rating from "../components/Rating";
import currencyFormat from "../helpers/utils";
import { Card, InputGroup, Button, Row, Col } from "react-bootstrap";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function Product(props) {
  // const dispatch = useDispatch();
  // const productId = props.match.params.id;
  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;

  // const [qty, setQty] = useState(1);

  // useEffect(() => {
  //   dispatch(detailsProduct(productId));
  // }, [dispatch, productId]);

  // const handleDecrement = () => {
  //   setQty((prevQty) => (qty > 0 ? prevQty - 1 : qty));
  // };

  // const handleIncrement = () => {
  //   setQty((prevQty) => (prevQty < product.stock ? prevQty + 1 : prevQty));
  // };

  // const addToCartHandler = () => {
  //   props.history.push(`/cart/${product.id}?qty=${qty}`);
  // };

  return (
    <div>
      {/* {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : ( */}
      <Card className="px-auto h-100">
        <Row className="g-0">
          <Col xs={12} md={6}>
            <Card.Img src={product.image} className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.brand}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className="">
                {
                  <Rating
                    key={product.id}
                    rating={product.rating ? product.rating : 0}
                  />
                }
              </Card.Text>
              <Card.Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {currencyFormat(product.price)}
              </Card.Text>
              {product.stock > 0 ? (
                <Card.Text className="success">
                  {product.stock} In Stock
                </Card.Text>
              ) : (
                <Card.Text className="failure">Sold Out</Card.Text>
              )}
              <>
                <Row>
                  <Col xs={12} lg={6}>
                    <InputGroup className="input-group-sm pb-3">
                      <Button
                        // onClick={handleDecrement}
                        className="counterBtn"
                        style={{ backgroundColor: "firebrick" }}
                        disabled={product.stock === 0}
                      >
                        <MdRemoveCircle style={{ color: "white" }} />
                      </Button>
                      <InputGroup.Text>Qty: {qty}</InputGroup.Text>
                      <Button
                        onClick={handleIncrement}
                        disabled={product.stock === 0}
                      >
                        <MdAddCircle style={{ color: "white" }} />
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col className="text-center" lg={{ span: 4, offset: 2 }}>
                    <Button
                      variant="primary"
                      className="btn-small ms-auto"
                      onClick={addToCartHandler}
                      disabled={product.stock === 0}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/* )} */}
    </div>
  );
}

export default Product;
