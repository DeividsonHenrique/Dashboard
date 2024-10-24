/* eslint-disable react/prop-types */

function NavItem({ nav }) {
  return (
    <li key={nav._id} className="nav-item">
      <a className="nav-link collapsed" href="#">
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
      </a>
    </li>
  );
}

export default NavItem;
