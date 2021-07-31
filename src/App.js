import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/products" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
