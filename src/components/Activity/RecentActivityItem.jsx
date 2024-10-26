/* eslint-disable react/prop-types */
import {
  ActivityLabel,
  ActivityItem,
  ActivityBadge,
  ActivityContent,
} from "./style";

function RecentActivityItem({ item }) {
  return (
    <ActivityItem className="activity-item d-flex">
      <ActivityLabel>{item.time}</ActivityLabel>
      <ActivityBadge
        className={`bi bi-circle-fill ${item.color} align-self-start`}
      ></ActivityBadge>

      {item.highlight === "" ? (
        <ActivityContent className="activity-content">
          {item.content}
        </ActivityContent>
      ) : (
        <ActivityContent>
          {item.content.substring(0, item.content.indexOf(item.highlight))}
          <a href="#" className="fw-bold text-dark">
            {item.highlight}
          </a>
          {item.content.slice(
            item.content.indexOf(item.highlight) + item.highlight.length,
            -1
          )}
        </ActivityContent>
      )}
    </ActivityItem>
  );
}

export default RecentActivityItem;
