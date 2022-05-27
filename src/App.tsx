import React from 'react';
import Header from './components/Page/Header/Header';
import Container from './components/Common/Container/Container';
import Home from './components/Page/Home/Home';
import './App.scss';
import Footer from './components/Page/Footer/Footer';

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
