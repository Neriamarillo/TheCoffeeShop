import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header(props) {
  const cartItemCount = props.cartItems
    ? props.cartItems.reduce((accum, curr) => accum + curr.qty, 0)
    : 0;

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Navbar.Brand className="ps-3">
        <Link to="/products">
          <FiCoffee /> The Coffee Shop
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="ms-auto p-2">
          <Nav.Item className="me-0 " id="profile">
            <Link to="/account">
              <Button
                onClick={props.handleLogout}
                size="sm"
                variant="dark"
                className="bg-primary"
              >
                {props.userInfo && "Logout"}
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
