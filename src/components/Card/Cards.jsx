import { useState, useEffect } from "react"
import Card from "../Card/Card"

function Cards() {
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
    <>
      {cards  && cards.length > 0 && cards.map((card) => {
                return (<Card key={card._id} card={card} />)})
            }
    </>
  )
}

export default Cards
