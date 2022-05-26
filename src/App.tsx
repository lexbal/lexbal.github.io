import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Header from './components/Page/Header/Header';
import Container from './components/Common/Container/Container';
import Footer from './components/Page/Footer/Footer';
import Home from './components/Page/Home/Home';
import './App.scss';

function App() {
  return (
    <div className="App" data-testid="App">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
