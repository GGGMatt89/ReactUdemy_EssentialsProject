//import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
//import TabButton from "./components/TabButton.jsx";
//import { useState, Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Header/Examples.jsx";

function App() {
  return (
    // <Fragment>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* </Fragment> */}
    </>
  );
}

export default App;
