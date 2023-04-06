import React from "react"

const TravelTile = (props) => {
  // debugger
  const handleDestinationClick = () => {
    console.log("I was clicked!")
    // console.log(props)
    props.setSelectedDestinationId(props.destinationId)
    // when clicking on a destination, we want to set that destination id in state
    // to know it was the one selected
  }

  let boldedDestination = ""
  // when the selected destination in state is the same as this destination
  if (props.selectedDestinationId === props.destinationId) {
    boldedDestination = "done"
  }
  // then we want the boldedDestination className to change to "done"
  console.log("about to render the travel tile")
  return (
    <li className={boldedDestination} onClick={handleDestinationClick}>
      {props.destinationName}
    </li>
  )
}

export default TravelTile
