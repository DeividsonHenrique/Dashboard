import { useState, useEffect } from "react";
import CardFilter from "../Card/CardFilter";
import TopSellingItem from "./TopSellingItem";
import { Top_Selling, Table } from "./style";

function TopSelling() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    await fetch("./api/info.json") //http://localhost:3000/topselling
      .then((res) => res.json())
      .then((data) => {
        setItems(data.topselling);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Top_Selling className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>

        <Table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Sold</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {items &&
              items.length > 0 &&
              items.map((item) => (
                <TopSellingItem key={item._id} item={item} />
              ))}
          </tbody>
        </Table>
      </div>
    </Top_Selling>
  );
}

export default TopSelling;
