import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Header from './components/Page/Header/Header';
import Container from './components/Common/Container/Container';
import Home from './components/Page/Home/Home';
import './App.scss';
import Footer from './components/Page/Footer/Footer';

function App() {
  return (
    <div className="App" data-testid="App">
      <Router>
        <Header />
        <Container>
          <Home />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
