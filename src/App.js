import React from "react";
import "./App.css";
import { useState } from "react";
import Building from "./components/Building";
import PackageContext from "./components/PackageContext";
// import ImageUpload from "./components/ImageUpload";
import ImageUpload3 from "./components/ImageUpload3";

function App() {
  const [state, setState] = useState({
    companyName: "DHL Delivery Package",
    recipientName: "The Khan",
    package: "Secret Weapon (20Kg)",
    deliveryStatus: "Delivery In Progress..."
  });
  const runThisShit = () => {
    setState({ ...state, deliveryStatus: "Delivered" });
  };
  return (
    <PackageContext.Provider
      value={{
        data: state,
        yoyo: runThisShit, //second way to update state by passing function through packagecontext
        updateDeliveryStatus: () => {
          //direct sate update from Floor7 component
          setState({ ...state, deliveryStatus: "Delivered" });
        }
      }}
    >
      <div className="App">
        <h1>Context and useState</h1>
        <Building></Building>
        <hr />
        <ImageUpload3 />
      </div>
    </PackageContext.Provider>
  );
}

export default App;
