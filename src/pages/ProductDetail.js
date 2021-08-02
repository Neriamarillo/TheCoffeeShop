import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions.js";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Rating from "../components/Rating";
import currencyFormat from "../helpers/utils";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import { addToCart } from "../actions/cartActions.js";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const handleChangeQty = (event) => {
    setQty(event.target.value);
  };

  const addToCartHandler = () => {
    console.log(product);
    dispatch(addToCart(productId, Number(qty)));
    // Goal to remove this link to cart
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <Container fluid className="h-100 w-100 px-0">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Card className="h-100">
          <Row className="g-0">
            <Col xs={12} md={6} className="productDetailCard">
              <Card.Img src={product.image} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <Card.Body>
                <Card.Title id="name">{product.name}</Card.Title>
                <Card.Text id="brand" className="my-2">
                  {product.brand}
                </Card.Text>
                <Card.Text id="description" className="my-2">
                  {product.description}
                </Card.Text>
                <Card.Text className="my-2" id="rating">
                  <Rating
                    key={productId}
                    rating={product.rating ? product.rating : 0}
                  />{" "}
                  {product.rating}
                </Card.Text>
                <Card.Text
                  id="price"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  className="my-0"
                >
                  {currencyFormat(product.price)}
                </Card.Text>
                <div id="availability" className="mb-3">
                  {product.stock > 0 ? (
                    <Card.Text className="success">
                      {product.stock} In Stock
                    </Card.Text>
                  ) : (
                    <Card.Text className="failure">Sold Out</Card.Text>
                  )}
                </div>
                <>
                  <Row>
                    <Col xs={3} lg={3}>
                      <Form.Select
                        value={product.qty}
                        onChange={handleChangeQty}
                      >
                        {[...Array(product.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3">
                      <Button
                        variant="primary"
                        className="btn-small ms-auto shadow-sm"
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
      )}
    </Container>
  );
}

export default ProductDetail;
