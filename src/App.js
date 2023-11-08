import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarBoot from './NavbarBoot';
import './App.css'
import Home from './Home';
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Contact from "./contact/Contact";

function App() {
  return (

    <Router>

    <NavbarBoot />

    <Container fluid>
      <Row>
        <Col style={{marginBottom:"-3rem"}}>
          <Routes>

          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </Router>

  );
}

export default App;
