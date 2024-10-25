import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        color: #444444;
        background-color: var(--bgcolor);
    }
  
    a{
        color: var(--primary);
        text-decoration: none;
        cursor: pointer;
    }
  
    a:hover{
        color: var(--second);
        text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6{
        font-family: 'Nunito', sans-serif;
    }

`;
