import React from "react"

const Place = (props) => {
  // debugger

  const handleClick = () => {
    console.log("I was clicked!");
    props.setSelectedPlaceId(props.id)
    // can't check state here
  }

  let fontStyling = ""
  // // debugger
  if (props.id === props.selectedPlaceId) {
    // debugger
    fontStyling = "done"
  }

  return (
    <li onClick={handleClick} className={fontStyling}>
        {props.name}
    </li>
  )
}

export default Place