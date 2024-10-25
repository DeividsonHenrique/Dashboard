import { useState, useEffect } from "react"
import Card from "../Card/Card"
import Reports from "../Reports/Reports"
import RecentSales from "../RecentSales/RecentSales"
import TopSelling from "../../Selling/TopSelling"

function Dashboard() {
    const [cards, setCards] = useState([])

    const fetchData = async () => {
         await fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => { setCards(data)})
        .catch(err => console.log(err.message))
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {cards  && cards.length > 0 && cards.map((card) => {
                return (<Card key={card._id} card={card} />)})
            }
            <div className="col-12">
                <Reports />
            </div>
            <div className="col-12">
                <RecentSales />
            </div>

            <div className="col-12">
                <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">

        </div>
      </div>
    </section>
  )
}

export default Dashboard
