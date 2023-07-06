import React from 'react';

const PlaceTile = (props) => {
  const handleClick = () => {
    console.log("I was clicked", props.place);
    props.setSelectedPlaceId(props.place.id)
  }

  let boldedClass = ""
  if (props.selectedPlaceId === props.place.id) {
    boldedClass = "done"
  }

  return (
    <li className={boldedClass} onClick={handleClick}>{props.place.name}</li>
  )
}

export default PlaceTile