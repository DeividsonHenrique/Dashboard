import { useState, useEffect } from "react";
import CardFilter from "../Card/CardFilter";
import NewsPostItem from "./NewsPostItem";

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = async () => {
    await fetch("./public/data/info.json") //http://localhost:3000/news
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          News <span>| {filter}</span>
        </h5>
        <div className="news">
          {news &&
            news.length > 0 &&
            news.map((item) => <NewsPostItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default News;
