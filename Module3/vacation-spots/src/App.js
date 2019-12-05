import React from "react"
import VacationCard from "./VacationCard"
import vacationSpots from "./vacationSpots"

function App() {
  const vacation = vacationSpots.map(card => <VacationCard key={card.id} img={card.img} place={card.place} price={card.price} timeToGo={card.timeToGo}/>)

  return (
    <div>
      {vacation}
    </div>
  )
}

export default App