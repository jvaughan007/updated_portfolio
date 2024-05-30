import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <StyledMain>
      <NavBar />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  
`;

export default App;
