import {
  Form,
  Button,
  InputGroup,
  Card,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import { MdAccountCircle, MdVpnKey } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";

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
                  className="img-fluid bg-white"
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={8} lg={7} className="d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <FiCoffee className="h1 pt-2" />
                      <span className="h1 fw-bold mb-0 ps-2">
                        The Coffee Shop
                      </span>
                    </div>

                    <h5 className="fw-normal h4 mb-3 pb-2">Sign in</h5>

                    <Form.Group className="form-outline mb-4">
                      <InputGroup>
                        <Form.Control
                          type="email"
                          id="form2Example17"
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
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                        <InputGroup.Text>
                          <MdVpnKey />
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <div className="pt-1 mb-4">
                      <Button size="lg" className="w-100 shadow" variant="dark">
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

/* <Card
            style={{ size: "30rem" }}
            className="w-50 form-signin mt-5 shadow rounded-3"
          >
            <Form className="form-signin ">
              <h1 className="mb-3 h3">Sign In</h1>
              <Form.Group>
                <InputGroup className="formPrepend">
                  <InputGroup.Text>
                    <MdAccountCircle />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    required=""
                    id="inputUsername"
                  ></Form.Control>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3 pb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <MdVpnKey />
                  </InputGroup.Text>
                  <Form.Control
                    id="inputPassword"
                    type="password"
                    placeholder="Password"
                    required=""
                  ></Form.Control>
                </InputGroup>
              </Form.Group>

              <Button size="lg" className="w-100 shadow" variant="info">
                Log In
              </Button>
            </Form>
          </Card> */
