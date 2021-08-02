import { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import currencyFormat from "../helpers/utils";
import Rating from "../components/Rating";
import { Card, Button, InputGroup, Row, Col, Form } from "react-bootstrap";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function ProductCard(props) {
  const { product } = props;

  return (
    <Card className="rounded shadow productCard ">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="img-fluid" />
      </Link>
      <Card.Body>
        <Row>
          <Col className="productLink">
            <Link to={`/product/${product._id}`}>
              <Card.Title>{product.name}</Card.Title>
            </Link>
            <Row className="d-flex justify-content-between ">
              <Col xs={6}>
                <Card.Text className="h5">{product.brand}</Card.Text>
              </Col>
              <Col>
                <Card.Text
                  className="float-end"
                  style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  {currencyFormat(product.price)}
                </Card.Text>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between ">
              <Col xs={6}>
                <Card.Text className="" id="rating">
                  {
                    <Rating
                      key={product._id}
                      rating={product.rating ? product.rating : 0}
                    />
                  }
                </Card.Text>
              </Col>
              <Col>
                {product.stock > 0 ? (
                  <Card.Text className="success float-end">
                    {product.stock} In Stock
                  </Card.Text>
                ) : (
                  <Card.Text className="failure float-end">Sold Out</Card.Text>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default withRouter(ProductCard);
