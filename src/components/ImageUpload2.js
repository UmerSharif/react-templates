import React, { useEffect, useState } from "react";
import axios from "axios";

const PRESET_NAME = "zaawjkhe";
const CLOUD_NAME = "drakuseth";
const API_KEY = "181494391349546";

export default function ImageUpload2() {
  let error = {};
  const [selectedFile, setState] = useState(null);
  const [ImageUrl, setImageUrl] = useState("");
  const [fileSizeError, setError] = useState("");

  const getImage = event => {
    if (checkFileSize(event)) {
      setState({ ...selectedFile, selectedFile: event.target.files[0] });
    }
    setError(error.sizeError);
  };

  const checkFileSize = event => {
    let file = event.target.files[0];
    let fileSize = file.size / 1024 / 1024;
    let size = 3;
    console.log(fileSize);
    if (fileSize > size) {
      error.sizeError = "File Size too big. Pick smaller size";
    }
    if (Object.keys(error).length > 0) {
      event.target.value = "";
      return false;
    }
    return true;
  };

  const uploadImage = e => {
    e.preventDefault();
    //validate
    const file = selectedFile.selectedFile;
    const formData = new FormData();
    // formData.append("file", file);
    // formData.append("api_key", API_KEY);
    // formData.append("upload_preset", PRESET_NAME);
    // formData.append("timestamp", (Date.now() / 1000) | 0);
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
        setImageUrl(fileURL);
      });
  };
  return (
    <div className="Main">
      <h1>Upload Image</h1>

      <input type="file" onChange={getImage} />
      <button onClick={uploadImage}>Upload Image</button>
      <div>
        <img src={ImageUrl} alt="" />
      </div>
      <h1>{fileSizeError}</h1>
    </div>
  );
}
