import React, { useState } from 'react';

import PlaceTile from './PlaceTile';

const App = (props) => {
  // debugger

  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  
  const placeListItems = props.data.places.map((placeObject) => {

    return (
      <PlaceTile
        key={placeObject.id}
        name={placeObject.name}
        id={placeObject.id}
        selectedPlaceId={selectedPlaceId}
        setSelectedPlaceId={setSelectedPlaceId}
      />
    )
  })

  let favoritePlaceMessage = ""

  if (selectedPlaceId === props.data.favoritePlaceId) {
    favoritePlaceMessage = "What a beauty!"
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          {placeListItems}
          {favoritePlaceMessage}
        </div>
      </div>
    </div>
  )
}

export default App;
