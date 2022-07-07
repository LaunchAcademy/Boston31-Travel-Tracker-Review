import React, { useState } from 'react';

import Destination from './Destination';

const App = (props) => {
// debugger
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  const placesArray = props.data.places.map((place) => {
    // console.log(place)
    return (
      <Destination
        key={place.id}
        place={place}
        setSelectedPlaceId={setSelectedPlaceId}
        selectedPlaceId={selectedPlaceId}
        // favoritePlaceId={props.data.favoritePlaceId}
      />
    )
  })
console.log("state", selectedPlaceId)

  let message;
  if (props.data.favoritePlaceId === selectedPlaceId) {
    message = <p>What a beauty!</p>
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          {placesArray}

          {message}
        </div>
      </div>
    </div>
  )
}

export default App;
