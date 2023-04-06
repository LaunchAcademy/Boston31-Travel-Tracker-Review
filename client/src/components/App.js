import React, { useState } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
// backup import if sass is not working. Comment the `main.scss` out in this case.
// import "../assets/scss/main.css"

const App = () => {
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
        </div>
      </div>
    </div>
  )
}

export default hot(App)
