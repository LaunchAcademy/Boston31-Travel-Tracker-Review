import React from "react"

const PlaceTile = (props) => {
    // debugger

    const clickPlace = () => {
    //    i need to change state to the id of this placetile
        props.setSelectedPlaceId(props.id)
    }

    // placeClassName will need to change based on if this tile was clicked
    let placeClassName = ""
    if (props.selectedPlaceId === props.id) {
        placeClassName = "done"
    }

    return (
        <div className={placeClassName} onClick={clickPlace}>
            {props.name}
        </div>
    )
}

export default PlaceTile
