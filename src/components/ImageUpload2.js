import React, { useEffect, useState } from "react";
import axios from "axios";

const PRESET_NAME = "zaawjkhe";
const CLOUD_NAME = "drakuseth";
const API_KEY = "181494391349546";

export default function ImageUpload2() {
  const [selectedFile, setState] = useState(null);

  const getImage = event => {
    setState({ ...selectedFile, selectedFile: event.target.files[0] });
  };
  const uploadImage = e => {
    e.preventDefault();
    const file = selectedFile.selectedFile;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", API_KEY);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("timestamp", (Date.now() / 1000) | 0);
    return axios
      .post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" }
        }
      )
      .then(response => {
        const data = response.data;
        const fileURL = data.secure_url; // You should store this URL for future references in your app
        console.log(data);
      });
  };
  return (
    <div className="Main">
      <h1>Upload Image</h1>

      <input type="file" onChange={getImage} />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}
