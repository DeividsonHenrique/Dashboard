import styled from "styled-components";

export const SeachBarContainer = styled.div`
  min-width: 360px;
  padding: 0 20px;

  @media (max-width: 1199px) {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    padding: 20px;
    box-shadow: 0px 0px 15px 0px rgba(1, 41, 112, 0.1);
    z-index: 9999;
    background: white;
    transition: 0.3s;
    visibility: hidden;
    opacity: 1;
  }

  form {
    width: 100%;
  }

  input {
    border: 0;
    font-size: 14px;
    color: #012970;
    border: 1px solid rgba(1, 41, 112, 0.2);
    padding: 7px 38px 7px 8px;
    border-radius: 3px;
    transition: 0.3s;
    width: 100%;

    &:focus {
      outline: none;
      box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
      border: 1px solid rgba(1, 41, 112, 0.3);
    }

    &:hover {
      outline: none;
      box-shadow: 0 0 10px 0 rgba(1, 41, 112, 0.15);
      border: 1px solid rgba(1, 41, 112, 0.3);
    }
  }

  button {
    border: 0;
    padding: 0;
    margin-left: -30px;
    background-color: transparent;
  }

  i {
    color: #012970;
  }
`;
