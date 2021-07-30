import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Container>
          <h1>App</h1>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
