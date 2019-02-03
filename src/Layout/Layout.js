import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const Container = styled.div`
    --header-height: 10rem;
    display: grid;
    grid-template-columns: var(--cols);
    grid-template-rows: var(--header-height) min-content 1fr;
`;

const Main = styled.main`
    grid-column: 1 / -1;
    overflow: auto;
`;

export default props => (
    <Container>
        <Header />
        <Main>{props.children}</Main>
    </Container>
);
