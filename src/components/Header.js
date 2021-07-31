import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  // Badge,
} from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
// import { useHistory } from "react-router-dom";

function Header(props) {
  // const history = useHistory();

  return (
    <Navbar expand="lg" bg="primary" variant="primary">
      <Navbar.Brand>
        <FiCoffee /> The Coffee Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="ms-auto" id="search">
          <InputGroup className="navSearch">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-3 bg-primary"
            />
            <Button variant="dark" className="bg-primary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
        <Nav className="ms-2 p-2">
          <Nav.Item className="me-0 " id="profile">
            <Button
              size="sm"
              // onClick={() => {
              //   history.push("/account");
              // }}
              variant="dark"
              className="bg-primary"
            >
              <MdAccountCircle className="navIcons" />
            </Button>
          </Nav.Item>
          <Nav.Item className="me-0 ms-2" id="cart">
            <Button
              size="sm"
              // onClick={() => {
              //   history.push("/cart");
              // }}
              variant="dark"
              className="bg-primary"
            >
              <FaShoppingCart className="navIcons" />
              {/* {props.cartItems.length > 0 && (
                <Badge className="position-static top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.cartItems.length}
                </Badge>
              )} */}
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
