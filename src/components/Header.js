import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header(props) {
  const cartItemCount = props.cartItems.reduce(
    (accum, curr) => accum + curr.qty,
    0
  );

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
            <Link to="/account">
              <Button size="sm" variant="dark" className="bg-primary">
                <MdAccountCircle className="navIcons" />
              </Button>
            </Link>
          </Nav.Item>
          <Nav.Item className="me-0 ms-2" id="cart">
            <Link to="/cart">
              <Button size="sm" variant="dark" className="bg-primary">
                <FaShoppingCart className="navIcons" />
                {cartItemCount > 0 && (
                  <Badge className="position-static top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
