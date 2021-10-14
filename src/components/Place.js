import React from "react"

const Place = (props) => {
  const handleClick = () => {
    props.setSelectedPlaceId(props.place.id)
  }

  let styling = ""

  if (props.selectedPlaceId === props.place.id) {
    styling = "done"
  }

  return (
    <li 
      onClick={handleClick} 
      className={styling}
    >
      {props.place.name}
    </li>
  )
}
export default Place;