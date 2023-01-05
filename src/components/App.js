import React, { useState } from 'react';

import Place from "./Place"

const App = (props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  console.log(selectedPlaceId);

  // debugger
  const places = props.data.places
  const favoritePlaceId = props.data.favoritePlaceId

  const placesArray = places.map((place) => {
    // debugger
    return (
      <Place 
        key={place.id}
        name={place.name}
        id={place.id}
        setSelectedPlaceId={setSelectedPlaceId}
        selectedPlaceId={selectedPlaceId}
      />
    )
  })
  // debugger

  let message = null
  // debugger
  if (favoritePlaceId === selectedPlaceId) {
    message = (
      <div>What a beauty!</div>
    )
  }
  
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          
          <ul>
            {placesArray}
          </ul>

          {message}
        </div>
      </div>
    </div>
  )
}

export default App;
