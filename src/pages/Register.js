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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Message from "../components/Message";

const Register = (props) => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { error } = userRegister;

  const dispatch = useDispatch();

  const registerHandler = (event) => {
    event.preventDefault();
    dispatch(register(registerUsername, registerPassword));
  };

  const toLoginHandler = () => {
    props.history.push("/login");
  };

  return (
    <>
      {" "}
      {error ? (
        <Message type="login">{error}</Message>
      ) : (
        <Container fluid className=" w-75 h-100">
          <Row className=" justify-content-center align-items-center h-100">
            <Col xl={10} className="">
              <Card className="rounded shadow ">
                <Row className=" g-0">
                  <Col md={4} lg={5} className="d-none d-md-block">
                    <img
                      src="/images/beans-bg.jpg"
                      className="img-fluid bg-white rounded"
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
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
                        <div id="register">
                          <h5 className="fw-normal h4 mb-3 pb-2">Register</h5>
                          <Form.Group
                            id="username"
                            className="form-outline mb-4"
                          >
                            <InputGroup>
                              <Form.Control
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Username"
                                onChange={(e) =>
                                  setRegisterUsername(e.target.value)
                                }
                              />
                              <InputGroup.Text>
                                <MdAccountCircle />
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>

                          <Form.Group
                            id="password"
                            className="form-outline mb-4"
                          >
                            <InputGroup>
                              <Form.Control
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                onChange={(e) =>
                                  setRegisterPassword(e.target.value)
                                }
                              />
                              <InputGroup.Text>
                                <MdVpnKey />
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>

                          <div id="registerButton" className="pt-1 mb-4">
                            {/* <Link to="/products"> */}
                            <Button
                              size="lg"
                              className="w-100 shadow"
                              variant="dark"
                              onClick={registerHandler}
                            >
                              Register
                            </Button>
                            {/* </Link> */}
                          </div>
                          <div id="registerButton" className="pt-1 mb-4">
                            {/* <Link to="/products"> */}

                            <Button
                              size="lg"
                              className="w-100 shadow"
                              variant="dark"
                              onClick={toLoginHandler}
                            >
                              To Login
                            </Button>
                            {/* </Link> */}
                          </div>
                        </div>
                      </Form>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Register;
