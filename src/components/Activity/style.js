import styled from "styled-components";

export const Activity = styled.div`
  font-size: 14px;
`;

export const ActivityItem = styled.div`
  &:last-child {
    .activity-content {
      padding-bottom: 0;
    }
  }
`;

export const ActivityLabel = styled.div`
  color: #888;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 64px;

  &::before {
    content: "";
    position: absolute;
    right: -11px;
    width: 4px;
    top: 0;
    bottom: 0;
    background-color: #ede9fe;
  }
`;

export const ActivityBadge = styled.i`
  margin-top: 3px;
  z-index: 1;
  font-size: 11px;
  line-height: 0;
  border-radius: 50%;
  flex-shrink: 0;
  border: 3px solid #fff;
  flex-grow: 0;
`;

export const ActivityContent = styled.div`
  padding-left: 10px;
  padding-bottom: 20px;
`;
