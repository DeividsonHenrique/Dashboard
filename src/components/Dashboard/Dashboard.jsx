import Cards from "../Card/Cards"
import Reports from "../Reports/Reports"
import RecentSales from "../RecentSales/RecentSales"
import TopSelling from "../../Selling/TopSelling"
import RecentActivity from "../Activity/RecentActivity"
import BudgetReport from "../Budget/BudgetReport"
import WebTraffic from "../Web/WebTraffic"
import News from "../News/News"

function Dashboard() {
    

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <Cards />
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
            <RecentActivity />
            <BudgetReport />
            <WebTraffic />
            <News />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
