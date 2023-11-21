import React, { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarBoot from './NavbarBoot';
import Footer from './components/footer/Footer';
// import Loader from 'react-loader-spinner';
import { Dna } from  'react-loader-spinner'
import OurMenu from './ourmenu/OurMenu';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./contact/Contact'));

function LoadingIndicator() {
  return (
    <div style={loadingStyle}>
     <Dna
  visible={true}
  height="150"
  width="150"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
  
</div>
  );
}

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Router>
      <NavbarBoot />
      <Container fluid>
        <Row>
          <Col style={{ marginBottom: '-3rem' }}>
            <Routes>
              <Route path="/" element={<Suspense fallback={<LoadingIndicator />}><Home /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<LoadingIndicator />}><About /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<LoadingIndicator />}><Contact /></Suspense>} />
              <Route path="/ourmenu" element={<Suspense fallback={<LoadingIndicator />}><OurMenu /></Suspense>} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import NavbarBoot from './NavbarBoot';
// import './App.css'
// import Home from './Home';
// import About from "./pages/About";
// import Footer from "./components/footer/Footer";
// import Contact from "./contact/Contact";
// import { useEffect, useState } from "react";

// import {  CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// import { BsSlack } from "react-icons/bs";



// function App() {

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000); 
//   }, []);


//   if(isLoading){
// return   <ClipLoader
//   color={BsSlack}
//   loading={true}

//   size={150}
//   aria-label="Loading Spinner"
//   data-testid="loader"
// />

//   }
//   return (

//     <Router>

//     <NavbarBoot />

//     <Container fluid>



//       <Row>
//         <Col style={{marginBottom:"-3rem"}}>
//           <Routes>

//           <Route path="/" element={ <Home /> } />
//             <Route path="/about" element={<About/>} />
//             <Route path="/contact" element={<Contact/>} />

//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//     <Footer/>
//   </Router>

//   );
// }

// export default App;
