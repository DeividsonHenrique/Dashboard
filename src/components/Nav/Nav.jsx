import NavNotices from "../NavGeneral/NavNotices.jsx";
import NavMessage from "../NavGeneral/NavMessage.jsx";
import NavAvatar from "../NavGeneral/NavAvatar.jsx";
import { Ul } from "./style.js";

function Nav() {
  return (
    <div className="header-nav ms-auto">
      <Ul className="d-flex align-items-center">
        <NavNotices />
        <NavMessage />
        <NavAvatar />
      </Ul>
    </div>
  );
}

export default Nav;
