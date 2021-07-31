import {
  Form,
  Button,
  InputGroup,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="py-5">
      <Row className=" justify-content-center align-items-center">
        <Col xl={10} className="">
          <Card className="rounded shadow ">
            <Row className=" g-0">
              <Col md={4} lg={5} className="d-none d-md-block">
                <img
                  src="/images/beans-bg.jpg"
                  className="img-fluid bg-white rounded"
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={8} lg={7} className="d-flex align-items-center">
                <Card.Body className="card-body p-4 p-lg-5 text-black">
                  <Form>
                    <Card.Title className="d-flex align-items-center mb-3 pb-1">
                      <FiCoffee className="h1 pt-2" />
                      <span className="h1 fw-bold mb-0 ps-2">
                        The Coffee Shop
                      </span>
                    </Card.Title>

                    <h5 className="fw-normal h4 mb-3 pb-2">Sign in</h5>

                    <Form.Group className="form-outline mb-4">
                      <InputGroup>
                        <Form.Control
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Username"
                        />
                        <InputGroup.Text>
                          <MdAccountCircle />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="form-outline mb-4">
                      <InputGroup>
                        <Form.Control
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                        <InputGroup.Text>
                          <MdVpnKey />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <div className="pt-1 mb-4">
                      <Link to="/products">
                        <Button
                          size="lg"
                          className="w-100 shadow"
                          variant="dark"
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
