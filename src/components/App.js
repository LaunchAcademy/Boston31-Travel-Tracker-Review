import React, { useState } from 'react';

import Place from './Place';

const App = (props) => {
  // debugger
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  const placesData = props.data.places;
  const favoritePlaceId = props.data.favoritePlaceId;
  // const { favoritePlaceId } = props.data

  const placesComponents = placesData.map((place) => {
    // debugger
    // <li>{place.name}</li>
    return (
      <Place
        key={place.id}
        place={place}
        selectedPlaceId={selectedPlaceId}
        setSelectedPlaceId={setSelectedPlaceId}
      />
    )
  })
  // console.log(selectedPlace);

  let secretMessage;
  if (selectedPlaceId === favoritePlaceId) {
    secretMessage = <div>What a beauty!</div>
  }

  // debugger
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          
          {placesComponents}
          
          {secretMessage}
        </div>
      </div>
    </div>
  )
}

export default App;
