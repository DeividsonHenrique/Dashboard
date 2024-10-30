import styled from "styled-components";

export const NavIcon = styled.a`
  font-size: 22px;
  color: #012970;
  margin-right: 25px;
  position: relative;
`;

export const NavProfile = styled.a`
  color: #012970;

  img {
    height: 36px;
    width: 36px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Badge_number = styled.span`
  position: absolute;
  inset: -2px -5px auto auto;
  font-weight: normal;
  font-size: 12px;
  padding: 3px 6px;
`;

export const NotificationsUl = styled.ul`
  inset: 8px -15px auto auto !important;
`;

export const NotificationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  transition: 0.3s;

  i {
    margin: 0 20px 0 10px;
    font-size: 24px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 13px;
    margin-bottom: 3px;
    color: #919191;
  }

  &:hover {
    background-color: #f6f9fc;
  }
`;

export const Messages = styled.ul`
  inset: 8px -15px auto auto !important;
`;

export const MessageItem = styled.li`
  padding: 15px 10px;
  transition: 0.3s;

  a {
    display: flex;
  }

  img {
    margin: 0 20px 0 10px;
    max-height: 40px;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #444444;
  }

  p {
    font-size: 13px;
    margin-bottom: 0;
    color: #919191;
  }

  &:hover {
    background-color: #f6f9fc;
  }
`;

export const Profile = styled.ul`
  min-width: 240px;
  padding-bottom: 0;
  top: 8px !important;

  h6 {
    font-size: 18px;
    margin-bottom: 0;
    font-weight: 600;
    color: #444444;
  }

  span {
    font-size: 14px;
  }

  &.dropdown-item {
    font-size: 14px;
    padding: 10px 15px;
    transition: 0.3s;

    &:hover {
      background-color: #f6f9fc;
    }
  }

  i {
    margin-right: 10px;
    font-size: 18px;
    line-height: 0;
  }
`;
