import { useState } from 'react'
import CardFilter from '../Card/CardFilter'
import WebTrafficChart from './WebTrafficChart'

function WebTraffic() {
    const [filter, setFilter] = useState("Today")

    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">
                Web Traffic <span>| {filter}</span>
            </h5>
            <WebTrafficChart />
        </div>
    </div>
  )
}

export default WebTraffic
