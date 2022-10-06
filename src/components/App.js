import React, { useState } from 'react';

import PlaceTile from './PlaceTile';

const App = (props) => {
  // debugger

  const [selectedPlaceIds, setSelectedPlaceIds] = useState([])

  console.log(selectedPlaceIds)
  
  const placeListItems = props.data.places.map((placeObject) => {

    return (
      <PlaceTile
        key={placeObject.id}
        name={placeObject.name}
        id={placeObject.id}
        selectedPlaceIds={selectedPlaceIds}
        setSelectedPlaceIds={setSelectedPlaceIds}
      />
    )
  })

  let favoritePlaceMessage = ""

  if (selectedPlaceIds.includes(props.data.favoritePlaceId)) {
    favoritePlaceMessage = <p className="callout beauty">
      What a beauty!
    </p>
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
