import styled from "styled-components";

export const PostNews = styled.div`
  img {
    width: 80px;
    float: left;
    border-radius: 5px;
  }

  h4 {
    font-size: 15px;
    margin-left: 95px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  a {
    color: #012970;
    transition: 0.3s;

    &:hover {
      color: #4154f1;
    }
  }

  p {
    font-size: 14px;
    color: #777777;
    margin-left: 95px;
  }
`;
