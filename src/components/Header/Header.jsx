import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { HeaderContainer } from "./style.js";

function Header() {
  return (
    <HeaderContainer
      id="header"
      className="header fixed-top d-flex align-items-center"
    >
      <Logo />
      <SearchBar />
      <Nav />
    </HeaderContainer>
  );
}

export default Header;
