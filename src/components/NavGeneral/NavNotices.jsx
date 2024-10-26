import {
  NavIcon,
  Badge_number,
  NotificationsUl,
  NotificationItem,
} from "./style.js";

function NavNotices() {
  return (
    <li className="nav-item dropdown">
      <NavIcon href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <Badge_number className="badge bg-primary badge-number">4</Badge_number>
      </NavIcon>

      <NotificationsUl className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#" className="badge rounded-pill bg-primary p-2 ms-2">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <NotificationItem className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min. ago</p>
          </div>
        </NotificationItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <NotificationItem className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>1 hr. ago</p>
          </div>
        </NotificationItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <NotificationItem className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hrs. ago</p>
          </div>
        </NotificationItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <NotificationItem className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Dicta reprehenderit</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hrs. ago</p>
          </div>
        </NotificationItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </NotificationsUl>
    </li>
  );
}

export default NavNotices;
