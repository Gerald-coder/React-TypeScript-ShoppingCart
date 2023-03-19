import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>{" "}
        <ShoppingCart />
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
