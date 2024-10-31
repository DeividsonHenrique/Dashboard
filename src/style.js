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


.card {
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
}
  

.card-title {
  padding: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
}

.card-title span {
  color: #899bbd;
  font-size: 14px;
  font-weight: 400;
}


.card-body {
  padding: 0 20px 20px 20px;
}

.card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}


.sidebar-nav .nav-heading {
  font-size: 11px;
  text-transform: uppercase;
  color: #899bbd;
  font-weight: 600;
  margin: 10px 0 5px 15px;
}

.sidebar-nav .nav-link {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #4154f1;
  transition: 0.3;
  background: #f6f9ff;
  padding: 10px 15px;
  border-radius: 4px;
}

.sidebar-nav .nav-link i {
  font-size: 16px;
  margin-right: 10px;
  color: #4154f1;
}

.sidebar-nav .nav-link.collapsed {
  color: #012970;
  background: #fff;
}

.sidebar-nav .nav-link.collapsed i {
  color: #899bbd;
}

.sidebar-nav .nav-link:hover {
  color: #4154f1;
  background: #f6f9ff;
}

.sidebar-nav .nav-link:hover i {
  color: #4154f1;
}

.sidebar-nav .nav-link .bi-chevron-down {
  margin-right: 0;
  transition: transform 0.2s ease-in-out;
}

.sidebar-nav .nav-link:not(.collapsed) .bi-chevron-down {
  transform: rotate(180deg);
}

.sidebar-nav .nav-content {
  padding: 5px 0 0 0;
  margin: 0;
  list-style: none;
}

.sidebar-nav .nav-content a {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #012970;
  transition: 0.3;
  padding: 10px 0 10px 40px;
  transition: 0.3s;
}

.sidebar-nav .nav-content a i {
  font-size: 6px;
  margin-right: 8px;
  line-height: 0;
  border-radius: 50%;
}

.sidebar-nav .nav-content a:hover,
.sidebar-nav .nav-content a.active {
  color: #4154f1;
}

.sidebar-nav .nav-content a:hover i,
.sidebar-nav .nav-content a.active i {
  background: #4154f1;
}
`;
