import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: var(--cols);
  grid-template-rows: 7rem 1fr 5rem;
`

export default (props) => (
  <Container>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Container>
);
