import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";
import { FaCoffee, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <FaCoffee /> Coffee Shop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="ms-auto" id="search">
          <InputGroup className="navSearch">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-3 bg-secondary"
            />
            <Button variant="secondary" className="bg-secondary">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
        <Nav className="ms-2 p-2">
          <Nav.Item className="me-0 " id="profile">
            <Button
              size="sm"
              onClick={() => {
                history.push("/account");
              }}
              variant="secondary"
              className="bg-secondary"
            >
              <MdAccountCircle className="navIcons" />
            </Button>
          </Nav.Item>
          <Nav.Item className="me-0 ms-2" id="cart">
            <Button
              size="sm"
              onClick={() => {
                history.push("/cart");
              }}
              variant="secondary"
              className="bg-secondary"
            >
              <FaShoppingCart className="navIcons" />
              {/* Badge  */}
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
