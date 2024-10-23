import styled from "styled-components";

export const LogoDiv = styled.div`
    line-height: 1;

    @media (min-width: 1200px) {
        width: 280px;
    }

    img{
        max-height: 26px;
        margin-right: 6px;
    }

    span{
        font-size: 26px;
        font-weight: 700;
        color: #012970;
        font-family: "Nunito", sans-serif;
    }
`

export const ToggleSidebarBtn = styled.i`
    font-size: 32px;
    padding-left: 10px;
    cursor: pointer;
    color: #012970;
`