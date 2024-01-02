import React, { useState } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
// backup import if sass is not working. Comment the `main.scss` out in this case.
// import "../assets/scss/main.css"

import PlaceTile from "./PlaceTile"

const App = (props) => {
  // console.log(props);
  // debugger
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  console.log(selectedPlaceId)

  const arrayOfPlaces = props.data.places

  const listOfPlaces = arrayOfPlaces.map((place) => {
    // debugger
    // return <li>{place.name}</li>
    return (
      <PlaceTile 
        key={place.id}
        placeObject={place} 
        id={place.id}
        setSelectedPlaceId={setSelectedPlaceId}
        selectedPlaceId={selectedPlaceId}
      />
    )
  })

  // console.log(listOfPlaces)

  let secretMessage;
  console.log("evaluating secret message");
  if (selectedPlaceId === props.data.favoritePlaceId) {
    secretMessage = <p>What a beauty!</p>
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <ul>
            {listOfPlaces}
          </ul>
          {secretMessage}
        </div>
      </div>
    </div>
  )
}

export default hot(App)
