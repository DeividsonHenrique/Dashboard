import { useState, useEffect } from "react";
import CardFilter from "../Card/CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import { Activity } from "./style";

function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    await fetch("./public/data/api/info.json") //http://localhost:3000/recentactiviy
      .then((res) => res.json())
      .then((data) => {
        setItems(data.recentactiviy);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h5>

        <Activity className="activity">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <RecentActivityItem key={item._id} item={item} />
            ))}
        </Activity>
      </div>
    </div>
  );
}

export default RecentActivity;
