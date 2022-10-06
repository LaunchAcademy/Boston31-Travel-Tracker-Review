import React from "react"

const PlaceTile = (props) => {
    // debugger

    const clickPlace = () => {
        if (props.selectedPlaceIds.includes(props.id)) {
            const filteredPlaceIds = props.selectedPlaceIds.filter((placeId) => {
                return placeId !== props.id
            })
            props.setSelectedPlaceIds(filteredPlaceIds)
        } else {
            let newPlaceIds = props.selectedPlaceIds.concat(props.id)
            props.setSelectedPlaceIds(newPlaceIds)
        }
    }

    let placeClassName = ""
    if (props.selectedPlaceIds.includes(props.id)) {
        placeClassName = "done"
    }

    return (
        <div className={placeClassName} onClick={clickPlace}>
            {props.name}

        </div>
    )
}

export default PlaceTile
