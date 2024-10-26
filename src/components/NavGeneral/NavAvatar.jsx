import profileImg from "../../images/user.jpg";
import { NavProfile, Profile } from "./style";

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <NavProfile
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">Henry</span>
      </NavProfile>

      <Profile className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown header">
          <h6>Deivid Henry</h6>
          <span>Web Developer</span>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Need Help?</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </Profile>
    </li>
  );
}

export default NavAvatar;
