import styled from "styled-components";

export const SideBarAside = styled.aside`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 996;
  transition: all 0.3s;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #aab7cf transparent;
  box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
  background-color: #fff;

  @media (max-width: 1199px) {
    left: -300px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aab7cf;
  }
`;

export const SideBarNav = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .nav-item {
    margin-bottom: 5px;
  }
`;
