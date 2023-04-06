# Travel Tracker

This application uses an Express/React "monolith" app structure! This means that your React code will be located in the `client` folder and your Express code in a `server` folder. **You do not need to worry about changing anything within the `server` folder.**

Within the `client` folder, remember to leave your `client/src/main.js` file as-is: **you do not need to change this file**. All syntax referring to RedBox is there for greater error handling. The file is set up to render `App.js`.

In `client/src/components/App.js`, keep all logic referencing the `hot` loader as is. In particular, make sure you do not edit the importing of `{ hot }` at the top of the file, nor the exporting of the component i.e. `export default hot(App)`. **This is the only component in our app that requires the `hot` loader**

```no-highlight
yarn install
yarn run dev
```

If you go to [localhost:3000](http://localhost:3000), there will be nothing on the page except "Wanderlust Wishlist", and there should be no errors in your console.
