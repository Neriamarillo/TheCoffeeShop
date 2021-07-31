import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <Router>
      <Header cartItems={cartItems} />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/products" component={Home} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
          <Route path="/cart/:id" component={Cart} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
