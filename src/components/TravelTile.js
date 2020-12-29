import React from "react"

const TravelTile = (props) => {
  // debugger

  return (
    <li className={props.selectedStatus} onClick={props.togglePlace}>
      {props.place.name}
    </li>
  )
}

export default TravelTile