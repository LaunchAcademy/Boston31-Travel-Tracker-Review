import React from 'react';

const PlaceTile = (props) => {
  // debugger
  // console.log(props);
  // console.log(props.placeObject.id);
  const handleClick = () => {
    console.log("I was clicked!");
    // debugger
    
    // if (props.selectedPlaceId === props.id) {
    //   props.setSelectedPlaceId(null)
    // } else {
      props.setSelectedPlaceId(props.id)
    // }

    // DONT DO!
    // console.log(props.selectedPlaceId)
  }

  let tileStyle;
  // debugger
  if (props.id === props.selectedPlaceId) {
    tileStyle = "done"
  }

  return (
    <li onClick={handleClick} className={tileStyle}>
      {props.placeObject.name}
    </li>
  )
}

export default PlaceTile