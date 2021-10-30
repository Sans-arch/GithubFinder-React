import React from 'react';

import Container from './components/Container';
import SearchBox from './components/SearchBox';
import Header from './components/Header';

import './styles/global.scss';

function App() {
  return (
    <>
      <Container>
        <Header />
        <SearchBox />
      </Container>
    </>
  );
}

export default App;
