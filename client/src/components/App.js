import React, { useState } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
import PlaceTile from "./PlaceTile"
// backup import if sass is not working. Comment the `main.scss` out in this case.
// import "../assets/scss/main.css"

const App = (props) => {
  // debugger
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  console.log("selected:", selectedPlaceId);

  const placesData = props.data.places

  // .map over places data
  const placesArray = placesData.map((place) => {
    // console.log("mapping over places...");
    
    // // inside map
    // const handleClick = () => {
    //   console.log("I was clicked", place);
    //   setSelectedPlaceId(place.id)
    // }
    
    // let boldedClass = ""
    // if (selectedPlaceId === place.id) {
    //   boldedClass = "done"
    // }
    
    return (
      <PlaceTile 
        key={place.id}
        place={place}
        selectedPlaceId={selectedPlaceId}
        setSelectedPlaceId={setSelectedPlaceId}
      />
      // <li 
      //   key={place.id}
      //   onClick={handleClick}
      //   className={boldedClass}
      // >
      //   {place.name}
      // </li>
    )
  })


  // outside .map of places
  let message;
  if (selectedPlaceId === props.data.favoritePlaceId) {
    message = <p>What a beauty!</p>
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="text-center">
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

export default hot(App)
