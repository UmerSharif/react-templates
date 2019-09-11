import React, { useEffect, useState } from "react";
import axios from "axios";

const PRESET_NAME = "zaawjkhe";
const CLOUD_NAME = "drakuseth";
const url = "https://res.cloudinary.com/drakuseth/image/upload";

export default function ImageUpload() {
  const [state, setState] = useState("");
  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: CLOUD_NAME, upload_preset: PRESET_NAME },
      (error, result) => {
        DisPlay(result.info.secure_url);
      }
    );
  };

  function DisPlay(results) {
    setState(...state, results); //TODO: how to persist the state after the widget closes
  }

  return (
    <div className="Main">
      <h1>Upload Image</h1>

      <div className="upload">
        <button onClick={uploadWidget} className="upload-button">
          Add Image
        </button>
        <img src={state}></img>
      </div>
    </div>
  );
}
