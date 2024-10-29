import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        scroll-behavior: smooth;
        --primary: #4154f1;
        --second: #717ff5;
        --bgcolor: #f6f9ff;
    }


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

export const Bootstrap = createGlobalStyle`

    .dropdown-menu{
        border-radius: 4px;
        padding: 10px 0;
        -webkit-animation-name: dropdown-animate;
        animation-name: dropdown-animate;
        -webkit-animation-duration: 0.2s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        border: 0;
        box-shadow: 0 5px 30px 0 rgba(82, 63, 105, 0.2);
    }

    .dropdown-menu .dropdown-header, .dropdown-menu .dropdown-footer{
        text-align: center;
        font-size: 15px;
        padding: 10px 25px;
    }

    .dropdown-menu .dropdown-footer a{
        color: #444444;
        text-decoration: underline;
    }

    .dropdown-menu .dropdown-footer a:hover{
        text-decoration: none;
    }

    .dropdown-menu .dropdown-divider{
        color: #a5c5fe;
        margin: 0;
    }

    .dropdown-menu .dropdown-item{
        font-size: 14px;
        padding: 10px 15px;
        transition: 0.3s;
    }

    .dropdown-menu .dropdown-item i{
        margin-right: 10px;
        font-size: 18px;
        line-height: 0;
    }

    .dropdown-menu .dropdown-item:hover{
        background-color: #f6f9fc;
    }


    @media (min-width: 768px){
        .dropdown-menu-arrow:before{
            content: "";
            width: 13px;
            height: 13px;
            background: #fff;
            position: absolute;
            top: -7px;
            right: 20px;
            transform: rotate(45deg);
            border-top: 1px solid #eaedf1;
            border-left: 1px solid #eaedf1;
        }
    }

    @-webkit-keyframes dropdown-animate{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
        0%{
            opacity: 0;
        }
    }

    @keyframes dropdown-animate{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
        0%{
            opacity: 0;
        }
    }


    @media (min-width: 1200px){
        #main, #footer{
            margin-left: 300px;
        }
    }

    @media (max-width: 1199px){
        .toggle-sidebar .sidebar{
            left: 0;
        }
    }

    @media (min-width: 1200px){
        .toggle-sidebar #main, .toggle-sidebar #footer{
            margin-left: 0;
    }
        .toggle-sidebar .sidebar{
            left: -300px;
    }
}


.dashboard .revenue-card .card-icon {
  color: #2eca6a;
  background: #e0f8e9;
}

.dashboard .customers-card .card-icon {
  color: #ff771d;
  background: #ffecdf;
}

`;
