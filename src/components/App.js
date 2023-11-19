import React from "react";
import NavBar from "./NavBar";
// the App component should render out the GifListContainer component
import GifListContainer from "./GifListContainer";

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
