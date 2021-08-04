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
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import Register from "./pages/Register";

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
      <Header
        cartItems={cartItems}
        handleLogout={handleLogout}
        userInfo={userInfo}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            {userInfo ? <Redirect to="/products" /> : <Login />}
          </Route>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
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
            path="/cart/:id?"
            isAuthorized={userInfo}
            component={Cart}
          />
          <ProtectedRoute
            path="/order/:id"
            isAuthorized={userInfo}
            component={Confirmation}
          />
          <ProtectedRoute
            path="/review"
            isAuthorized={userInfo}
            component={Review}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
