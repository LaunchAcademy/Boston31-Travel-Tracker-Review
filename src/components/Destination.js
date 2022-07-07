import React from "react"

const Destination = (props) => {
  console.log(props)
  // debugger
  const selectedHandler = () => {
    console.log("I was clicked!")
    props.setSelectedPlaceId(props.place.id)
  }

  let selectedClass = ""
  if (props.place.id === props.selectedPlaceId) {
    selectedClass = "done"
  }

  return (
    <li className={selectedClass} onClick={selectedHandler}>{props.place.name}</li>
  )
}

export default Destination