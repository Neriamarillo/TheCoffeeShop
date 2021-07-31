import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* <Container> */}
        <Login />
        {/* </Container> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
