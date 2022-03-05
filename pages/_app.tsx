import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    body {
        font-size: 1.6rem;
        font-family: 'Inter', 'sans-serif';
        user-select: none;
        -webkit-user-select: none; 
        -moz-user-select: none;   
        -ms-user-select: none;     
        -o-user-select: none;
    }
    
    a {
        text-decoration: none;
        color:black;
    }
    ul {
        list-style-type: none;
    }
    img{
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    button{
      border:none;
      cursor:pointer;
      
      &:focus{
        outline:none;
      }
    }
    input {
      outline:none;
      padding: 0 1.5rem;
      &:focus::placeholder{
        color:transparent;
      }
    }
  `;

const theme = {
  colors: {
    //@ common style
    mainColor: "#FF6363",
    pointColor: "#304ffd",
    lightblue: "#C5E2EE",
    starColor: "#fd4",
  },
};

export type Theme = typeof theme;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
