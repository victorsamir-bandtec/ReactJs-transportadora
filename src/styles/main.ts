import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
  }

  body {
    margin: 0;
    /* font-family: 'Inter', sans-serif; */
    font-family: 'Quicksand', sans-serif;



    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #f8f7f5;
  }
`;
