import { SeachBarContainer } from "./style.js";

function SearchBar() {
  return (
    <SeachBarContainer className="search-bar">
      <form
        action="#"
        className="search-form d-flex align-items-center"
        method="post"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </SeachBarContainer>
  );
}

export default SearchBar;
