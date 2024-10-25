import CardFilter from "../Card/CardFilter"
import { useState, useEffect } from "react"
import RecentSalesTable from "./RecentSalesTable"


function RecentSales() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState("Today")

    const fetchData = async () => {
         await fetch('http://localhost:3000/recentsales')
        .then(res => res.json())
        .then(data => { setItems(data)})
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">Recent Sales <span>| {filter}</span></h5>
            <RecentSalesTable items={items} />
      
        </div>
    </div>
  )
}

export default RecentSales
