import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --cols: [left-gutter-start] 1fr [left-gutter-end main-start] repeat(16, minmax(1.5rem, 1fr)) [main-end right-gutter-start] 1fr [right-gutter-end];
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100%;
  }

  #root {
    height: 100%;
  }

  p {
    font-size: 1.8rem;
  }

  main {
    grid-column: main-start / main-end;
  }
`
