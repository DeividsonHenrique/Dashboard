import NavNotices from "../NavGeneral/NavNotices.jsx"
import NavMessage from "../NavGeneral/NavMessage.jsx"
import NavAvatar from "../NavGeneral/NavAvatar.jsx"
import {NavContainer} from "./style.js"

function Nav() {
  return (
    <NavContainer className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <NavNotices />
            <NavMessage />
            <NavAvatar />
        </ul>
    </NavContainer>
  )
}

export default Nav
