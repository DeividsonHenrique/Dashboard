import styled from "styled-components";

// Card Filter

export const Filter = styled.div`
  position: absolute;
  top: 15px;
  right: 0px;
`;

export const Icon = styled.a`
  color: #aab7cf;
  padding-right: 20px;
  padding-bottom: 5px;
  transition: 0.3s;
  font-size: 16px;

  &:hover {
    color: #4154f1;
  }

  &:focus {
    color: #4154f1;
  }
`;

export const DropHeader = styled.li`
  padding: 8px 15px;

  h6 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #aab7cf;
    margin-bottom: 0;
    padding: 0;
  }
`;

export const DropItem = styled.a`
  padding: 8px 15px;
`;

// Info Card

export const InfoCard = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);

  h5 {
    padding: 20px 0 15px 0;
    font-size: 18px;
    font-weight: 500;
    color: #012970;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;

    span {
      color: #899bbd;
      font-size: 14px;
      font-weight: 400;
    }
  }

  h6 {
    font-size: 28px;
    color: #012970;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

export const CardIcon = styled.div`
  font-size: 32px;
  line-height: 0;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  flex-grow: 0;

  color: #4154f1;
  background: #f6f6fe;
`;
