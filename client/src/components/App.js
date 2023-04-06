import React, { useState } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
// backup import if sass is not working. Comment the `main.scss` out in this case.
// import "../assets/scss/main.css"

import TravelTile from "./TravelTile"

const App = (props) => {
  // debugger
  const [selectedDestinationId, setSelectedDestinationId] = useState(null)
  console.log(selectedDestinationId)

  const arrayOfPlaces = props.data.places.map((destination) => {
    // debugger
    console.log("In the map iteration for travel tiles")
    // console.log(destination)
    // <li>{destination.name}</li>
    return (
      <TravelTile
        key={destination.id}
        destinationId={destination.id}
        destinationName={destination.name}
        setSelectedDestinationId={setSelectedDestinationId}
        selectedDestinationId={selectedDestinationId}
      />
    )
  })

  // want to see secret message when the selected destination id in state is the same as the favoritePlaceId (5)
  let secretMessage = null
  // debugger
  if (props.data.favoritePlaceId === selectedDestinationId) {
    // debugger
    secretMessage = <p>What a beauty!</p>
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <ul>{arrayOfPlaces}</ul>

          {secretMessage}
        </div>
      </div>
    </div>
  )
}

export default hot(App)
