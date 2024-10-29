/* eslint-disable react/prop-types */
import { Filter, Icon, DropHeader, DropItem } from "./style";

function CardFilter({ filterChange }) {
  return (
    <Filter className="filter">
      <Icon href="#" className="icon" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </Icon>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <DropHeader className="dropdown-header text-start">
          <h6>Filter</h6>
        </DropHeader>

        <li>
          <DropItem
            className="dropdown-item"
            onClick={() => filterChange("Today")}
          >
            Today
          </DropItem>
        </li>

        <li>
          <DropItem
            className="dropdown-item"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </DropItem>
        </li>

        <li>
          <DropItem
            className="dropdown-item"
            onClick={() => filterChange("This Year")}
          >
            This Year
          </DropItem>
        </li>
      </ul>
    </Filter>
  );
}

export default CardFilter;
