/* eslint-disable react/prop-types */
import { useState } from "react";
import CardFilter from "./CardFilter";
import { InfoCard, CardIcon } from "./style";

function Card({ card }) {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="col-xxl-4 col-md-6">
      <InfoCard className="card info-card sales-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {card.name} <span>| {filter}</span>
          </h5>

          <div className="d-flex align-items-center">
            <CardIcon className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </CardIcon>
            <div className="ps-3">
              <h6>
                {card.name === "Revenue"
                  ? "$" + card.amount.toLocaleString("en-US")
                  : card.amount.toLocaleString("en-US")}
              </h6>
              <span
                className={`${
                  card.percentage > 0 ? "text-success" : "text-danger"
                } small pt-1 fw-bold`}
              >
                {card.percentage > 0
                  ? card.percentage * 100
                  : -card.percentage * 100}
                %
              </span>{" "}
              <span className="text-muted small pt-2 ps-1">
                {card.percentage > 0 ? "increase" : "decrease"}
              </span>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}

export default Card;
