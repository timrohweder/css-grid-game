import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --cols: [left-gutter-start] minmax(2rem, 1fr) [left-gutter-end main-start] repeat(16, minmax(1.5rem, 1fr)) [main-end right-gutter-start] minmax(2rem, 1fr) [right-gutter-end];
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
  }

  body {
    --body-y-padding: 0rem;
    padding: var(--body-y-padding) 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  p {
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`
