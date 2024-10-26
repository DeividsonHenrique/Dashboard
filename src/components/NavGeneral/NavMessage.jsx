import { NavIcon, Badge_number, Messages, MessageItem } from "./style";

export default function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <NavIcon href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <Badge_number className="badge bg-success badge-number">3</Badge_number>
      </NavIcon>

      <Messages className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#" className="badge rounded-pill bg-primary p-2 ms-2">
            View all
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <MessageItem className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae consequatur
                expedita quos facilis temporibus perferendis
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </MessageItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <MessageItem className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Anna Nelson</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae consequatur
                expedita quos facilis temporibus perferendis
              </p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </MessageItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <MessageItem className="message-item">
          <a href="#">
            <img
              src="assets/img/messages-3.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>David Muldon</h4>
              <p>
                Velit asperiores et ducimus soluta repudiandae consequatur
                expedita quos facilis temporibus perferendis
              </p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </MessageItem>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="dropdown-footer">
          <a href="#">Show all messages</a>
        </li>
      </Messages>
    </li>
  );
}
