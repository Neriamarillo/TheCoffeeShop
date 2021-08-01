import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions/userActions";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={Login} />
          <ProtectedRoute
            path="/products"
            isAuthorized={userInfo}
            handleLogout={handleLogout}
            component={Home}
          />
          <ProtectedRoute
            path="/product/:id"
            isAuthorized={userInfo}
            component={ProductDetail}
          />
          <ProtectedRoute
            path="/cart"
            isAuthorized={userInfo}
            component={Cart}
          />
          <ProtectedRoute
            path="/cart/:id"
            isAuthorized={userInfo}
            component={Cart}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
